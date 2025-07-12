import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '../style/theme.css'

export const container = style({
  position: 'relative',
  margin: '1rem 1.5rem',
  padding: '1rem 1.5rem',
  border: `1px solid ${vars.colors.borderColor}`,
  borderRadius: '0.5rem',
  backgroundColor: vars.colors.white,
})

export const header = style({
  marginBottom: '1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const searchInput = style({
  width: '100%',
  padding: '0.5rem',
  border: `1px solid ${vars.colors.borderColor}`,
  borderRadius: '0.25rem',
  boxSizing: 'border-box',
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
  textAlign: 'center',
})

globalStyle(`${table} td:nth-child(1), ${table} td:nth-child(3), ${table} td:nth-child(4)`, {
  textAlign: 'right',
})

globalStyle(`${table} tbody tr:hover`, {
  cursor: 'pointer',
  backgroundColor: '#f5f5f5',
})

export const sortableHeader = style({
  cursor: 'pointer',
  userSelect: 'none',
  ':hover': {
    backgroundColor: '#f5f5f5',
  },
  ':focus': {
    outline: '2px solid #4f46e5',
    outlineOffset: '-2px',
  },
})
