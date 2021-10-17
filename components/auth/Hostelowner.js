import React, { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../action/auth';

const Hostelowner = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/signin`);
        } else if (isAuth().role !== 'hOwner') {
            Router.push(`/`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Hostelowner;