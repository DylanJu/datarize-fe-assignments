import { style } from '@vanilla-extract/css'
import { vars } from '../style/theme.css'

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '2rem',
  margin: '1rem 1.5rem',
  padding: '2rem 1.5rem',
  minWidth: '500px',
  border: `1px solid ${vars.colors.borderColor}`,
  borderRadius: '0.5rem',
  backgroundColor: vars.colors.background,
})

export const cards = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
})

export const card = style({
  display: 'grid',
  gridTemplateColumns: '64px 1fr auto',
  columnGap: '1rem',
  backgroundColor: vars.colors.white,
  padding: '1rem 1.5rem',
  borderRadius: '0.5rem',
  border: `1px solid ${vars.colors.borderColor}`,
})

export const content = style({
  display: 'grid',
  gridTemplateRows: '1fr auto',
  alignItems: 'center',
  columnGap: '0.5rem',
})

export const date = style({
  color: vars.colors.placeholder,
})

export const product = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
})

export const amount = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  rowGap: '0.5rem',
})

export const price = style({
  color: vars.colors.black,
  fontWeight: 'bold',
  fontSize: '1.25rem',
})

export const quantity = style({
  color: vars.colors.placeholder,
})
