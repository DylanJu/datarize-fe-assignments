import type { FC } from 'react'

import * as styles from './CustomerPurchases.css'

import { useCustomerPurchasesQuery } from '../hook/useCustomerPurchasesQuery'

interface CustomerPurchasesProps {
  customerName: string
  customerId: number
}

const CustomerPurchases: FC<CustomerPurchasesProps> = ({ customerName, customerId }) => {
  const { data: customerPurchases } = useCustomerPurchasesQuery({
    customerId,
  })

  return (
    <div className={styles.container}>
      <h3>{customerName}님 구매 내역</h3>

      <div className={styles.cards}>
        {customerPurchases?.map((purchase, index) => (
          <div key={`${purchase.date}-${index}`} className={styles.card}>
            <img src={purchase.imgSrc} alt="" width={64} height={64} />

            <div className={styles.content}>
              <span className={styles.product}>{purchase.product}</span>
              <span className={styles.date}>{purchase.date}</span>
            </div>

            <div className={styles.amount}>
              <span className={styles.price}>{purchase.price.toLocaleString()}원</span>
              <span className={styles.quantity}>{purchase.quantity} 개</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerPurchases
