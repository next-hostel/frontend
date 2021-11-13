import styles from './Search.module.css'


const Search = () => {
    return (
        <>
            <div className={`${styles.searchDiv}  `}>

                <svg width="212" height="93" xmlns="http://www.w3.org/2000/svg" className={`${styles.backImg1} img-fluid`}><g transform="translate(0 -31)" fill="none" fill-rule="evenodd" opacity=".6"><rect fill="#C11F3D" x="14.311" y="32.451" width="19.209" height="6.616" rx="3.308"></rect><rect fill="#C11F3D" x="165.943" y="48.731" width="11.338" height="6.616" rx="3.308"></rect><path d="M62.465 95.555H115.3v27.822H62.465V95.555zm149.313 28.424H.482l.14-.6h211.156v.6zM63.78 35.212h50.956v4.694H63.78v-4.694z" fill="#A81433" fill-rule="nonzero"></path><path fill="#880F2F" d="M114.736 35.212h26.043v4.694h-26.043z"></path><path fill="#880F2F" d="M114.736 39.905h22.808v83.474h-22.808z"></path><path fill="#B21737" d="M66.874 39.905h47.862v54.33H66.874z"></path><path fill="#880F2F" d="M57.587 90.017h57.15v6.292h-57.15z"></path><path d="M120.978 107.52h10.324v15.857h-10.324V107.52zm-3.426-58.042h17.176v3.471h-17.177v-3.471zm0 10.321h17.176v3.472h-17.177v-3.472zm0 10.325h17.176v3.47h-17.177v-3.47zm0 10.324h17.176v3.47h-17.177v-3.47z" fill="#A81433" fill-rule="nonzero"></path><path d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z" fill="#880F2F" fill-rule="nonzero"></path><path fill="#A81433" d="M72.623 25.29h33.267v7.375H72.623z"></path><path d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z" fill="#A81433" fill-rule="nonzero"></path><g transform="translate(5.912 63.749)"><circle fill="#B31941" cx="8.86" cy="8.829" r="8.801"></circle><path fill="#931435" d="M8.362 17.63h.565v14.283h-.565z"></path></g><g transform="translate(30.125 59.243)"><path fill="#931435" d="M10.172 12.205h.845v24.213h-.845z"></path><circle fill="#B31941" cx="10.454" cy="10.516" r="10.417"></circle></g><g transform="translate(151.187 70.224)"><path fill="#931435" d="M6.667.901h.845v24.213h-.845z"></path><circle fill="#B31941" cx="7.089" cy="6.926" r="6.827"></circle></g><g transform="translate(184.69 59.807)"><path fill="#931435" d="M10.037 11.642h.845v24.213h-.845z"></path><circle fill="#B31941" cx="10.459" cy="10.516" r="10.417"></circle></g></g></svg>



                <div >

                    <h1 className={styles.searchBarHead}>World's Fastest Growing Hostel Chain</h1>

                </div>


                <div className={`${styles.searchWrraper} container `} >
                    <div className={`row ${styles.searchBar}`}>
                        <div className={`${styles.inputDiv} col-xl-6 col-lg-6  `}>
                            <fieldset className={styles.seFieldset}>

                                <input className={`${styles.seInput} ${styles.fieldBorder}`} type="text" placeholder="Search by city , hostel, or neighborhood" />

                            </fieldset>
                        </div>

                        <div className={`${styles.typeSelectDiv} col-xl-2 col-lg-2 `}>
                            <fieldset className={styles.seFieldset}>
                                <select className={`${styles.typeSelect} ${styles.fieldBorder}`}>
                                    <option value="All">All</option>
                                    <option value="Hostel">Hostel</option>
                                    <option value="PG">PG</option>
                                    <option value="Mess">Mess</option>

                                </select>
                            </fieldset>
                        </div>

                        <div className={`${styles.sSelectDiv} col-xl-2 col-lg-2 `}>
                            <fieldset className={``}>
                                <select className={`${styles.fieldBorder} ${styles.sSelect}`} >
                                    <option value="All">All</option>
                                    <option value="Boys">Boys</option>
                                    <option value="Girls">Girls</option>
                                </select>
                            </fieldset>
                        </div>

                        <div className={`${styles.searchWrrap} col-xl-2 col-lg-2  `}>
                            <button className={`${styles.search} `}> Search </button>

                        </div>

                    </div>

                </div>

                <svg width="212" height="93" xmlns="http://www.w3.org/2000/svg" className={`${styles.backImg2} img-fluid`}><g transform="translate(0 -31)" fill="none" fill-rule="evenodd" opacity=".6"><rect fill="#C11F3D" x="14.311" y="32.451" width="19.209" height="6.616" rx="3.308"></rect><rect fill="#C11F3D" x="165.943" y="48.731" width="11.338" height="6.616" rx="3.308"></rect><path d="M62.465 95.555H115.3v27.822H62.465V95.555zm149.313 28.424H.482l.14-.6h211.156v.6zM63.78 35.212h50.956v4.694H63.78v-4.694z" fill="#A81433" fill-rule="nonzero"></path><path fill="#880F2F" d="M114.736 35.212h26.043v4.694h-26.043z"></path><path fill="#880F2F" d="M114.736 39.905h22.808v83.474h-22.808z"></path><path fill="#B21737" d="M66.874 39.905h47.862v54.33H66.874z"></path><path fill="#880F2F" d="M57.587 90.017h57.15v6.292h-57.15z"></path><path d="M120.978 107.52h10.324v15.857h-10.324V107.52zm-3.426-58.042h17.176v3.471h-17.177v-3.471zm0 10.321h17.176v3.472h-17.177v-3.472zm0 10.325h17.176v3.47h-17.177v-3.47zm0 10.324h17.176v3.47h-17.177v-3.47z" fill="#A81433" fill-rule="nonzero"></path><path d="M73.353 49.478h34.722v3.471H73.353v-3.471zm0 10.321h34.722v3.472H73.353v-3.472zm0 10.324h34.722v3.472H73.353v-3.472zm0 10.325h34.722v3.47H73.353v-3.47z" fill="#880F2F" fill-rule="nonzero"></path><path fill="#A81433" d="M72.623 25.29h33.267v7.375H72.623z"></path><path d="M78.398 32.349h1.126v2.864h-1.126v-2.864zm20.595 0h1.126v2.864h-1.126v-2.864z" fill="#A81433" fill-rule="nonzero"></path><g transform="translate(5.912 63.749)"><circle fill="#B31941" cx="8.86" cy="8.829" r="8.801"></circle><path fill="#931435" d="M8.362 17.63h.565v14.283h-.565z"></path></g><g transform="translate(30.125 59.243)"><path fill="#931435" d="M10.172 12.205h.845v24.213h-.845z"></path><circle fill="#B31941" cx="10.454" cy="10.516" r="10.417"></circle></g><g transform="translate(151.187 70.224)"><path fill="#931435" d="M6.667.901h.845v24.213h-.845z"></path><circle fill="#B31941" cx="7.089" cy="6.926" r="6.827"></circle></g><g transform="translate(184.69 59.807)"><path fill="#931435" d="M10.037 11.642h.845v24.213h-.845z"></path><circle fill="#B31941" cx="10.459" cy="10.516" r="10.417"></circle></g></g></svg>
            
            </div>

        </>
    )
}

export default Search
