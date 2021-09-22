import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';


const navbar = () => {



    return (


        <>
            <div className={styles.nav}>
                <div className={styles.add} >
                    <h1>add</h1>
                </div>


                <div className={styles.navigator}>


                    <ul>


                        <li className={styles.listItems}>

                            <Link href="">

                                <a className={styles.linkStyle}>
                                    <span className={styles.title} >Hostels</span>
                                </a>
                            </Link>

                        </li>

                        <li className={styles.listItems}>

                            <Link href="">

                                <a className={styles.linkStyle}>
                                    <span className={styles.title} >PG</span>
                                </a>

                            </Link>

                        </li>

                        <li className={styles.listItems}>
                            <Link href="">

                                <a className={styles.linkStyle}>
                                    <span className={styles.title} >Mess</span>
                                </a>

                            </Link>

                        </li>


                    </ul>

                </div>

            </div>

            <div className={styles.navabar}>

                <div className={styles.wrraper}>
                    <div className={styles.toggleBar}>
                        <span><i className="fas fa-bars"></i></span>
                    </div>

                    <div className={styles.navBrand}>Raman</div>

                </div>



                <div className={styles.element}>
                    <div className={styles.hostelEle}>Hostel</div>
                    <div className={styles.hostelEle}>PG</div>
                    <div className={styles.hostelEle}>Mess</div>



                </div>

                <div className={styles.wrraper}>
                    <div className={styles.searchBtn}>
                        <span><i className="fas fa-search"></i></span>
                    </div>

                    <div className={styles.userBtn}>
                        <span><i className="fas fa-user"></i></span>
                    </div>
                </div>


            </div>




        </>

    )
}

export default navbar
