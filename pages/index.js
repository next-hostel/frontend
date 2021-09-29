import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import 'reactstrap';
import Carousel from 'react-elastic-carousel';


export default function Home() {

  const breakPoints = [

    { width: 200, itemsToShow: 1 },

    { width: 400, itemsToShow: 2 }

  ]

  const circle_breakpoints = [
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 900, itemsToShow: 6 },

  ]

  return (
    <>
      <section className="top-sec">


        <Navbar />
        <SearchBar />

      </section>

      <section className={`${styles.top_hos_div}`}>

        <Carousel breakPoints={breakPoints}>

          <div>
            <div className={styles.car_item}>
              <h1>hi</h1>
              <span>hello</span>
            </div>
          </div>

          <div>
            <div className={styles.car_item}>
              <h1>2</h1>
              <span>hello</span>

            </div>
          </div>

          <div>
            <div className={styles.car_item}>
              <h1>3</h1>
              <span>hello</span>

            </div>
          </div>

          <div>
            <div className={styles.car_item}>
              <h1>4</h1>
              <span>hello</span>

            </div>
          </div>





        </Carousel>

      </section>

      <section className={styles.cir_car_sec}>


        <div className={styles.cir_car_div}>

          <Carousel breakPoints={circle_breakpoints} showArrows={false} >

            <div className={styles.cir_car} >
              1
            </div>

            <div className={styles.cir_car} >
              2
            </div>

            <div className={styles.cir_car} >
              3
            </div>

            <div className={styles.cir_car} >
              4
            </div>

            <div className={styles.cir_car} >
              5
            </div>

            <div className={styles.cir_car} >
              6
            </div>

            <div className={styles.cir_car} >
              7
            </div>

          </Carousel>

        </div>



      </section>

      </>
  )
}
