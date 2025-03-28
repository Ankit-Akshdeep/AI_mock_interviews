import React from 'react'
import {ReactNode} from 'react'

export const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default RootLayout
