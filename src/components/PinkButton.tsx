import React from 'react'
import styles from './PinkButton.module.scss'

type Props = {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: Props) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}
