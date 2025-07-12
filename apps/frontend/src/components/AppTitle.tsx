import type { FC } from 'react'

import * as styles from './AppTitle.css'

const AppTitle: FC = () => {
  return (
    <header className={styles.header}>
      <h1>쇼핑몰 분석 대시보드</h1>
      <p>구매 데이터 시각화 및 고객 분석</p>
    </header>
  )
}

export default AppTitle
