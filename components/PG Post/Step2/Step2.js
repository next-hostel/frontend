import styles from './Step2.module.css'
import Navbar from '../../Navbar'

const Step2 = ({ formData, setForm, navigation }) => {

    const {pgName} = formData;
    return (
       
    <>

        <Navbar />

        <div className={`${styles.mainDiv} container-fluid`}>


            <div className={`${styles.internalDiv} row`}>

                <div className={`${styles.main} col-6`}>
                    <h3>Confirm your PG name</h3>

                    <br />
                    <p>The name will be visible to the guests when they search for PG on Magicbricks</p>
                    <br />
                    <div className={styles.inputFeild}>
                        <fieldset>
                            <label className={`${styles.required}`} name="pgName">Name of PG</label>
                            <input className={`${styles.inputText} `} type="text" name="pgName" onChange={setForm} required />

                        </fieldset>


                    </div>



                    <div className={`${styles.submitbtn} `}>
                        <div>
                            <i className={`${styles.leftArrow} fas fa-long-arrow-alt-left`} onClick={() => navigation.prev()}></i>
                        </div>
                        <button className="btn btn-danger " onClick={() => navigation.next()} >
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

export default Step2
