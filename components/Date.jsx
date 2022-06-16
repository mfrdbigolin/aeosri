/* Copyright (C) 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { format, parseISO } from 'date-fns'

export default function Date ({ dateString }) {
  const date = parseISO(dateString)

  return (
    <time title={dateString} dateTime={dateString}>
      {format(date, 'd LLLL yyyy')}
    </time>
  )
}
