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
  marginBottom: '1.5rem',
})
