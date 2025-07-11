import type { FC } from 'react'

import { useDashBoardQuery } from './hook/useDashBoardQuery'

const App: FC = () => {
  const [{ data: customers }, { data: purchaseFrequency }] = useDashBoardQuery({
    customerPurchasesRequest: {
      customerId: 1,
    },
  })

  console.log(customers)
  console.log(purchaseFrequency)

  return <div>hello world</div>
}

export default App
