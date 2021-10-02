import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import SearchBar from '../components/Searchbar';
import 'reactstrap';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';


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


          <div className={styles.car_item}>

            <div className={styles.img_div}>

              <Image className={styles.car_img} src="/images/img.jpg" width={606} height={220} />

            </div>

            <div className={styles.detail}>
              <div>
                <h6>Hostel Name</h6>
                <p>Hostel Address</p>

              </div>

              <div>
                <h5>Price</h5>
                <button className={`${styles.view_detail} btn btn-danger btn-sm`}>View Detail</button>
              </div>
            </div>
          </div>


          <div className={styles.car_item}>

            <div className={styles.img_div}>

              <Image className={styles.car_img}src="/images/img1.jpg" width={606} height={220} />

            </div>

            <div className={styles.detail}>
              <div>
                <h6>Hostel Name</h6>
                <p>Hostel Address</p>

              </div>

              <div>
                <h5>Price</h5>
                <button className={`${styles.view_detail} btn btn-danger btn-sm`}>View Detail</button>
              </div>

            </div>
          </div>

          <div className={styles.car_item}>

            <div className={styles.img_div}>

              <Image className={styles.car_img}src="/images/img2.jpg" width={606} height={220} />

            </div>
            <div className={styles.detail}>
              <div>
                <h6>Hostel Name</h6>
                <p>Hostel Address</p>

              </div>

              <div>
                <h5>Price</h5>
                <button className={`${styles.view_detail} btn btn-danger btn-sm`}>View Detail</button>
              </div>
            </div>
          </div>

          <div className={styles.car_item}>

            <div className={styles.img_div}>

              <Image className={styles.car_img}src="/images/img3.jpg" width={606} height={220} />

            </div>


            <div className={styles.detail}>
              <div>
                <h6>Hostel Name</h6>
                <p>Hostel Address</p>

              </div>

              <div>
                <h5>Price</h5>
                <button className={`${styles.view_detail} btn btn-danger btn-sm`}>View Detail</button>
              </div>
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
