import styles from './Step10.module.css';
import Navbar from '../../Navbar'



const Step1 = () => {


    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>
                        <h3>Tell us more about your PG</h3>

                        <br />
                        <p>
                            Write a brief description of your PG,
                            including its unique features and benefits,
                            to help the tenants know your property better.
                        </p>
                        <br />
                        <div className={styles.inputFeild}>
                            <fieldset>
                                <label className={`${styles.required}`} name="location">PG Description (Min 100 char) </label>
                                <textarea className={`${styles.inputText} `} type="text" name="location" required />

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
