/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const colors = {
  light: {
    bg: '#FFFFDC',
    text: '#0C0601',
    link: '#FE2D03'
  },
  dark: {
    bg: '#170F17',
    text: '#E9D8FD',
    link: '#B245FF'
  }
}

const styles = {
  global: props => ({
    body: {
      color: mode('light.text', 'dark.text')(props),
      bg: mode('light.bg', 'dark.bg')(props),
      boxSizing: 'border-box',
      p: '1em'
    },
    '#content p': {
      lineHeight: '1.75em',
      fontSize: '1.15rem',
      mb: '1.5em'
    },
    '#content img': {
      maxW: '100%',
      mb: '2.5em'
    },
    '#content audio': {
      display: 'flex',
      justifyContent: 'center',
      mb: '2.5em'
    }
  })
}
const textStyles = {
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  }
}

const components = {
  Link: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'light.link' : 'dark.link',
      textDecoration: 'underline'
    })
  },
  Divider: {
    baseStyle: () => ({
      mb: '1rem'
    })
  },
  Badge: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'light.text' : 'dark.text',
      bg: colorMode === 'light' ? 'light.link' : 'dark.link'
    })
  }
}

const theme = extendTheme({ config, colors, styles, textStyles, components })

export default theme
