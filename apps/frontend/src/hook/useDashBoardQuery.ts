import { useSuspenseQueries } from '@tanstack/react-query'

import { customersQueryOptions } from './query-options/customersQueryOptions'
import { purchaseFrequencyQueryOptions } from './query-options/purchaseFrequencyQueryOptions'
import { customerPurchasesQueryOptions } from './query-options/customerPurchasesQueryOptions'
import type { CustomersRequest, CustomerPurchasesRequest, PurchaseFrequencyRequest } from '../api/type'

type UseDashBoardProps = {
  customersRequest?: CustomersRequest
  purchaseFrequencyRequest?: PurchaseFrequencyRequest
  customerPurchasesRequest: CustomerPurchasesRequest
}

export const useDashBoardQuery = ({
  customersRequest,
  purchaseFrequencyRequest,
  customerPurchasesRequest,
}: UseDashBoardProps) => {
  return useSuspenseQueries({
    queries: [
      customersQueryOptions(customersRequest),
      purchaseFrequencyQueryOptions(purchaseFrequencyRequest),
      customerPurchasesQueryOptions(customerPurchasesRequest),
    ],
  })
}
