import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../action/auth';
import { getProfile, update } from '../../action/user';
import { API } from '../../config';



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
        getProfile(token).then(data => {
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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="btn btn-outline-info">
                    Profile photo
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
            </div>
            
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" value={name} className="form-control" />
            </div>
            {/*<div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="text" value={email} className="form-control" />
            </div>*/}
            
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" value={password} className="form-control" />
            </div>
            <div>
                {showSuccess()}
                {showError()}
                {showLoading()}
            </div>
            <div>
                <button type="submit" className="btn btn-primary" disabled={ !name || !email}>
                    Update
                </button>
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
