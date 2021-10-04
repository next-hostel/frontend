import Private from '../../components/auth/Private';
import Link from 'next/link';
import UserProfile from '../../components/Profile/UserProfile/UserProfile';


const UserIndex = () => {
    return (
        <Private>
            <UserProfile
            username="Kshiti123"
            name="Kshiti Ghelani"
            email="kshitighelani@gmail.com"
            phone="6387522891"
            profession="Web Developer and Designer"

             />
        </Private>
    )
}

export default UserIndex
