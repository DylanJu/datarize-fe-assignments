import { useQuery } from '@tanstack/react-query'
import { customerPurchasesQueryOptions } from './query-options/customerPurchasesQueryOptions'
import type { CustomerPurchasesRequest } from '../api/type'

export const useCustomerPurchasesQuery = (params: CustomerPurchasesRequest) => {
  return useQuery({
    ...customerPurchasesQueryOptions(params),
    throwOnError: true,
  })
}
