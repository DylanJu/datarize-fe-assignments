import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '../style/theme.css'

export const container = style({
  margin: '1rem 1.5rem',
  padding: '1rem 1.5rem',
  border: `1px solid ${vars.colors.borderColor}`,
  borderRadius: '0.5rem',
  backgroundColor: vars.colors.white,
})

export const header = style({
  marginBottom: '1.5rem',
})

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: vars.colors.white,
})

globalStyle(`${table} th, ${table} td`, {
  padding: '0.75rem 1rem',
  border: `1px solid ${vars.colors.borderColor}`,
})

globalStyle(`${table} th`, {
  color: vars.colors.placeholder,
})

globalStyle(`${table} td:nth-child(2)`, {
  textAlign: 'left',
})

globalStyle(`${table} td:nth-child(3), ${table} td:nth-child(4)`, {
  textAlign: 'right',
})
