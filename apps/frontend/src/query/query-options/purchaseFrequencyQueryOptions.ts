import { queryOptions } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from '../../api'
import type { PurchaseFrequencyRequest } from '../../api/type'

const PURCHASE_FREQUENCY_QUERY_KEY = 'purchase-frequency'

export const purchaseFrequencyQueryOptions = (params?: PurchaseFrequencyRequest) => {
  return queryOptions({
    queryKey: [PURCHASE_FREQUENCY_QUERY_KEY, params],
    queryFn: () => fetchPurchaseFrequency(params),
  })
}
