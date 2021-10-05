
import styles from '../styles/Sidebar.module.css'
import Link from 'next/link';
import { Button } from 'reactstrap';
import { useState } from 'react';

const Sidebar = () => {

    const [sideBar, setSideBar] = useState("sideInActive");


    return (
        <>

            <div className={styles.wrraper}>
                <div className={styles.add} >


                    <div className={styles.signinUpbtn}>
                        <button className={`${styles.btnLogin} ${styles.sideBtn} btn btn-outline-danger btn-sm`}>login</button>
                        <button className={`${styles.btnSignup} ${styles.sideBtn} btn btn-danger btn-sm`}>signup</button>

                    </div>
                </div>


                <div className={styles.navigator}>


                    <ul>


                        <li className={styles.listItems}>

                            <Link href="/">
                                <a className={styles.linkStyle}>
                                    <span className={styles.title} >Hostels</span>
                                </a>
                            </Link>

                        </li>

                        <li className={styles.listItems}>

                            <Link href="/">

                                <a className={styles.linkStyle}>
                                    <span className={styles.title} >PG</span>
                                </a>

                            </Link>

                        </li>

                        <li className={styles.listItems}>
                            <Link href="/">

                                <a className={styles.linkStyle}>
                                    <span className={styles.title} >Mess</span>
                                </a>

                            </Link>

                        </li>


                    </ul>

                </div>

            </div>
        </>
    )
}

export default Sidebar
