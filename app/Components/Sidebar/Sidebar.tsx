import React from 'react'
import styles from "./Sidebar.module.scss"
import SidebarLink from '../SidebarLink/SidebarLink'


const Sidebar= () => {
    const comlinks =[
        {
            link:"Privacy Policy",
            icon:false,
            redirect:"privacy-policy"
        },
        {
            link:"Disclaimer",
            icon:false,
            redirect:"disclaimer"
        },
        {
            link:"Mandatory Information",
            icon:false,
            redirect:"mandatory-information"
        },
        {
            link:"Global Investing Disclaimer",
            icon:false,
            redirect:"global-investing-disclaimer"
        },
        {
            link:"MF & PMS Disclosure",
            icon:true,
            redirect:"mf-pms-disclosure"
        },
        {
            link:"BSE Disclaimer",
            icon:true,
            redirect:"bsedisclaimer"
        },
        {
            link:"Regulatory Information",
            icon:true,
            redirect:"regulatory-information"
        },
        {
            link:"Eligible Scrips",
            icon:true,
            redirect:"eligible-scrips"
        },
        {
            link:"SEBI Scores",
            icon:true,
            redirect:"scores"
        },
        {
            link:"Investment Advisory",
            icon:true,
            redirect:"investment-advisory"
        },
        {
            link:"Advisory for Investors",
            icon:true,
            redirect:"advisory-for-investors"
        },
        {
            link:"Margin Collection",
            icon:true,
            redirect:"margin-collection"
        },
        {
            link:"Privacy Notice EU User",
            icon:true,
            redirect:"privacy-notice-eu-user"
        },
        {
            link:"NSE Holidays",
            icon:true,
            redirect:"nse-holidays"
        },
        {
            link:"BSE Holidays",
            icon:true,
            redirect:"bse-holidays"
        },
        {
            link:"Mission and Vision",
            icon:true,
            redirect:"mission-and-vision"
        },
        {
            link:"Investors Complaints",
            icon:true,
            redirect:"investor-complaints"
        },
        {
            link:"CDSL Evoting",
            icon:true,
            redirect:"cdsl-evoting"
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
                        <SidebarLink key={i} link={link.link} icon={link.icon} redirect={link.redirect}/>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Sidebar