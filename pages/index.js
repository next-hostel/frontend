import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Carousel, { consts } from 'react-elastic-carousel';
import SmallCarousel from '../components/SmallCarousel';
import Footer from '../components/Footer';
import Search from '../components/Searchbar/Search';


export default function Home() {

  const breakPoints = [

    { width: 400, itemsToShow: 1 },

    { width: 700, itemsToShow: 2 }

  ]

  const circle_breakpoints = [
    { width: 300, itemsToShow: 1 },
    { width: 500, itemsToShow: 4 },
    { width: 900, itemsToShow: 6 },

  ]

  function myArrow ({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <i className={`${styles.leftArrow} fas fa-long-arrow-alt-left`}></i> : <i className={`${styles.rightArrow} fas fa-long-arrow-alt-right`}></i>
    return (
      <button onClick={onClick} disabled={isEdge} className={styles.myArrow}>
        {pointer}
      </button>
    )
  }

  return (
    <>
      <div className={styles.nav_div}>

        <Navbar />

        <SmallCarousel />

      </div>

      <div className="">
        <Search />
      </div>






      <section className={`${styles.top_hos_div}`}>

        <Carousel breakPoints={breakPoints} showArrows={true} pagination={false} renderArrow={myArrow}>


          <div className={styles.car_item}>

            <div className={styles.img_div}>

              <img className={`${styles.car_img} img-fluid `} src="/images/img3.jpg" />

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

              <img className={`${styles.car_img} img-fluid `} src="/images/img1.jpg" />

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

              <img className={`${styles.car_img} img-fluid `} src="/images/img2.jpg" />

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

              <img className={`${styles.car_img} img-fluid `} src="/images/img3.jpg" />

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

        <h1>Top destinations in India</h1>


        <div className={styles.cir_car_div}>

          <Carousel breakPoints={circle_breakpoints} showArrows={false} pagination={false} >

            <div className={styles.cir_car} >

              <img src="/images/cirImg1.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <img src="/images/cirImg2.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <img src="/images/cirImg3.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <img src="/images/cirImg4.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div >

            </div>

            <div className={styles.cir_car} >

              <img src="/images/cirImg5.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <img src="/images/cirImg6.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <img src="/images/cirImg7.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>



          </Carousel>

        </div>


      </section>

      <section className={styles.commingSoon}>

        <div className="container">
          <div className={`row`}>

            <div className={`col-6`}>
              <img src="/images/commingSoon.png" alt="Comming Soon" width="680" height="380" />
            </div>

            <div className={`col-6`}>

              <h2>World's leading chain of hotels and homes</h2>
              <p>More Destinations. More Ease. More Affordable.</p>

              <p>

                <h1>35 </h1>Countries <h1>/</h1> <h1>157,000+ </h1>Hotels & Homes

              </p>


            </div>

          </div>

        </div>
      </section>

     


      <section>
        <Footer />
      </section>

    </>
  )
}