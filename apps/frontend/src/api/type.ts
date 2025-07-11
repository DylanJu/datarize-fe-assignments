// 구매 빈도 API 요청 타입
export interface PurchaseFrequencyRequest {
  from: string // ISO 8601 형식의 날짜 문자열
  to: string // ISO 8601 형식의 날짜 문자열
}

type PriceRange = `${number} - ${number}`
export interface PurchaseFrequency {
  range: PriceRange
  count: number
}

// 구매 빈도 API 응답 타입
export type PurchaseFrequencyResponse = PurchaseFrequency[]

// 고객 목록 API 요청 타입
export interface CustomersRequest {
  sortBy?: 'asc' | 'desc'
  name?: string
}

interface Customer {
  id: number
  name: string
  count: number
  totalAmount: number
}

// 고객 목록 API 응답 타입
export type CustomersResponse = Customer[]

// 고객 구매 내역 API 요청 타입
export interface CustomerPurchasesRequest {
  customerId: number
}

interface CustomerPurchase {
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}

// 고객 구매 내역 API 응답 타입
export type CustomerPurchasesResponse = CustomerPurchase[]
