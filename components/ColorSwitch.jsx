/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ColorSwitch () {
  const { colorMode, toggleColorMode } = useColorMode()

  const iconColor = {
    light: 'dark.text',
    dark: 'light.text'
  }

  const bgColor = {
    light: 'dark.link',
    dark: 'light.link'
  }

  return (
    <IconButton
      aria-label='Switch color mode'
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
      bg={bgColor[colorMode]}
    />
  )
}
