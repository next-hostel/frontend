import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';



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
            <SigninComponent />
            {showRedirectMessage()}
        </>
    )
}

export default withRouter(signin);
