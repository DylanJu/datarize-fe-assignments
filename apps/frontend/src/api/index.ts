import type {
  PurchaseFrequencyRequest,
  PurchaseFrequencyResponse,
  CustomersRequest,
  CustomersResponse,
  CustomerPurchasesRequest,
  CustomerPurchasesResponse,
} from './type'
import { ApiError } from '../util/exception'
import { API_ERROR_MESSAGE } from '../constant/message'

const BASE_URL = 'http://localhost:4000'

const _fetch = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new ApiError(API_ERROR_MESSAGE)
  }
  return response.json()
}

export const fetchPurchaseFrequency = async (params?: PurchaseFrequencyRequest): Promise<PurchaseFrequencyResponse> => {
  const url = new URL(`${BASE_URL}/api/purchase-frequency`)

  if (params) {
    url.searchParams.append('from', params.from)
    url.searchParams.append('to', params.to)
  }

  const response = await _fetch(url.toString())

  return response
}

export const fetchCustomers = async (params?: CustomersRequest): Promise<CustomersResponse> => {
  const url = new URL(`${BASE_URL}/api/customers`)
  if (params?.sortBy) url.searchParams.append('sortBy', params.sortBy)
  if (params?.name) url.searchParams.append('name', params.name)

  const response = await _fetch(url.toString())

  return response
}

export const fetchCustomerPurchases = async (params: CustomerPurchasesRequest): Promise<CustomerPurchasesResponse> => {
  const response = await _fetch(`${BASE_URL}/api/customers/${params.customerId}/purchases`)

  return response
}
