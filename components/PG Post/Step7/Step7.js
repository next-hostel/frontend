import React from 'react'
import Navbar from '../../Navbar';
import styles from './Step7.module.css';

const Step7 = ({ formData, setForm, navigation }) => {

    const {
        vegOnly,
        noSmoking,
        bearveg,
        oppoSexAllow,
        ParentsAllowed,
        noticePeriod,
        time} = formData;

    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>

                        <h3>PG Rules</h3>

                        <div className={styles.checkBoxDiv}>
                            <fieldset>
                                <label className={``} name="vegOnly">Veg Only</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="vegOnly" onChange={setForm} />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="noSmoking">No Smoking</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="noSmoking" onChange={setForm} />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="bearveg">Drinking alcohol not allowed</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="bearveg" onChange={setForm} />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="oppoSexAllow">Entry of opposite gender not allowed</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="oppoSexAllow" onChange={setForm} />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="ParentsAllowed">Guardian not allowed</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="ParentsAllowed" onChange={setForm} />

                            </fieldset>

                            <fieldset>
                                <div className={styles.selectDiv}>
                                    <label className={`${styles.required}`} name="noticePeriod" >Select Notice Period</label>
                                    <select name="noticePeriod" className={`${styles.select} `} placeholder="Select" onChange={setForm} >

                                        <option value="-1">Select</option>
                                        <option value="oneWeek">1 Week</option>
                                        <option value="2Week">15 Days</option>
                                        <option value="oneMonth">1 Month</option>
                                        <option value="twoMonth">2 Month</option>
                                        <option value="greater">&gt; 2 Month</option>
                                        <option value="no">No Notice Period</option>

                                    </select>
                                </div>

                            </fieldset>

                            <div className={styles.timeLimit}>
                                <div className={styles.tenantsCheckboxDiv}>
                                    <h6>Tenants must be back in PG before</h6>
                                    <input type="checkbox" />
                                </div>
                                <div className="">

                                    <fieldset>
                                        <div className={styles.selectDiv}>

                                            <label className={`${styles.required}`} name="time" >Gate Closing time</label>

                                            <select name="time" className={`${styles.select} `} placeholder="Select" onChange={setForm} >

                                                <option value="-1">No Closing Time</option>
                                                <option value="seven">7:00 PM</option>
                                                <option value="eight">8:00 PM</option>
                                                <option value="nine">9:00 PM</option>
                                                <option value="ten">10:00 PM</option>
                                                <option value="eleven">11:00 PM</option>
                                                <option value="twelve">12:00 aM</option>

                                            </select>
                                        </div>

                                    </fieldset>


                                </div>
                            </div>

                        </div>


                        <div className={`${styles.submitbtn} `}>
                            <div>
                                <i className={`${styles.leftArrow} fas fa-long-arrow-alt-left`} onClick={()=> navigation.previous()}></i>
                            </div>
                            <button className="btn btn-danger " onClick={() => navigation.next()}>
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

export default Step7
