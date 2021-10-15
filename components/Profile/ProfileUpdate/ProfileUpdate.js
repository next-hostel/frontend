
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser, updatepassword } from '../../../action/auth';
import { userProfile, getProfile, update, updatePassword } from '../../../action/user';
import { API } from '../../../config';
import styles from './ProfileUpdate.module.css'


const Profileupdate = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        error: false,
        success: false,
        loading: false,

    });

    const [pValue, setPvalue] = useState({
        cPassword: '',
        password: '',
        err: false,
        succ: false,
        load: false,
    })


    const {
        name,
        phone,
        error,
        success,
        loading,
    } = values;

    const {
        cPassword,
        password,
        err,
        succ,
        load,
    } = pValue;


    const token = getCookie('token');

    const init = () => {
        const id = isAuth()._id

        userProfile(id, token).then(data => {
            console.log("Profile", data)
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,

                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);





    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        // let userData = new FormData();

        // SEE THE FORMDATA IN CONSOLE
        setValues({ ...values, [name]: value, error: false, success: false });

    };

    const handlePassword = name => e => {

        setPvalue({ ...pValue, [name]: e.target.value, err: false, succ: false })
    }


    const handleSubmit = e => {
        e.preventDefault();

        setValues({ ...values, loading: true, error: false });
        const user = { name, phone }

        update(token, user).then(data => {
            if (data.error) {
                console.log('data.error', data.error);
                setValues({ ...values, error: data.error, loading: false });
            } else {
                updateUser(data, () => {
                    console.log("values", data)
                    setValues({

                        ...values,
                        name: data.name,
                        phone: data.phone,


                        success: true,
                        loading: false
                    });
                    console.log(name)
                });
            }
        });
    };

    const handlePsubmit = e => {
        e.preventDefault();

        const id = isAuth()._id

        setPvalue({ ...pValue, load: true, err: false });
        const user = { cPassword, password }

        updatePassword(id, token, user).then(data => {
            if (data.error) {
                console.log('data.err', data.error);
                setPvalue({ ...pValue, err: data.error, load: false });
            } else {

                setPvalue({

                    ...pValue,
                    cPassword: '',
                    password: '',

                    succ: true,
                    load: false
                });


            }
        });
    };

    const ProfileUpdate = () => (

        <form onSubmit={handleSubmit}>
            <div>
                <label className={styles.heads}> Full name </label>
                <input
                    onChange={handleChange('name')}
                    type="text"
                    value={name}
                    className={`${styles.inbox}`}


                />
                <label className={styles.heads}> Phone number </label>
                <input
                    onChange={handleChange('phone')}
                    type="text"

                    value={phone}
                    className={`${styles.inbox}`}

                />
                <h5 className={styles.heads}> Email Address </h5>
                <p className={styles.name}>{values.email} </p><br />




                {showSuccess()}
                {showError()}
                {showLoading()}
                <button type="submit" className={styles.update_pass}> Update</button>
            </div>
        </form>

    )

    const passwordUpdate = () => (
        <form onSubmit={handlePsubmit}>
            <div className="container">
                {showSucc()}
                {showErr()}
                {showLoad()}
            </div>
            <h5 className={styles.heads}> Enter New  Password </h5>
            <input
                className={styles.inbox}
                type="password"
                value={password}
                onChange={handlePassword('password')}
            />
            <h5 className={styles.heads}>Re Enter New Password </h5>
            <input
                className={styles.inbox}
                type="password"
                value={cPassword}
                onChange={handlePassword('cPassword')}

            />

            <br />
            <p className={styles.lasttext}>Password should have atleast 8 characters including 1 special character.</p><br />
            <button className={`btn btn-success ms-5`} type="submit" >Update Password</button>

        </form>

    )


    const showError = () => (

        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showErr = () => (

        <div className="alert alert-danger" style={{ display: err ? '' : 'none' }}>
            {err}
        </div>
    );



    const showSuccess = () => (

        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );


    const showSucc = () => (

        <div className="alert alert-success" style={{ display: succ ? '' : 'none' }}>
            Password updated
        </div>
    );



    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );
    const showLoad = () => (
        <div className="alert alert-info" style={{ display: load ? '' : 'none' }}>
            Loading...
        </div>
    );

    return (
        <>
            <div className={`${styles.grand_parent} container `}>
                <h1 className={styles.title}> Profile </h1>
                <div className={styles.parents}>
                    <div className={styles.child}>
                        <p className={styles.smallHead}>Edit Profile <i className="fa fa-edit" ></i></p>
                        <div className="container">

                        </div>


                        {ProfileUpdate()}

                    </div>

                    <div className={styles.child}>
                        <div>
                            <p className={styles.smallHead}>Change Password <i className="fa fa-edit" ></i> </p>

                            {passwordUpdate()}



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profileupdate
