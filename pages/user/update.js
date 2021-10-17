
import Link from 'next/link';

import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/Profile/ProfileUpdate/ProfileUpdate';

import Layout from '../../components/Layout'



const UserProfileUpdate = () => {
    


    return (
        <Layout>
            <Private>
                
                        <ProfileUpdate />
                    
            </Private>
        </Layout>

    )
}

export default UserProfileUpdate
