import { useQuery } from '@tanstack/react-query'
import { customersQueryOptions } from './query-options/customersQueryOptions'
import type { CustomersRequest } from '../api/type'

export const useCustomersQuery = (params?: CustomersRequest) => {
  return useQuery({
    ...customersQueryOptions(params),
    placeholderData: (previousData) => previousData,
    select: (data) => {
      // 정렬 키가 없을 경우 id로 정렬
      if (!params?.sortBy) {
        return data.sort((a, b) => a.id - b.id)
      }

      // 정렬 키가 있을 경우 서버에서 정렬된 데이터를 받아옴
      return data
    },
    throwOnError: true,
  })
}
