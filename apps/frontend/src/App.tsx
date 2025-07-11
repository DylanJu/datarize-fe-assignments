import type { FC } from 'react'

import { useDashBoardQuery } from './hook/useDashBoardQuery'
import PurchaseFrequency from './components/PurchaseFrequency'

const App: FC = () => {
  const [{ data: customers }, { data: purchaseFrequency }] = useDashBoardQuery({
    customerPurchasesRequest: {
      customerId: 1,
    },
  })

  console.log(customers)
  console.log(purchaseFrequency)

  return (
    <div>
      <PurchaseFrequency purchaseFrequency={purchaseFrequency} />
    </div>
  )
}

export default App
