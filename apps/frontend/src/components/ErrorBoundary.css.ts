import { style } from '@vanilla-extract/css'

import { vars } from '../style/theme.css'

export const container = style({
  position: 'relative',
  margin: '1rem 1.5rem',
  padding: '1rem 1.5rem',
  border: `1px solid ${vars.colors.borderColor}`,
  borderRadius: '0.5rem',
  backgroundColor: vars.colors.white,
  textAlign: 'center',
})

export const message = style({
  marginBottom: '1rem',
  fontSize: '1rem',
  color: vars.colors.black,
})

export const retryButton = style({
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  backgroundColor: vars.colors.background,
  color: vars.colors.black,
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
})
