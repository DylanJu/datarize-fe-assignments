import type { FC } from 'react'

import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import { usePurchaseFrequencyQuery } from '../hook/usePurchaseFrequencyQuery'
import { formatPurchaseFrequencyLabel } from '../util/formatPurchaseFrequencyLabel'

import * as styles from './PurchaseFrequency.css'

const PurchaseFrequency: FC = () => {
  const { data: purchaseFrequency } = usePurchaseFrequencyQuery()

  const chartData = useMemo(() => {
    return purchaseFrequency?.map((item) => ({
      rangeLabel: formatPurchaseFrequencyLabel(item.range),
      count: item.count,
    }))
  }, [purchaseFrequency])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>구매 빈도</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="rangeLabel" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PurchaseFrequency
