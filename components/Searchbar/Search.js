import styles from './Search.module.css'


const Search = () => {
    return (
        <>
            <div className={`${styles.searchDiv}  `}>



                <div >

                    <h1 className={styles.searchBarHead}>World's Fasted Growing Hostel Chain</h1>

                </div>


                <div className={`${styles.searchWrraper} container `} >
                    <div className={`row ${styles.searchBar}`}>
                        <div className={`col-xl-6  col-md-12   `}>
                            <fieldset className={styles.seFieldset}>

                                <input className={`${styles.seInput} ${styles.fieldBorder}`} type="text" placeholder="Search by city , hostel, or neighborhood" />

                            </fieldset>
                        </div>

                        <div className={`col-xl-2 col-md-6 `}>
                            <fieldset className={styles.seFieldset}>
                                <select className={`${styles.typeSelect} ${styles.fieldBorder}`}>
                                    <option value="All">All</option>
                                    <option value="Hostel">Hostel</option>
                                    <option value="PG">PG</option>
                                    <option value="Mess">Mess</option>

                                </select>
                            </fieldset>
                        </div>

                        <div className={` col-xl-2 col-md-6  `}>
                            <fieldset className={``}>
                                <select className={`${styles.fieldBorder} ${styles.sSelect}`} >
                                    <option value="All">All</option>
                                    <option value="Boys">Boys</option>
                                    <option value="Girls">Girls</option>
                                </select>
                            </fieldset>
                        </div>

                        <div className={`${styles.searchWrrap} col-xl-2  col-12 `}>
                            <button className={`${styles.search} `}> Search </button>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Search
