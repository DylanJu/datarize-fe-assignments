import * as styles from './Loader.css'

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} role="status" aria-label="로딩 중" />
    </div>
  )
}
