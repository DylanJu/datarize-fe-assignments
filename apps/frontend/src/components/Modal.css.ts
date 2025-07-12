import { style, globalKeyframes } from '@vanilla-extract/css'

import { vars } from '../style/theme.css'

const modalAppear = globalKeyframes('modalAppear', {
  '0%': {
    opacity: 0,
    transform: 'scale(0.9) translateY(-10px)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1) translateY(0)',
  },
})

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '1rem',
})

export const content = style({
  backgroundColor: vars.colors.white,
  borderRadius: '0.5rem',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  maxWidth: '80vw',
  maxHeight: '80vh',
  overflow: 'auto',
  position: 'relative',
  animation: `${modalAppear} 0.2s ease-out`,
})
