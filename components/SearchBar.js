import React from 'react'
import styles from '../styles/SearchBar.module.css'
import { Button } from 'reactstrap';



const SearchBar = () => {
    return (
        <>
            {/* search bar starts */}

            <div className={styles.searchDiv}>
                <h1 className={styles.searchBarHead}>World's Fasted Growing Hostel Chain</h1>
                <div className={styles.searchBar}>

                    <fieldset className={styles.seFieldset}>

                        <input className={styles.seInput} type="text" placeholder="Search by city , hostel, or neighborhood" />

                    </fieldset>

                    <fieldset className={styles.seFieldset}>

                        <input className={styles.seDate} type="date" min="2018-01-01" max="2019-01-01" />

                    </fieldset>

                    <fieldset className={styles.seFieldset}>

                        <Button className={styles.search}>Search</Button>

                    </fieldset>

                </div>

            </div>


            {/* search bar starts ends */}
        </>
    )
}

export default SearchBar