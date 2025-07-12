import { useQuery } from '@tanstack/react-query'
import { purchaseFrequencyQueryOptions } from './query-options/purchaseFrequencyQueryOptions'
import type { PurchaseFrequencyRequest } from '../api/type'
import { formatPurchaseFrequencyLabel } from '../util/formatPurchaseFrequencyLabel'

export const usePurchaseFrequencyQuery = (params?: PurchaseFrequencyRequest) => {
  return useQuery({
    ...purchaseFrequencyQueryOptions(params),
    select: (data) => {
      return data.map((item) => ({
        rangeLabel: formatPurchaseFrequencyLabel(item.range),
        count: item.count,
      }))
    },
  })
}
