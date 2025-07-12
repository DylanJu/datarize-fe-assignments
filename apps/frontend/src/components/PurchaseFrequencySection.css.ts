import { style } from '@vanilla-extract/css'

import { vars } from '../style/theme.css'

export const container = style({
  margin: '1rem 1.5rem',
  padding: '1rem 1.5rem',
  border: `1px solid ${vars.colors.borderColor}`,
  borderRadius: '0.5rem',
  backgroundColor: vars.colors.white,
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
})

export const dateRange = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
})

export const dateRangeInput = style({
  padding: '0.5rem',
  border: `1px solid ${vars.colors.borderColor}`,
  borderRadius: '0.25rem',
})
