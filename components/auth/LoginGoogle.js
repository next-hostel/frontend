import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button'
import { loginWithGoogle, authenticate, isAuth } from '../../action/auth';
import { GOOGLE_CLIENT_ID } from '../../config';

const LoginGoogle = () => {
    const responseGoogle = response => {
        console.log(response);
        const tokenId = response.tokenId;
        const user = { tokenId };

        loginWithGoogle(user).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 'admin') {
                        Router.push(`/admin`);
                    } 
                    else if(isAuth() && isAuth().role === 'hOwner') {
                        Router.push('/hostelOwner');
                    }
                    else {
                        Router.push(`/user`);
                    }
                });
            }
        });
    };
    
    return (
        
       
        <div className="pb-0">
            <GoogleLogin
                clientId={`${GOOGLE_CLIENT_ID}`}
                buttonText="Login with Google"
                render={renderProps => (
                     <GoogleButton style={{width:"auto"}} onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                 )}
              
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                
                theme="dark"
                
            />
        </div>
    );
};

export default LoginGoogle;