import React from 'react'
import styles from '../styles/Searchbar.module.css'
import { Button } from 'reactstrap';



const SearchBar = () => {
    return (
        <>
            {/* search bar starts */}

            <div className={`${styles.searchDiv} `}>
                <div className={``}>

                    <h1 className={styles.searchBarHead}>World's Fasted Growing Hostel Chain</h1>

                </div>
                <div className={`${styles.searchBar}  `}>

                    <div>
                        <fieldset className={styles.seFieldset}>

                            <input className={styles.seInput} type="text" placeholder="Search by city , hostel, or neighborhood" />

                        </fieldset>
                    </div>

                    <div>
                        <fieldset className={styles.seFieldset}>

                            <input className={styles.seDate} type="date" min="2018-01-01" max="2019-01-01"  />

                        </fieldset>
                    </div>

                    <div>
                        <fieldset className={styles.seFieldset}>

                            <button className={`${styles.search} btn btn-primary `}> Search </button>

                        </fieldset>
                    </div>

                </div>

            </div>


            {/* search bar starts ends */}
        </>
    )
}

export default SearchBar
