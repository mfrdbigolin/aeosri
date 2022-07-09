/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import styles from '@components/footer.module.sass'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2022 Matheus Fernandes Bigolin
      </p>

      <div className={styles.license}>
        <a
          href='https://creativecommons.org/licenses/by-nc-sa/4.0'
          title='Content licensed under Creative Commons BY-NC-SA 4.0, unless otherwise specified on the page'
        />
      </div>

      <section className={styles.social}>
        <div title='mfrdbigolin' className={styles.icon}>
          <a href='https://github.com/mfrdbigolin'>
            <FaGithub />
          </a>
        </div>

        <div title='mfrdrbigolin@disroot.org' className={styles.icon}>
          <a href='mailto:mfrdrbigolin@disroot.org'>
            <BsFillEnvelopeFill />
          </a>
        </div>

        <div title='@mfrdbigolin' className={styles.icon}>
          <a href='https://twitter.com/mfrdbigolin'>
            <FaTwitter />
          </a>
        </div>
      </section>
    </footer>
  )
}
