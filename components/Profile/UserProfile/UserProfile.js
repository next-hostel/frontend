import React, { useState } from 'react';
import Link from 'next/link';
import styles from './UserProfile.module.css'

const UserProfile = ({

    name,
    email,
    phone,

}) => {


   


    return (
        <>
            <div className={`${styles.grand_parent} container`}>
                <h1 className={styles.title}> Profile </h1>
                <div className={styles.parents}>
                    <div className={styles.child}>
                        <p className={styles.smallHead}>
                            <Link href="/user/update">
                                <a> Edit Profile <i className={`fa fa-edit`} ></i></a>
                            </Link>
                        </p>
                        <div>
                            <h5 className={styles.heads}> Full name </h5>
                            <span className={styles.name}> {name} </span>
                            <h5 className={styles.heads}> Phone number </h5>
                            <span className={styles.name}> {phone} </span>
                            <h5 className={styles.heads}> Email Address </h5>
                            <span className={styles.name}> {email}</span>
                        </div>
                    </div>

                    <div className={styles.child}>
                        <div>
                            <p className={styles.smallHead}>
                            <Link href="/user/update">
                                <a>  Change Password <i className={`fa fa-edit`} ></i></a>
                            </Link>
                                 </p>
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
