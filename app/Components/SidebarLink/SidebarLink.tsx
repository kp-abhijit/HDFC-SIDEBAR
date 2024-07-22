import React from 'react'
import styles from "./SidebarLink.module.scss"
import Link from 'next/link';
import image from "../Arrow/arrow-right.svg"
import Image from 'next/image';

// interface LinkProps {
//     link:string;
//     icon:boolean;
// }

const SidebarLink = (props:{link:string,icon:boolean,redirect:string}) => {
  return (
        <Link className={styles.Link} href={props.redirect}>
    <div className={styles.link}>
        <p className={styles.p}>{props.link}</p>
        <div>{props.icon?<Image src={image} alt="an arrow image"/>: <div className={styles.whitespace}></div>}</div>
    </div>
        </Link>
  )
}

export default SidebarLink