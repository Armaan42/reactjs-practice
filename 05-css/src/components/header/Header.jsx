import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>JohnDoe</h1>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
