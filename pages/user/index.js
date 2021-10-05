import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../action/auth';
import { userProfile, update } from '../../action/user';
import { API } from '../../config';
import Private from '../../components/auth/Private';

import UserProfile from '../../components/Profile/UserProfile/UserProfile';


const UserIndex = () => {
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


    return (
        <Private>
            <UserProfile
            username="Kshiti123"
            name={values.name}
            email={values.email}
            phone={values.phone}
            profession={values.profession}
           

             />
        </Private>
    )
}

export default UserIndex
