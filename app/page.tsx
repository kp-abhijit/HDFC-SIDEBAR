import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import styles from "./page.module.scss"

const page = () => {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <h1>Displaying Linked pages</h1>
    </div>
  )
}

export default page