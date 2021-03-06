/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Link from 'next/link'

export default function Recent (props) {
  return (
    <>
      <ul>
        {props.posts.map(function (post, idx) {
          return (
            <li key={idx}>
              <Link href={'/' + post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
