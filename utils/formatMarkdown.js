/* Copyright (C) 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { defListHastHandlers, remarkDefinitionList } from 'remark-definition-list'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import solarizedLight from '/public/solarized-light.json'

const options = {
  theme: solarizedLight,
  onVisitLine (node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted.
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  }
}

export default async function formatMarkdown (content) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkDefinitionList)
    .use(remarkRehype, {
      allowDangerousHtml: true,
      handlers: Object.assign({}, defListHastHandlers)
    })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypePrettyCode, options)
    .use(rehypeStringify)
    .process(content)

  const html = String(file)

  return html
}
