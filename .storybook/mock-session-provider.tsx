import React from 'react'
import { SessionProvider } from 'next-auth/react'
export const MockSessionProvider = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
