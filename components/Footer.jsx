/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

export default function Footer () {
  return (
    <footer>
      <p>Copyright &copy; 2021 Matheus Fernandes Bigolin
        {' <'}mfrdrbigolin@disroot.org{'>'}.
      </p>

      <p>
        The content of this site is licensed under the{' '}
        <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
          Creative Commons Attribution-ShareAlike 4.0 International (CC
          BY-SA 4.0)
        </a>,
        unless otherwise specified.
      </p>

      <a href='https://github.com/mfrdbigolin'>
        <FontAwesomeIcon icon={['fab', 'github']} />
        mfrdbigolin
      </a>

    </footer>
  )
}
