import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';
import Layout from '../components/Layout';



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
            <SigninComponent />
            {showRedirectMessage()}
        </Layout>
    )
}

export default withRouter(signin);


import React from 'react'


