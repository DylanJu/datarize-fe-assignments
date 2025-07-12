import type { FC } from 'react'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import { usePurchaseFrequencyQuery } from '../hook/usePurchaseFrequencyQuery'

import * as styles from './PurchaseFrequencySection.css'

const PurchaseFrequencySection: FC = () => {
  const { data: purchaseFrequency } = usePurchaseFrequencyQuery()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>구매 빈도</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={purchaseFrequency}>
          <XAxis dataKey="rangeLabel" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PurchaseFrequencySection
