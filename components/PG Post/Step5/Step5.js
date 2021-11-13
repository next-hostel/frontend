import React from 'react'
import Navbar from '../../Navbar';
import styles from './Step5.module.css';

const Step5 = ({fromData, setForm, navigation}) => {
    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>
                        <h3>Rent Details for Twin Sharing Room</h3>

                        <br />

                        <div className={styles.roomChoseen}>
                            <div className={styles.noBed}>
                                <div className={styles.iconDiv}>

                                    <i className={`${styles.bedIcon} fas fa-bed fa-3x`}></i>

                                </div>
                                <div className={styles.iconText}>
                                    <span>Single</span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <fieldset>
                                <label className={`${styles.required}`} name="noOfBed">No. of twin sharing rooms in PG</label>
                                <input className={`${styles.inputText} `} type="number" name="noOfBed" required />

                            </fieldset>

                            <fieldset>
                                <label className={`${styles.required}`} name="rent">Monthly Rent Per Bed (₹)</label>
                                <input className={`${styles.inputText} `} type="number" name="rent" required />

                            </fieldset>

                            <fieldset>
                                <label className={`${styles.required}`} name="security">Security Deposit Per Bed (₹)</label>
                                <input className={`${styles.inputText} `} type="number" name="security" required />

                            </fieldset>
                        </div>

                        <div className={styles.checkboxDiv}>
                            <h3 >Room Facilities</h3>

                            <fieldset>
                                <label className={``} name="Geyser">Geyser</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="Geyser" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="Washrooms">Washrooms</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="Washrooms" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="cupboard">Cupboard</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="cupboard" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="tv">TV</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="tv" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="ac">AC</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="ac" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="cot">Cot</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="cot" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="mattress">Mattress</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="mattress" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="sideTable">Side Table</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="sideTable" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="airCooler">Air Cooler</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="airCooler" />

                            </fieldset>

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

export default Step5
