import Navbar from '../../Navbar';
import styles from './Step4.module.css';
import { useState } from 'react';



const Step4 = ({formData, setForm, navigation}) => {


    const [active, setActive] = useState("")

    function select() {
        if (active === "") {
            setActive("active")

        }
        else {
            setActive("")
        }

    }

    

    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>
                        <h3>Room Categories in your PG</h3>

                        <br />
                        <p>Select all the available room categories in your PG</p>
                        <br />

                        <div>

                            <div className={styles.noBed}>
                                <div  className={active} onClick={select}>
                                    

                                    <div className={styles.iconDiv}>

                                        <i className={`${styles.bedIcon} fas fa-bed fa-3x`}></i>

                                    </div>
                                    <div className={styles.iconText}>
                                        <span>Single</span>
                                    </div>

                                </div>

                            </div>

                            <div className={styles.noBed}>
                                <div className={active} onClick={select}>

                                    <div className={styles.iconDiv}>

                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>
                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>

                                    </div>
                                    <div className={styles.iconText}>
                                        <span>Double</span>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.noBed}>
                                <div className={active} onClick={select}>

                                    <div className={styles.iconDiv}>

                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>
                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>
                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>

                                    </div>
                                    <div className={styles.iconText}>
                                        <span>Triple</span>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.noBed}>
                                <div className={active} onClick={select}>

                                    <div className={styles.iconDiv}>

                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>
                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>
                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>
                                        <i className={`${styles.bedIcon} fas fa-bed fa-2x`}></i>


                                    </div>
                                    <div className={styles.iconText}>
                                        <span>Four</span>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.noBed}>
                                <div className={active} onClick={select}>

                                    <div className={styles.iconDiv}>

                                        <i className={`${styles.bedIcon} fas fa-procedures fa-3x`} onClick={()=> navigation.prev()}></i>

                                    </div>
                                    <div className={styles.iconText}>
                                        <span>Other</span>
                                    </div>

                                </div>
                            </div>

                        </div>

                        
                        <div className={`${styles.submitbtn} `}>
                                <div>
                                    <i className={`${styles.leftArrow} fas fa-long-arrow-alt-left`}></i>
                                </div>
                                <button className="btn btn-danger " onClick={()=> navigation.next()}>
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

export default Step4
