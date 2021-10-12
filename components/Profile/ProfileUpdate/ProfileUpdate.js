import  styles from './ProfileUpdate.module.css'


const Profileupdate = () => {
    return (
        <>
            <div className={styles.grand_parent}>
                <h1 className={styles.title}> Profile </h1>
                <div className={styles.parents}>
                    <div className={styles.child}>
                        <p className={styles.smallHead}>Edit Profile <i className="fa fa-edit" ></i></p>
                        <div>
                            <h5 className={styles.heads}> Full name </h5>
                            <input className={styles.inbox}></input>
                            <h5 className={styles.heads}> Phone number </h5>
                            <input className={styles.inbox}></input>
                            <h5 className={styles.heads}> Email Address </h5>
                            <p className={styles.name}> ramanmadhukar6@gmail.com </p><br />
                            <input className={styles.update_pass} type="submit" name="sign-in" value="Update"></input>
                        </div>
                    </div>

                    <div className={styles.child}>
                        <div>
                            <p className={styles.smallHead}>Change Password <i className="fa fa-edit" ></i> </p>
                            <h5 className={styles.heads}> Current Password </h5>
                            <input className={styles.inbox}></input>
                            <h5 className={styles.heads}> New Password </h5>
                            <input className={styles.inbox}></input><br />
                            <p className={styles.lasttext}>Password should have atleast 8 characters including 1 special character.</p><br/>
                            <input className ={`${styles.update_pass}`} type ="submit" name="sign-in" value="Update"></input>
                            <span> <a href="#">Pagal pass q bhulte ho!</a></span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profileupdate
