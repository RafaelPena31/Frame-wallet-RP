import React, { useState } from 'react'

export const UserContext = React.createContext<{
  currencyUserApp: string | undefined
  setCurrencyUserApp: (currencyUserApp: string | undefined) => void
}>({
  currencyUserApp: undefined,
  setCurrencyUserApp: () => null
})

export default function UserContextProvider(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children } = props

  const [currencyUserApp, setCurrencyUserApp] = useState<string | undefined>(undefined)

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
