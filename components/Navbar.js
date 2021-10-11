import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';
import Sidebar from './Sidebar';
import { signout, isAuth } from '../action/auth';





const Navbar = () => {




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

                <div  className={styles.wrraper}>
                    <div className={styles.toggleBar}>
                        <span onClick={showSidebar} className={styles.closeBtn}><i className={toggler} ></i></span>

                    </div>

                    <div className={styles.navBrand}> <Link href="/">zephep</Link> </div>

                </div>



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






                    {!isAuth() && (

                        <>

                            <div className={styles.searchBtn}>
                                <Link href="/signin" >
                                    <button className="btn btn-outline-primary btn-sm">
                                        Login
                                    </button>
                                </Link>
                            </div>

                            <div className={styles.userBtn}>
                                <span ><i className="fas fa-user"></i></span>
                                <Link href="/signup">  SignUp</Link>
                            </div>
                        </>

                    )}

                    {isAuth() && isAuth().role === 'user' && (

                        <>

                            <div className={styles.searchBtn}>
                                <button className={`btn btn-danger btn-sm`}>{`${isAuth().name}'s Dashboard`}</button>
                            </div>


                        </>

                    )}

                    {isAuth() && (
                        <div className={styles.userBtn}>
                            <span><i className="fas fa-user"></i></span>
                            <span onClick={() => signout(() => Router.replace(`/signin`))}>Signout</span>
                        </div>
                    )}

                </div>


            </div>
            {/* navbar ends */}




        </>

    )
}

export default Navbar