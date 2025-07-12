import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

// 1. 테마 변수 정의 (TypeScript 타입 안전성 제공)
export const themeContract = createThemeContract({
  colors: {
    background: '',
    borderColor: '',
    white: '',
    black: '',
    placeholder: '',
  },
})

// 2. 기본 테마 (라이트 모드) - 전역 CSS 변수로 생성
export const lightTheme = createGlobalTheme(':root', themeContract, {
  colors: {
    background: '#f9f9fa',
    borderColor: '#e7e7ef',
    white: '#fff',
    black: '#151519',
    placeholder: '#808080',
  },
})

// 3. 테마 변수를 사용한 스타일 헬퍼
export const vars = themeContract
