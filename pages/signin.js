import { withRouter } from 'next/router';

import Layout from '../components/Layout';
import Login from "../components/auth/Login";



const signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };



    return (
        <Layout>
          
            <Login />
            {showRedirectMessage()}
        </Layout>
    )
}

export default withRouter(signin);


import React from 'react'


