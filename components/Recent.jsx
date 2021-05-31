/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Link from 'next/link'
import {
  Link as ChkLink, UnorderedList, ListItem, Badge, HStack, Box
} from '@chakra-ui/react'

export default function Recent ({ posts, numPosts = 5 }) {
  return (
    <>
      <UnorderedList colorScheme='red'>
        {
          posts.map(function (post, idx) {
            const date = new Date(post.date)
            const diff = Date.now() - date.getTime()
            const daysElapsed = Math.floor(diff / (1000 * 60 * 60 * 24))

            return (
              <ListItem key={idx} mb='1rem'>
                <HStack spacing='20px'>
                  <Box>
                    <Link href={'/' + post.slug}>
                      <ChkLink>{post.title}</ChkLink>
                    </Link>
                  </Box>

                  <Box>
                    <Badge variant='subtle'>
                      {daysElapsed} day(s) ago
                    </Badge>
                  </Box>
                </HStack>
              </ListItem>
            )
          })
        }
      </UnorderedList>
    </>
  )
}
