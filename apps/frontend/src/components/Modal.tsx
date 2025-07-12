import type { FC } from 'react'
import { useEffect } from 'react'

import * as styles from './Modal.css'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  // ESC 키로 모달 닫기
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleClose = () => {
    onClose()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} data-testid="modal-overlay">
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Modal
