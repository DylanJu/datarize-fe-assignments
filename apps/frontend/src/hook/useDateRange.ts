import { useState } from 'react'

interface DateRange {
  from: string
  to: string
}

export const useDateRange = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: '2024-07-01',
    to: '2024-07-30',
  })

  return {
    dateRange,
    setDateRange,
  }
}
