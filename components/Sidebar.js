
import styles from '../styles/Sidebar.module.css'
import Link from 'next/link';
import { Button } from 'reactstrap';
import { useState } from 'react';

const Sidebar = () => {

    const [sideBar, setSideBar] = useState("sideInActive");


    function showSidebar() {
        if (sideBar === "sideInActive") {
            setSideBar("sideActive")
        }
        else {
            setSideBar("sideInActive")
        }


    }

    return (
        <>
        
            <div className={`${styles.nav}   `}>

                <div  className={styles.add} >
                    
                    <h1>add</h1>
                    <div className={styles.signinUpbtn}>
                        <Button className={styles.btnLogin}>login</Button>{' '}
                        <Button className={styles.btnSignup}>signup</Button>{' '}

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
