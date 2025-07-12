import { queryOptions } from '@tanstack/react-query'
import { fetchCustomers } from '../../api'
import type { CustomersRequest } from '../../api/type'

const CUSTOMERS_QUERY_KEY = 'customers'

export const customersQueryOptions = (params?: CustomersRequest) => {
  return queryOptions({
    queryKey: [CUSTOMERS_QUERY_KEY, params],
    queryFn: () => fetchCustomers(params),
  })
}
