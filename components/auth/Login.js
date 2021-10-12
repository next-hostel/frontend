import React, { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../action/auth';
import Router from 'next/router';
import Link from 'next/link';

import styles from '../../styles/Login.module.css'
import LoginGoogle from './LoginGoogle'

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;
    useEffect(() => {
        isAuth() && Router.push('/');
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 'admin') {
                        Router.push('/admin');
                    }
                    else {
                        Router.push('/user');
                    }
                })

            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');



    const signinForm = () => {
        return (


            <form onSubmit={handleSubmit}>
                <div className={`form-group`}>
                    <label>Email address: </label>
                    <input
                        type="email"
                        className={`${styles.input} form-control`}
                        value={email}
                        onChange={handleChange('email')}
                    />
                </div>
                <div className={`form-group`}>
                    <label>Password: </label>
                    <input
                        type="password"
                        className={`${styles.input} form-control`}
                        value={password}
                        onChange={handleChange('password')}
                    />
                </div>

                <div className={styles.loginWrraper}>

                    <div className="">

                        <button className={`${styles.loginBtn} btn btn-primary`}>Login</button>
                        <b>
                            <a href=""> Forget Password</a>
                        </b>
                    </div>
                    <br />

                    <span>Don't have an account? <b><a href="/" >Sign up</a></b></span>


                </div>
            </form>






        );
    };





    return (
        <>

            <div className={`${styles.columns} row `}>
                <div className={`  col-lg-4 col-md-6`}>
                    <div className={styles.box}>
                        <div className={`container`}>

                            {showError()}
                            {showLoading()}
                            {showMessage()}

                            <div className={`row-fluid`}>
                                <h2 className={styles.heading}><b>Log in to your account</b></h2>
                                <br />
                                <br />

                                <div >
                                    <LoginGoogle />

                                </div>

                                <br />
                            </div>



                        </div>
                        {/* <!--- or horizonatl line--> */}
                        <div>
                            <h3 className={styles.or}>or</h3>
                        </div>
                        {showForm && signinForm()}



                    </div>
                </div>

                <div className={`  mt-3 col-lg-8 col-md-6 `} >
                    <img className={`img-fluid ${styles.pic}`} src="/images/pic1.jpg" />
                </div>
            </div>




        </>
    )
}

export default Login
