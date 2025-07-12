import type { FC } from 'react'

import PurchaseFrequencySection from './components/PurchaseFrequencySection'
import CustomersSection from './components/CustomersSection'
import AppTitle from './components/AppTitle'

import * as styles from './App.css'

const App: FC = () => {
  return (
    <main className={styles.layout}>
      <AppTitle />
      <PurchaseFrequencySection />
      <CustomersSection />
    </main>
  )
}

export default App
