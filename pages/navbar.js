import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel'




const navbar = () => {

    const breakPoints = [
        { width: 800, itemsToShow: 3 }
    ]


    return (


        <>
            <div className={styles.nav}>
                <div className={styles.add} >
                    <h1>add</h1>
                    <div className={styles.signinUpbtn}>
                        <button className={styles.btnLogin}>login</button>
                        <button className={styles.btnSignup}>signup</button>

                    </div>
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
                    <div className={styles.hostelEle}>
                        <Link href="">Hostel</Link>

                    </div>

                    <div className={styles.hostelEle}>
                        <Link href="/">PG</Link>
                    </div>

                    <div className={styles.hostelEle}>
                        <Link href="/">Mess</Link>
                    </div>



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
            <div className={styles.carousel}>
                <Carousel breakPoints={breakPoints} >
                    <div className="">
                        <div className={styles.carEle}></div>
                        <span>Hostel</span>

                    </div>

                    <div className="">
                        <div className={styles.carEle}></div>
                        <span>Hostel</span>

                    </div>
                    <div className="">
                        <div className={styles.carEle}></div>
                        <span>Hostel</span>

                    </div>
                    <div className="">
                        <div className={styles.carEle}></div>
                        <span>Hostel</span>

                    </div>



                </Carousel>
            </div>







        </>

    )
}

export default navbar
