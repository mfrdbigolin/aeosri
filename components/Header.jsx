/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

export default function Header () {
  return (
    <header>
      <div>
        <Image
          src='/assets/placeholder.svg'
          alt='Logo'
          width={450}
          height={300}
        />
      </div>

      <h1>[ A E O S R I ]
        <a href='https://github.com/mfrdbigolin/aeosri'>
          <FontAwesomeIcon icon={['fab', 'git-alt']} />
        </a>
      </h1>

      <p>Welcome to Aeosri!</p>
    </header>
  )
}
