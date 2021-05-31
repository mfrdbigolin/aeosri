/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

// TODO: Because this component is only used in the main page, I don't
// think it should be on this folder (/components).

import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Heading, Link, Text, Center } from '@chakra-ui/react'

library.add(fab)

export default function Header () {
  return (
    <header>
      <Center>
        <Image
          src='/static/placeholder.svg'
          alt='Aeosri Logo'
          width='450'
          height='300'
        />
      </Center>

      <Center mb='0.75rem' mt='1.5rem'>
        <Heading as='h1' size='xl' letterSpacing={10}>
          [AEOSRI]
          <Link href='https://github.com/mfrdbigolin/aeosri'>
            <FontAwesomeIcon icon={['fab', 'git-alt']} />
          </Link>
        </Heading>
      </Center>

      <Center>
        <Text fontStyle='italic' fontSize='xl' mb='1em'>
          Welcome to Aeosri!
        </Text>
      </Center>
    </header>
  )
}
