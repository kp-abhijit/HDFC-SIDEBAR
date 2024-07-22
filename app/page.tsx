import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import styles from "./page.module.scss"

const page = () => {
  return (
    <div className={styles.container}>
      <a href="/privacy-policy">Compliance</a>
    </div>
  )
}

export default page