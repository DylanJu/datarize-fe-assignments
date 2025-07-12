export const formatPurchaseFrequencyLabel = (range: string) => {
  const [min] = range.split(' - ').map(Number)

  if (min === 0) return '~2만원'
  if (min >= 20000 && min < 30000) return '2만원대'
  if (min >= 30000 && min < 40000) return '3만원대'
  if (min >= 40000 && min < 50000) return '4만원대'
  if (min >= 50000 && min < 60000) return '5만원대'
  if (min >= 60000 && min < 70000) return '6만원대'
  if (min >= 70000 && min < 80000) return '7만원대'
  if (min >= 80000 && min < 90000) return '8만원대'
  if (min >= 90000 && min < 100000) return '9만원대'

  return '10만원~'
}
