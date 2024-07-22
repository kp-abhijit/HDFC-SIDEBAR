import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import styles from "./page.module.scss"
import Link from 'next/link'

const page = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.info}>
                <h1>Global Investing Disclaimer</h1>
                
            </div>
        </div>
    )
}

export default page