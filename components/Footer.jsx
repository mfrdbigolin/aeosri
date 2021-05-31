/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Text, Link, Stack, VStack } from '@chakra-ui/react'

library.add(fab)
library.add(fas)

export default function Footer () {
  return (
    <footer>
      <VStack>
        <Text fontSize='xs'>
          Copyright &copy; 2021 Matheus Fernandes Bigolin
        </Text>

        <Text fontSize='xs'>
          The content of this site is licensed under the{' '}
          <Link href='https://creativecommons.org/licenses/by-sa/4.0/'>
            Creative Commons Attribution-ShareAlike 4.0 International (CC
            BY-SA 4.0)
          </Link>,
          unless otherwise specified.
        </Text>

        <Stack direction={['column', 'row']} spacing='2em'>
          <Link href='https://github.com/mfrdbigolin'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Link>

          <Link href='mailto:mfrdrbigolin@disroot.org'>
            <FontAwesomeIcon icon={['fas', 'at']} />
          </Link>

          <Link href='https://twitter.com/mfrdbigolin'>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </Link>
        </Stack>
      </VStack>
    </footer>
  )
}
