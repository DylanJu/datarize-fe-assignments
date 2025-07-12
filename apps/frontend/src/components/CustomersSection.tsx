import type { FC } from 'react'
import { useState } from 'react'

import type { SortKey } from '../api/type'
import { useCustomersQuery } from '../hook/useCustomersQuery'

import * as styles from './CustomersSection.css'

const CustomersSection: FC = () => {
  const [sortKey, setSortKey] = useState<SortKey>()
  const { data: customers } = useCustomersQuery({ sortBy: sortKey })

  const handleSortByCount = () => {
    setSortKey(sortKey === 'asc' ? 'desc' : 'asc')
  }

  const handleSortById = () => {
    setSortKey(undefined)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>고객 목록</h2>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th
              role="button"
              className={styles.sortableHeader}
              onClick={handleSortById}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSortById()
                }
              }}
            >
              ID ↓
            </th>
            <th>이름</th>
            <th>총 구매 횟수</th>
            <th
              role="button"
              className={styles.sortableHeader}
              onClick={handleSortByCount}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSortByCount()
                }
              }}
            >
              총 구매 금액 ↑↓
            </th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.count} 회</td>
              <td>{customer.totalAmount.toLocaleString()} 원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomersSection
