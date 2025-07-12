import { style, keyframes } from '@vanilla-extract/css'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const container = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  zIndex: 1000,
})

export const spinner = style({
  width: '40px',
  height: '40px',
  border: '3px solid #f3f3f3',
  borderTop: '3px solid #3498db',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
})
