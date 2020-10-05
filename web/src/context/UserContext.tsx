import React, { useState } from 'react'

interface UserControl {
  walletId: string
  uid: string | undefined
}

export const UserContext = React.createContext<{
  currencyUserApp: UserControl[]
  setCurrencyUserApp: (currencyUserApp: UserControl[]) => void
}>({
  currencyUserApp: [],
  setCurrencyUserApp: () => null
})

export default function UserContextProvider(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children } = props

  const [currencyUserApp, setCurrencyUserApp] = useState<UserControl[]>([])

  return (
    <UserContext.Provider
      value={{
        currencyUserApp,
        setCurrencyUserApp
      }}>
      {children}
    </UserContext.Provider>
  )
}
