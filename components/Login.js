
import styles from '../styles/Login.module.css'

const Login = () => {
    return (
        <>
            <div className={styles.columns}>
                <div className={`${styles.column} ${styles.column_1}`}>
                    <div className={styles.box}>
                        <div className={`container`}>
                            <form action="/action_page.php">
                                <div className={`row-fluid`}>
                                    <h2 className={styles.heading}><b>Make this page responsive</b></h2>
                                    <br />
                                    <br />


                                    <div className={`col`}>
                                        <a href="#" className={`${styles.google} ${styles.btn}`}><i className="fa fa-google fa-fw" >
                                        </i> Login with Google+
                                        </a>
                                    </div>
                                    <br />
                                </div>


                            </form>
                        </div>
                        <br />
                        <br />
                        {/* <!--- or horizonatl line--> */}
                        <div>
                            <h3 className={styles.or}>OR</h3>
                        </div>
                        <form action="">
                            <div className={`form-group`}>
                                <label for="email">Email address: </label>
                                <input type="email" className={`${styles.input} form-control`} id="email" />
                            </div>
                            <div className={`form-group`}>
                                <label for="pwd">Password: </label>
                                <input type="password" className={`${styles.input} form-control`} id="pwd" />
                            </div>

                            <div className={styles.loginWrraper}>

                                <div className="">

                                    <button type="submit" id="login" className={`${styles.loginBtn} btn btn-primary`}>Login</button>
                                    <b>
                                        <a href=""> Forget Password</a>
                                    </b>
                                </div>
                                <br />

                                <span>Don't have an account? <b><a href="/" >Sign up</a></b></span>


                            </div>
                        </form>
                    </div>
                </div>

                <div className={`${styles.column} ${styles.column_2}`} >
                    <img className={`img-fluid ${styles.pic}`} src="/images/pic1.jpg" />
                </div>
            </div>




        </>
    )
}

export default Login
