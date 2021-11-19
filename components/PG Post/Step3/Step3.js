import styles from './Step3.module.css';
import Navbar from '../../Navbar';




const Step3 = ({formData, setForm, navigation}) => {
    const {owner} = formData;


    return (
        <>
            <Navbar />

            <div className={`${styles.mainDiv} container-fluid`}>


                <div className={`${styles.internalDiv} row`}>

                    <div className={`${styles.main} col-6`}>
                        <h3 className={styles.head}>You Are Posting this Pg As </h3>

                        <div className={styles.inputFeild}>
                            <fieldset className={styles.checkbox}>
                                <label name='1'>Owner</label>
                                <div className={styles.pp}>

                                    <input className={styles.radio} type="radio" name="owner" onChange={setForm} />
                                </div>

                            </fieldset>
                            <hr />

                            <fieldset className={styles.checkbox}>
                                <label name='1'>Property Manager</label>
                                <div className={styles.pp}>
                                    <input className={styles.radio} type="radio" name="owner" onChange={setForm} />
                                </div>
                            </fieldset>
                            <hr />

                            <fieldset className={styles.checkbox}>
                                <label name='1'>Agent</label>
                                <div className={styles.pp}>

                                    <input className={styles.radio} type="radio" name="owner" onChange={setForm} />
                                </div>

                            </fieldset>


                        </div>






                        <div className={`${styles.submitbtn} `}>
                            <div>
                                <i className={`${styles.leftArrow} fas fa-long-arrow-alt-left`} onClick={()=> navigation.prev()}></i>
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

export default Step3
