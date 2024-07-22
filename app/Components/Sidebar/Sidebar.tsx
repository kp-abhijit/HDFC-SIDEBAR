import React from 'react'
import styles from "./Sidebar.module.scss"
import Link from 'next/link'
import SidebarLink from '../SidebarLink/SidebarLink'


const Sidebar= () => {
    const comlinks =[
        {
            link:"Privacy Policy",
            icon:false,
        },
        {
            link:"Disclaimer",
            icon:false,
        },
        {
            link:"Mandatory Information",
            icon:false
        },
        {
            link:"Global Investing Disclaimer",
            icon:false
        },
        {
            link:"MF & PMS Disclosure",
            icon:true
        },
        {
            link:"BSE Disclaimer",
            icon:true
        },
        {
            link:"Regulatory Information",
            icon:true
        },
        {
            link:"Eligible Scrips",
            icon:true
        },
        {
            link:"SEBI Scores",
            icon:true
        },
        {
            link:"Investment Advisory",
            icon:true
        },
        {
            link:"Advisory for Investors",
            icon:true
        },
        {
            link:"Margin Collection",
            icon:true
        },
        {
            link:"Privacy Notice EU User",
            icon:true
        },
        {
            link:"NSE Holidays",
            icon:true
        },
        {
            link:"BSE Holidays",
            icon:true
        },
        {
            link:"Mission and Vision",
            icon:true
        },
        {
            link:"Investors Complaints",
            icon:true
        },
        {
            link:"CDSL Evoting",
            icon:true
        },
    ]
  return (
    <>
    <div className={styles.main}>
        <h3 className={styles.sidebarHeading}>Important Links</h3>
        <div className={styles.links}>
            {
                comlinks.map((link,i)=>{
                    return (
                        <SidebarLink key={i} link={link.link} icon={link.icon}/>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Sidebar