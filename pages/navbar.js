import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel'




const Navbar = () => {

    const breakPoints = [
        { width: 800, itemsToShow: 3 }
    ]

    const carObject = ["Hostel", "Mess", "PG","Blog","Harsh","Raman","Pragati"];



    return (


        <>

            {/* sidebar start mobile view */}


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


            {/* sidebar ends mobile view */}


            {/* navbar  */}

            <div className={styles.navabar}>

                <div className={styles.wrraper}>
                    <div className={styles.toggleBar}>
                        <span><i className="fas fa-bars"></i></span>
                    </div>

                    <div className={styles.navBrand}>Hostel</div>

                </div>



                <div className={styles.element}>


                    <div className={styles.hostelEle}>
                        <Link href="/">Hostel</Link>

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
            {/* navbar ends */}

            {/* carosel mobile view */}

            <div className={styles.carousel}>

                <Carousel breakPoints={breakPoints} >

              

                    {
                        carObject.map((ele) => [
                            <div className="">
                            <div className={styles.carEle}></div>
                            <span>{ele}</span>
    
                        </div>
                        ]
                        )
                    }


                </Carousel>


            </div>

            {/* carosel mobile view ends    */}


            {/* search bar starts */}

            <div className={styles.searchDiv}>
                <h1 className={styles.searchBarHead}>World's Fasted Growing Hostel Chain</h1>
                <div className={styles.searchBar}>

                    <fieldset className={styles.seFieldset}>

                        <input className={styles.seInput} type="text" placeholder="Search by city , hostel, or neighborhood" />

                    </fieldset>

                    <fieldset className={styles.seFieldset}>

                        <input className={styles.seDate} type="date" min="2018-01-01" max="2019-01-01" />

                    </fieldset>

                    <fieldset className={styles.seFieldset}>

                        <button className={styles.search}>Search</button>

                    </fieldset>

                </div>

            </div>


            {/* search bar starts ends */}







        </>

    )
}

export default Navbar
