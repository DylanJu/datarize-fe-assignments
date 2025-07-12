import { globalStyle } from '@vanilla-extract/css'

import { vars } from './theme.css'

globalStyle('html', {
  backgroundColor: vars.colors.background,
  fontSize: '16px',
})

globalStyle('body', {
  margin: 0,
  padding: 0,
})

globalStyle('button', {
  margin: 0,
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  fontFamily: 'inherit',
  appearance: 'none',
  color: vars.colors.black,
})

globalStyle('input', {
  margin: 0,
  padding: 0,
  outline: 'none',
  fontFamily: 'inherit',
  userSelect: 'auto',
  backgroundColor: 'transparent',
  appearance: 'none',
})

globalStyle('input::placeholder', {
  color: vars.colors.placeholder,
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
})

globalStyle('img', {
  pointerEvents: 'none',
})
