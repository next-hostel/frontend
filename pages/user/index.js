import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../action/auth';
import { userProfile, getProfile, update } from '../../action/user';
import { API } from '../../config';
import Private from '../../components/auth/Private';
import Layout from '../../components/Layout';

import UserProfile from '../../components/Profile/UserProfile/UserProfile';


const UserIndex = () => {
    const [values, setValues] = useState({

        name: '',
        email: '',
        phone:'',
        error: false,
        success: false,
        loading: false,
        userData: process.browser && new FormData()
    });
    const token = getCookie('token');
    const {
        name,
        email,
        phone,
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
                    email: data.email,
                    phone: data.phone
                });
            }
        });
    };


    useEffect(() => {
        init();
        setValues({ ...values, userData: new FormData() });
    }, []);


    return (
        <Layout>
        <Private>
        
            <UserProfile
             name={values.name}
             email={values.email}
             phone={values.phone}
             />
             </Private>
       
        </Layout>
    )
}

export default UserIndex
