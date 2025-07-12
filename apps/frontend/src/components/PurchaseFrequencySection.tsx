import type { FC } from 'react'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import { usePurchaseFrequencyQuery } from '../hook/usePurchaseFrequencyQuery'
import { useDateRange } from '../hook/useDateRange'

import * as styles from './PurchaseFrequencySection.css'

const PurchaseFrequencySection: FC = () => {
  const { dateRange, setDateRange } = useDateRange()
  const { data: purchaseFrequency } = usePurchaseFrequencyQuery(dateRange)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>구매 빈도</h2>

        <div className={styles.dateRange}>
          <label htmlFor="from">시작일:</label>
          <input
            id="from"
            type="date"
            className={styles.dateRangeInput}
            value={dateRange.from}
            onChange={(e) => {
              setDateRange({ ...dateRange, from: e.target.value })
            }}
          />
          <label htmlFor="to">종료일:</label>
          <input
            id="to"
            type="date"
            className={styles.dateRangeInput}
            value={dateRange.to}
            onChange={(e) => {
              setDateRange({ ...dateRange, to: e.target.value })
            }}
          />
        </div>
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
