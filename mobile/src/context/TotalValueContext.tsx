import React, { useState } from 'react'

export const TotalValue = React.createContext<{
  totalValueContext: number
  setTotalValueContext: (totalValueContext: number) => void
}>({
  totalValueContext: 0,
  setTotalValueContext: () => null
})

export default function TotalValueContextProvider(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children } = props

  const [totalValueContext, setTotalValueContext] = useState<number>(0)

  return (
    <TotalValue.Provider
      value={{
        totalValueContext,
        setTotalValueContext
      }}>
      {children}
    </TotalValue.Provider>
  )
}
