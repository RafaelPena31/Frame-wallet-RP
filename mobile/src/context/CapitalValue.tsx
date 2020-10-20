import React, { useState } from 'react'

export const CapitalValue = React.createContext<{
  capitalValueContext: number
  setCapitalValueContext: (CapitalValueContext: number) => void
}>({
  capitalValueContext: 0,
  setCapitalValueContext: () => null
})

export default function CapitalValueContextProvider(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children } = props

  const [capitalValueContext, setCapitalValueContext] = useState<number>(0)

  return (
    <CapitalValue.Provider
      value={{
        capitalValueContext,
        setCapitalValueContext
      }}>
      {children}
    </CapitalValue.Provider>
  )
}
