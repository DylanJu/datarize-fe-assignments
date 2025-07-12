import type { FC } from 'react'

import { useDashBoardQuery } from './hook/useDashBoardQuery'
import PurchaseFrequency from './components/PurchaseFrequency'
import Customers from './components/Customers'
import AppTitle from './components/AppTitle'

import * as styles from './App.css'

const App: FC = () => {
  const [{ data: customers }, { data: purchaseFrequency }] = useDashBoardQuery({
    customerPurchasesRequest: {
      customerId: 1,
    },
  })

  return (
    <main className={styles.layout}>
      <AppTitle />
      <PurchaseFrequency purchaseFrequency={purchaseFrequency} />
      <Customers customers={customers} />
    </main>
  )
}

export default App
