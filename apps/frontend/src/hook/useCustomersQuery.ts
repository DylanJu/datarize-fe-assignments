import { useQuery } from '@tanstack/react-query'
import { customersQueryOptions } from './query-options/customersQueryOptions'
import type { CustomersRequest } from '../api/type'

export const useCustomersQuery = (params?: CustomersRequest) => {
  return useQuery(customersQueryOptions(params))
}
