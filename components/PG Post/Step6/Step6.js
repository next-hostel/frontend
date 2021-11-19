import styles from './Step6.module.css';
import Navbar from '../../Navbar';




const Step6 = ({formData, setForm, navigation}) => {

const {
    gender,
    student

} = formData;


    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>
                        <h3 className={styles.head}>Preferred Gender </h3>

                        <div className={styles.inputFeild}>

                            <div className={styles.Feild}>
                            <fieldset className={styles.checkbox}>
                                <i className={`${styles.PIcon} fas fa-mars fa-2x`}></i>
                                <label name='1'>Male</label>
                                <input className={styles.radio} type="radio" name="gender"   />

                            </fieldset>
                            </div>

                            <div className={styles.Feild}>

                            <fieldset className={styles.checkbox}>
                                <i className={`${styles.PIcon} fas fa-venus fa-2x`}></i>
                                <label name='1'>Female</label>
                                <input className={styles.radio} type="radio" name="gender"   />

                            </fieldset>
                            </div>

                            <div className={styles.Feild}>
                            <fieldset className={styles.checkbox}>
                                <i className={`${styles.PIcon} fas fa-venus-mars fa-2x`}></i>
                                <label name='1'>Both</label>
                                <input className={styles.radio} type="radio" name="gender"   />

                            </fieldset>
                            </div>

                        

                        <h3 className={styles.head1}>Set Your Tenant Preferences  </h3>

                        <div className={styles.inputFeild}>

                            <div className={styles.Feild}>
                            <fieldset className={styles.checkbox}>
                                <i className={`${styles.PIcon} fas fa-user-graduate `}></i>

                                <label name='1'>Professional</label>
                                <div className={styles.pp}>
                                <input className={styles.radio} type="radio" name="student"/>
                                </div>
                            </fieldset>
                            </div>

                            <div className={styles.Feild}>
                            <fieldset className={styles.checkbox}>
                                <i className={`${styles.PIcon} fas fa-chalkboard-teacher `}></i>
                                <label name='1'>  Student </label>
                                <div className={styles.pp}>
                                <input className={styles.radio} type="radio" name="student"   />
                                </div>

                            </fieldset>
                            </div>

                            <div className={styles.Feild}>
                            <fieldset className={styles.checkbox}>
                                <i className={`${styles.PIcon} fas fa-chalkboard-teacher `}></i>
                                <label name='1'>  Both    </label>
                                <div className={styles.pp}>
                                <input className={styles.radio} type="radio" name="student"   />
                                </div>

                            </fieldset>
                            </div>

                        </div>
                        </div>


                        



                        <div className={`${styles.submitbtn} `}>
                            <div>
                                <i className={`${styles.leftArrow} fas fa-long-arrow-alt-left`} onClick={()=> navigation.prev()}></i>
                            </div>
                            <button className="btn btn-danger " onClick={()=> navigation.next()} >
                                Submit
                            </button>
                        </div>

                    </div>

                    <div className={`${styles.des} col-6`}>

                        <h3>Claim your PG</h3>

                        <h6>If your PG is already listed with us, you can claim it in the following steps:</h6>

                        <br />

                        <ol>
                            <li>Enter the correct locality.</li>
                            <li>Check the list of PGs already listed in that locality.</li>
                            <li>Find your PG in the and click on 'Select PG'.</li>
                            <li>Check the details of the PG and click on 'Claimm and Continue'.</li>
                        </ol>


                        <h6>Can't find your PG n the list?</h6>

                        <ul>
                            <li>Simply provide your PG details and list it now.</li>
                        </ul>


                    </div>


                </div>

            </div>


        </>
    )
}

export default Step6
