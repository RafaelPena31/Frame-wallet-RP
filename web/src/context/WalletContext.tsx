import React, { useState } from 'react'
import { Coin } from '../types/Types'

export const WalletContext = React.createContext<{
  walletValue: Coin[]
  setWalletValue: (walletValue: Coin[]) => void
}>({
  walletValue: [],
  setWalletValue: () => null
})

export default function WalletContextProvider(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children } = props

  const [walletValue, setWalletValue] = useState<Coin[]>([])

  return (
    <WalletContext.Provider
      value={{
        walletValue,
        setWalletValue
      }}>
      {children}
    </WalletContext.Provider>
  )
}
