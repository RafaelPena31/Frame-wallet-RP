import React, { useState } from 'react'

export const InvestPorc = React.createContext<{
  investPorcContext: number
  setInvestPorcContext: (InvestPorcContext: number) => void
}>({
  investPorcContext: 0,
  setInvestPorcContext: () => null
})

export default function InvestPorcContextProvider(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children } = props

  const [investPorcContext, setInvestPorcContext] = useState<number>(0)

  return (
    <InvestPorc.Provider
      value={{
        investPorcContext,
        setInvestPorcContext
      }}>
      {children}
    </InvestPorc.Provider>
  )
}
