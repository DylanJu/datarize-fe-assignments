import { Component, ErrorInfo } from 'react'

import * as styles from './ErrorBoundary.css'
import { ApiError } from '../util/exception'

interface ErrorBoundaryProps {
  children: React.ReactNode
  onReset: () => void
}

interface ErrorBoundaryState {
  error: Error | null
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  handleRetry = () => {
    this.props.onReset()
    this.setState({ error: null })
  }

  render() {
    const { error } = this.state

    if (error) {
      return (
        <div className={styles.container}>
          <div className={styles.message}>{error.message}</div>
          {error instanceof ApiError && (
            <button className={styles.retryButton} onClick={this.handleRetry}>
              다시 시도
            </button>
          )}
        </div>
      )
    }

    return <div>{this.props.children}</div>
  }
}
