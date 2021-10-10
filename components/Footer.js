import styles from '../styles/Footer.module.css'
import Link from 'next/link';


const Footer = () => {
    return (
        <>

            <div className={styles.footer}>
                <div className={styles.content}>

                    <div className={` ${styles.box}`}>

                        <div className={styles.upper}>

                            <div className={styles.topic}>Our Logo</div>

                            <hr className={styles.horoz} />

                            <p>
                                We are team Zephep
                                We are finding way to your destination
                            </p>

                        </div>

                        <div className={styles.lower}>

                            <div className={styles.topic}>Contact us</div>

                            <div className={styles.phone}>


                                <Link href="/" >
                                    <a>
                                        <i className={`fas fa-phone-volume`}></i>+73 670 80390</a>
                                </Link>




                            </div>

                            <div className={styles.email}>

                                <Link href="/">
                                    <a >
                                        <i className="fas fa-envelope"></i>
                                        pragatipriya8875@gmail.com
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className={styles.vl}></div>

                    <div className={`${styles.middle} ${styles.box}`}>

                        <div className={styles.topic}>Our Services</div>

                        <div>
                            <Link href="/">
                                <a>
                                    Pragati you are amazing
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/">
                                <a>
                                    Pragati you are amazing
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/">
                                <a>
                                    Pragati you are amazing
                                </a>
                            </Link>                        </div>

                        <div>
                            <Link href="/">
                                <a>
                                    Pragati you are amazing
                                </a>
                            </Link>                        </div>

                        <div>
                            <Link href="/">
                                <a>
                                    Pragati you are amazing
                                </a>
                            </Link>                        </div>

                        <div>
                            <Link href="/">
                                <a>
                                    Pragati you are amazing
                                </a>
                            </Link>                        </div>

                    </div>


                    <div className={`${styles.right} ${styles.box} `}>

                        <div className={styles.topic}>Subscribe us</div>

                        <hr className={styles.horoz} />

                        <form action="/">
                            <input type="text" placeholder="Enter email address" />

                            <input type="submit" name="" value="Send" />

                            <div className={styles.media_icons}>




                                <Link href="/">
                                    <a><i className="fab fa-facebook-f"></i></a>
                                </Link>






                                <Link href="/">
                                    <a><i className="fab fa-instagram"></i></a>
                                </Link>







                                <Link href="/">
                                    <a><i className="fab fa-twitter"></i></a>
                                </Link>







                                <Link href="/">
                                    <a><i className="fab fa-youtube"></i></a>
                                </Link>






                                <Link href="/">
                                    <a ><i className="fab fa-linkedin-in"></i></a>
                                </Link>




                            </div>


                        </form>

                    </div>

                </div>

                <div className={styles.bottom}>
                    <p>Copyright © 2020  <a>Zephep.com</a>  All rights reserved</p>
                </div>
            </div>


        </>
    )
}

export default Footer
