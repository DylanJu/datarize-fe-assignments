import type { FC } from 'react'
import { useState } from 'react'

import type { SortKey } from '../api/type'
import { useCustomersQuery } from '../hook/useCustomersQuery'
import { useDebouncedInputValue } from '../hook/useDebouncedInputValue'
import CustomerPurchases from './CustomerPurchases'
import Modal from './Modal'
import Loader from './Loader'

import * as styles from './CustomersSection.css'

const CustomersSection: FC = () => {
  const [sortKey, setSortKey] = useState<SortKey>()
  const { inputValue, setInputValue, debouncedValue: searchName } = useDebouncedInputValue(350)
  const { data: customers, isFetching } = useCustomersQuery({ sortBy: sortKey, name: searchName })
  const [customerId, setCustomerId] = useState<number | null>(null)

  const handleSortByCount = () => {
    setSortKey(sortKey === 'asc' ? 'desc' : 'asc')
  }

  const handleSortById = () => {
    setSortKey(undefined)
  }

  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleRowClick = (customerId: number) => {
    setCustomerId(customerId)
  }

  const customerName = customers?.find((customer) => customer.id === customerId)?.name

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>고객 목록</h2>

        <div>
          <input
            type="text"
            placeholder="이름 검색"
            value={inputValue}
            onChange={handleSearchName}
            className={styles.searchInput}
          />
        </div>
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
            <tr
              key={customer.id}
              role="button"
              tabIndex={0}
              onClick={() => handleRowClick(customer.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleRowClick(customer.id)
                }
              }}
            >
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.count} 회</td>
              <td>{customer.totalAmount.toLocaleString()} 원</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={!!customerId} onClose={() => setCustomerId(null)}>
        {customerId === null ? null : <CustomerPurchases customerName={customerName ?? ''} customerId={customerId} />}
      </Modal>

      {isFetching ? <Loader /> : null}
    </div>
  )
}

export default CustomersSection
