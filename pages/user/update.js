
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Link from 'next/link';



const UserProfileUpdate = () => {
    return (
        <Private>
                <div className="container-fluid">
                    <div className="row">
                        <ProfileUpdate />
                    </div>
                </div>
            </Private>
    )
}

export default UserProfileUpdate
