import styles from './Setp1.module.css';
import Navbar from '../../Navbar';
import { useState } from 'react';

import React from 'react'



const Step1 = () => {

    const [displayPane, setDisplayPane] = useState("displayNone")

    function display() {
        if (displayPane === "display") {
            setDisplayPane("displayNone");
        }
        else {
            setDisplayPane("display");
        }
    }

    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>
                        <h3>Where is your PG Located?</h3>

                        <br />
                        <p>Make sure you enter the correct address for a smooth verification. </p>
                        <br />
                        <div className={styles.inputFeild}>
                            <fieldset>
                                <label className={`${styles.required}`} name="location">Enter Locality</label>
                                <input className={`${styles.inputText} `} type="text" name="location" required />

                            </fieldset>

                            <i className={`fas fa-search-location ${styles.searchBtn}`} onClick={display}></i>

                        </div>

                        <div className={displayPane} >
                            <div className={styles.bottomBox}>


                                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.550107199182!2d75.69747551507372!3d30.221385481818313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f8bd26a61ba3%3A0xa45e3a23dfc09f9b!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1634755894793!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

                                <fieldset>
                                    <label className={`${styles.required}`} name="address">Address</label>
                                    <input className={`${styles.inputText} `} type="text" name="address" required />

                                </fieldset>

                                <fieldset>
                                    <label className={`${styles.required}`} name="pincode">Pincode</label>
                                    <input className={`${styles.inputText} `} type="number" name="pincode" required />

                                </fieldset>

                                <fieldset>
                                    <label className={``} name="landmark">Landmark</label>
                                    <input className={`${styles.inputText} `} type="text" name="landmark" required />

                                </fieldset>

                                <fieldset>
                                    <label className={`${styles.required}`} name="startTime">PG Operational</label>
                                    <input className={`${styles.inputText} `} type="text" name="startTime" required />

                                </fieldset>


                                <fieldset>
                                    <label className={`${styles.required}`} name="startTime" >PG is present in</label>
                                    <select name="pgType" className={`${styles.select} `} >

                                        <option value="-1">Select</option>
                                        <option value="buliding">An independent building</option>
                                        <option value="flat">An independent flat(s)</option>
                                        <option value="society">Present in a society</option>

                                    </select>

                                </fieldset>


                            </div>


                            <div className={`${styles.submitbtn} `}>
                                <div>
                                    <i className={`${styles.leftArrow} fas fa-long-arrow-alt-left`}></i>
                                </div>
                                <button className="btn btn-danger " >
                                    Submit
                                </button>
                            </div>

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

export default Step1
