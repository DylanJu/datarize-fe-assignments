import { useQuery } from '@tanstack/react-query'
import { purchaseFrequencyQueryOptions } from './query-options/purchaseFrequencyQueryOptions'
import type { PurchaseFrequencyRequest } from '../api/type'

export const usePurchaseFrequencyQuery = (params?: PurchaseFrequencyRequest) => {
  return useQuery(purchaseFrequencyQueryOptions(params))
}
