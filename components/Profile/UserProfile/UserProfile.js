import React, { useState } from 'react';
import styles from './UserProfile.module.css'

const UserProfile = ({
    username,
    name,
    email,
    phone,
    profession
}) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <div className={styles.grand_parent}>
                <h1 className={styles.title}> Profile </h1>
                <div className={styles.parents}>
                    <div className={styles.child}>
                        <p className={styles.smallHead}>Edit Profile <i className={`fa fa-edit`} ></i></p>
                        <div>
                            <h5 className={styles.heads}> Full name </h5>
                            <span className={styles.name}> Raman Madhukar </span>
                            <h5 className={styles.heads}> Phone number </h5>
                            <span className={styles.name}> 7413964641 </span>
                            <h5 className={styles.heads}> Email Address </h5>
                            <span className={styles.name}> ramanmadhukar6@gmail.com </span>
                        </div>
                    </div>

                    <div className={styles.child}>
                        <div>
                            <p className={styles.smallHead}>Change Password <i className="fa fa-edit" ></i> </p>
                            <h5 className={styles.heads}> Current Password </h5>
                            <span className={styles.name}> ******** </span>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default UserProfile
