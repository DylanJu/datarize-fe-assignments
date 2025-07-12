import type { FC } from 'react'

import { QueryErrorResetBoundary } from '@tanstack/react-query'

import PurchaseFrequencySection from './components/PurchaseFrequencySection'
import CustomersSection from './components/CustomersSection'
import AppTitle from './components/AppTitle'

import * as styles from './App.css'
import ErrorBoundary from './components/ErrorBoundary'

const App: FC = () => {
  return (
    <main className={styles.layout}>
      <AppTitle />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={() => reset()}>
            <PurchaseFrequencySection />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={() => reset()}>
            <CustomersSection />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </main>
  )
}

export default App
