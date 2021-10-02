import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import { Button } from 'reactstrap';
import { useState } from 'react';
import Sidebar from './Sidebar';




const Navbar = () => {

    const breakPoints = [
        { width: 800, itemsToShow: 3 }
    ]

    const carObject = ["Hostel", "Mess", "PG", "Blog", "Harsh", "Raman", "Pragati"];

    const [sideBar, setSideBar] = useState("sideInActive");

    const [toggler, setToggler] = useState("fas fa-bars")


    function showSidebar() {
        if (sideBar === "sideInActive") {
            setSideBar("sideActive")
        }
        else {
            setSideBar("sideInActive")
        }

        if (toggler === "fas fa-bars") {
            setToggler("fas fa-times")
        }
        else {
            setToggler("fas fa-bars")
        }

    }


    return (


        <>

            <div className={styles.side}>
                <div className={sideBar}>
                    <Sidebar />
                </div>

            </div>

            {/* navbar  */}

            <div className={styles.navabar}>

                <div onClick={showSidebar} className={styles.wrraper}>
                    <div className={styles.toggleBar}>
                        <span onClick={showSidebar} className={styles.closeBtn}><i className={toggler} ></i></span>

                    </div>

                    <div className={styles.navBrand}> <Link href="/">zephep</Link> </div>

                </div>


                <div className={styles.sec}>

                    <div className={styles.element}>


                        <div className={styles.hostelEle}>
                            <span><i className="far fa-building"></i></span>
                            <Link href="/">Hostel</Link>

                        </div>

                        <div className={styles.hostelEle}>
                            <span><i className="fa fa-home"></i></span>

                            <Link href="/">PG</Link>
                        </div>

                        <div className={styles.hostelEle}>
                            <span><i className="fas fa-utensils"></i></span>

                            <Link href="/">Mess</Link>
                        </div>



                    </div>


                    <div className={styles.wrraper}>


                        <div className={styles.searchBtn}>
                            <button className={`btn btn-danger btn-sm`}>Login</button>
                        </div>

                        <div className={styles.userBtn}>
                            <span><i className="fas fa-user"></i></span>
                            <span>Sign Up</span>
                        </div>
                    </div>
                </div>


            </div>
            {/* navbar ends */}

            {/* carosel mobile view */}

            <div className={`${styles.carousel} mob-car `}>

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


        </>

    )
}

export default Navbar
