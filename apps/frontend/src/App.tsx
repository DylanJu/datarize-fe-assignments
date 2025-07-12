import type { FC } from 'react'

import PurchaseFrequency from './components/PurchaseFrequency'
import Customers from './components/Customers'
import AppTitle from './components/AppTitle'

import * as styles from './App.css'

const App: FC = () => {
  return (
    <main className={styles.layout}>
      <AppTitle />
      <PurchaseFrequency />
      <Customers />
    </main>
  )
}

export default App
