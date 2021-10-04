import React from 'react'
import SignupComponent from '../components/auth/SignupComponent'

const Signup = () => {
    return (
        <>
            <h2 className="text-center pt-4 pb-4">Signup page</h2>
            <div className="container">
            <div className = "row">
              <div className='col-md-6 offset-md-3'>
                 <SignupComponent />
              </div>
            </div>
            </div>
            
        </>
    )
}

export default Signup
