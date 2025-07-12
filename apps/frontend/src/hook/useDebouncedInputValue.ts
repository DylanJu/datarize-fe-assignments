import { useState, useEffect } from 'react'

export const useDebouncedInputValue = (delay: number) => {
  const [inputValue, setInputValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, delay)

    return () => clearTimeout(timer)
  }, [inputValue, delay])

  return { inputValue, setInputValue, debouncedValue }
}
