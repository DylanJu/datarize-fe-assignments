import type {
  PurchaseFrequencyRequest,
  PurchaseFrequencyResponse,
  CustomersRequest,
  CustomersResponse,
  CustomerPurchasesRequest,
  CustomerPurchasesResponse,
} from './type'

const BASE_URL = 'http://localhost:4000'

export const fetchPurchaseFrequency = async (params?: PurchaseFrequencyRequest): Promise<PurchaseFrequencyResponse> => {
  const url = new URL(`${BASE_URL}/api/purchase-frequency`)

  if (params) {
    url.searchParams.append('from', params.from)
    url.searchParams.append('to', params.to)
  }

  const response = await fetch(url.toString())
  return response.json()
}

export const fetchCustomers = async (params?: CustomersRequest): Promise<CustomersResponse> => {
  const url = new URL(`${BASE_URL}/api/customers`)
  if (params?.sortBy) url.searchParams.append('sortBy', params.sortBy)
  if (params?.name) url.searchParams.append('name', params.name)

  const response = await fetch(url.toString())
  return response.json()
}

export const fetchCustomerPurchases = async (params: CustomerPurchasesRequest): Promise<CustomerPurchasesResponse> => {
  const response = await fetch(`${BASE_URL}/api/customers/${params.customerId}/purchases`)
  return response.json()
}
