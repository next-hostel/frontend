import { useState, useEffect } from 'react';
import { signup, isAuth, preSignup } from "../../action/auth";
import Router from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Signup.module.css';
import LoginGoogle from './LoginGoogle'


const SignupC = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push('/');
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false })

        const user = { name, email, password }


        preSignup(user)
        .then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });

            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                })
            }
        })

    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-success">{message}</div> : '');



    const signupForm = () => {
        return (

            <form onSubmit={handleSubmit}>

                            <div className={`form-group`}>
                                <label>Name: </label>
                                <input
                                 type="text"
                                  className={`${styles.input} form-control`} 
                                  value={name}
                                 onChange={handleChange('name')}
                                  
                                   />
                            </div>


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

                                    <button className={`${styles.loginBtn} btn btn-primary`}>Sign Up</button>

                                </div>
                                <br />

                                <span>already have an account? <b><a href="/" >Login</a></b></span>


                            </div>
                        </form>
        );
    };


    return (
        <>
            <div className={styles.columns}>
                <div className={`${styles.column} ${styles.column_1}`}>
                    <div className={styles.box}>
                        <div className={`container`}>
                        {showError()}
            {showLoading()}
            {showMessage()}
                            
                                <div className={`row-fluid`}>
                                    <h2 className={styles.heading}><b>Make this page responsive</b></h2>
                                    <br />
                                    <br />
                                    <LoginGoogle />
                                    <br />
                                </div>


                           
                        </div>
                        <br />
                        <br />
                        {/* <!--- or horizonatl line--> */}
                        <div>
                            <h3 className={styles.or}>OR</h3>
                        </div>
                        


                        {showForm && signupForm()}


                    </div>
                </div>

                <div className={`${styles.column} ${styles.column_2} mt-3`} >
                    <img className={`img-fluid ${styles.pic}`} src="/images/pic1.jpg" />
                </div>
            </div>

        </>
    )
}

export default SignupC
