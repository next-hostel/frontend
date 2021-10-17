import { withRouter } from 'next/router';
import Login from "../../components/auth/Login/UserLogin/Login";
import Navbar from "../../components/Navbar";


const signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };



    return (
        <>
        <Navbar/>
            <Login />
            {showRedirectMessage()}
        </>
    )
}

export default withRouter(signin);


import React from 'react'


