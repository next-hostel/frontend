import React from 'react'
import Navbar from '../../Navbar';
import styles from './Step8.module.css';

const Step8 = ({fromData, setForm, navigation}) => {
    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>

                        <h3>Services Available</h3>

                        <div className={styles.checkBoxDiv}>
                            <fieldset>
                                <label className={``} name="laundry">Laundry</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="laundry" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="roomCleaning">Room Cleaning</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="roomCleaning" />

                            </fieldset>

                            <fieldset>
                                <label className={``} name="warden">Warden</label>
                                <input className={`${styles.checkboxText} `} type="checkbox" name="warden" />

                            </fieldset>



                            <div className={styles.timeLimit}>
                                <div className={styles.tenantsCheckboxDiv}>
                                    <h6>Food Provided</h6>
                                    <input type="checkbox" />
                                </div>
                                <div className={styles.hiddenDiv}>

                                    <div className={styles.selectDiv}>
                                        <fieldset>
                                            <label className={``} name="breakfast">Breakfast</label>
                                            <input className={`${styles.checkboxText} `} type="checkbox" name="breakfast" />

                                        </fieldset>
                                        <fieldset>
                                            <label className={``} name="lunch">Lunch</label>
                                            <input className={`${styles.checkboxText} `} type="checkbox" name="lunch" />

                                        </fieldset>
                                        <fieldset>
                                            <label className={``} name="dinner">Dinner</label>
                                            <input className={`${styles.checkboxText} `} type="checkbox" name="dinner" />

                                        </fieldset>
                                    </div>

                                    <fieldset>
                                        <div className={styles.selectDiv}>

                                            <label className={`${styles.required}`} name="vegNonVeg" >Veg/NonVeg food provided</label>

                                            <select name="vegNonVeg" className={`${styles.select} `} placeholder="Select" >

                                                <option value="-1">Select</option>
                                                <option value="veg">Veg</option>
                                                <option value="non-veg">Veg & Non-Veg</option>

                                            </select>
                                        </div>

                                    </fieldset>

                                    <fieldset>
                                        <div className={styles.selectDiv}>

                                            <label className={`${styles.required}`} name="food_charge" >Food Charges</label>

                                            <select name="food_charge" className={`${styles.select} `} placeholder="Select" >

                                                <option value="-1">Select</option>
                                                <option value="inRent">Include in Rent</option>
                                                <option value="perMeal">Per Meal Basis</option>
                                                <option value="monthly">Fixed Monthly Amount</option>

                                            </select>
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

export default Step8
