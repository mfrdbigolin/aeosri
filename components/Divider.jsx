/* Copyright (C) 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

export default function Divider ({ color }) {
  return (
    <hr style={{
      borderTop: `5px double ${color}`,
      marginBlock: '1rem'
    }}
    />
  )
}

export function InnerDivider ({ color }) {
  return (
    <hr style={{
      borderTop: `3px dashed ${color}`,
      marginBlock: '0.75rem'
    }}
    />
  )
}
