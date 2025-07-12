import { describe, test, expect } from 'vitest'
import { formatPurchaseFrequencyLabel } from './formatPurchaseFrequencyLabel'

describe('number - number 형식의 데이터를 가독성 좋은 label로 변환', () => {
  test('유저는 0 - 20000 은 2만원 이하로 볼 수 있어요.', () => {
    expect(formatPurchaseFrequencyLabel('0 - 20000')).toBe('~2만원')
  })

  test('유저는 2만원 이상 제품은 n만원대로 나눠 볼 수 있어요.', () => {
    expect(formatPurchaseFrequencyLabel('20001 - 30000')).toBe('2만원대')
    expect(formatPurchaseFrequencyLabel('40001 - 50000')).toBe('4만원대')
    expect(formatPurchaseFrequencyLabel('50001 - 60000')).toBe('5만원대')
    expect(formatPurchaseFrequencyLabel('60001 - 70000')).toBe('6만원대')
    expect(formatPurchaseFrequencyLabel('70001 - 80000')).toBe('7만원대')
    expect(formatPurchaseFrequencyLabel('80001 - 90000')).toBe('8만원대')
    expect(formatPurchaseFrequencyLabel('90001 - 100000')).toBe('9만원대')
  })

  test('유저는 10만원 이상 제품은 10만원~ 으로 볼 수 있어요.', () => {
    expect(formatPurchaseFrequencyLabel('100001 - 110000')).toBe('10만원~')
  })
})
