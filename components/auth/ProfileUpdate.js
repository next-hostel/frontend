import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../action/auth';
import { userProfile, update } from '../../action/user';
import { API } from '../../config';
import styles from './ProfileUpdate.module.css'



const ProfileUpdate = () => {

    const [values, setValues] = useState({

        name: '',
        email: '',
        password: '',
        error: false,
        success: false,
        loading: false,
        userData: process.browser && new FormData()
    });

    const token = getCookie('token');
    const {
        name,
        email,
        password,
        error,
        success,
        loading,
        userData
    } = values;

    const init = () => {
        const id = isAuth()._id;
        userProfile(id, token).then(data => {
            console.log("Profile", data)
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    email: data.email
                });
            }
        });
    };

    useEffect(() => {
        init();
        setValues({ ...values, userData: new FormData() });
    }, []);

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === e.target.value;
        // let userData = new FormData();
        userData.set(name, value);
        console.log(...userData); // SEE THE FORMDATA IN CONSOLE
        setValues({ ...values, [name]: value, userData, error: false, success: false });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setValues({ ...values, loading: true });
        update(token, userData).then(data => {
            if (data.error) {
                console.log('data.error', data.error);
                setValues({ ...values, error: data.error, loading: false });
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
                        email: data.email,
                        password: '',
                        success: true,
                        loading: false
                    });
                });
            }
        });
    };


    const profileUpdateForm = () => (
        <form >
            <div className="container mx-auto">
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <label>User Id</label>
                    </div>
                    <div className="col-sm-6">
                        <p className={styles.pColor}>Harsh123h</p>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <label>Name</label>
                    </div>
                    <div className="col-sm-6">
                        <p className={styles.pColor}>{values.name}</p>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <label>Email</label>
                    </div>
                    <div className="col-sm-6">
                        <p className={styles.pColor}>{values.email}</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <label>Phone</label>
                    </div>
                    <div className="col-sm-6">
                        <p className={styles.pColor}> 6387522891</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <label>Profession</label>
                    </div>
                    <div className="col-sm-6">
                        <p className={styles.pColor}>Web Developer</p>
                    </div>
                </div>
            </div>


        </form>
    );

    const showError = () => (

        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (

        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );


    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-md-8 mb-5">{profileUpdateForm()}</div>
                </div>
            </div>
        </>
    )
}

export default ProfileUpdate
