import { queryOptions } from '@tanstack/react-query'
import { fetchCustomerPurchases } from '../../api'
import type { CustomerPurchasesRequest } from '../../api/type'

const CUSTOMER_PURCHASES_QUERY_KEY = 'customer-purchases'

export const customerPurchasesQueryOptions = (params: CustomerPurchasesRequest) => {
  return queryOptions({
    queryKey: [CUSTOMER_PURCHASES_QUERY_KEY, params],
    queryFn: () => fetchCustomerPurchases(params),
  })
}
