import type { FC } from 'react'

import type { CustomersResponse } from '../api/type'

import * as styles from './Customers.css'

export interface CustomersProps {
  customers: CustomersResponse
}

const Customers: FC<CustomersProps> = ({ customers }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>고객 목록</h2>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>구매 횟수</th>
            <th>총 구매 금액</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.count}</td>
              <td>{customer.totalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Customers
