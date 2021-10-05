import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
// import SearchBar from '../components/Searchbar';
import 'reactstrap';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';
import SmallCarousel from '../components/SmallCarousel';
import Footer from '../components/Footer';


export default function Home() {

  const breakPoints = [

    { width: 400, itemsToShow: 1 },

    { width: 400, itemsToShow: 2 }

  ]

  const circle_breakpoints = [
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 900, itemsToShow: 6 },

  ]

  return (
    <>


      <section className={styles.hero_sec}>

        <div className={styles.hero_image}>


          <div className={styles.nav_div}>


            <Navbar />

            <SmallCarousel />


            {/* <SearchBar /> */}


          </div>

          <div className={styles.hero_text}>
            <h1 className={styles.hone}>Meet the World</h1>
            <p className={styles.sub_text}>36,000 properties, 178 countries • Over 13 million verified guest reviews • 24/7 customer service</p>



            <div className={styles.topnav}>
              <form className={styles.search_form} action="">
                <button type="submit"><i className="fa fa-search"></i></button>
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>


            <br />


            <button className={styles.go} type="submit ">  Let's Go!</button>
          </div>
        </div>

      </section>

      <section className={`${styles.top_hos_div}`}>

        <Carousel breakPoints={breakPoints} pagination={false}>


          <div className={styles.car_item}>

            <div className={styles.img_div}>

              <Image className={`${styles.car_img} `} src="/images/img.jpg" width={606} height={220} layout="responsive" />

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

              <Image className={`${styles.car_img} `} src="/images/img1.jpg" width={606} height={220} layout="responsive" />

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

              <Image className={`${styles.car_img} `} src="/images/img2.jpg" width={606} height={220} layout="responsive" />

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

              <Image className={`${styles.car_img} `} src="/images/img3.jpg" width={606} height={220} layout="responsive" />

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

          <Carousel breakPoints={circle_breakpoints} showArrows={true} pagination={false} >

            <div className={styles.cir_car} >

              <Image src="/images/cirImg1.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <Image src="/images/cirImg2.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <Image src="/images/cirImg3.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <Image src="/images/cirImg4.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div >

            </div>

            <div className={styles.cir_car} >

              <Image src="/images/cirImg5.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <Image src="/images/cirImg6.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>

            <div className={styles.cir_car} >

              <Image src="/images/cirImg7.jpg" className={styles.cir_car_img} width={125} height={127} />

              <div className={styles.locName}>
                <h6>Location name</h6>
                <p>No. of Hostel</p>
              </div>

            </div>



          </Carousel>

        </div>



      </section>

      <section>
        <Footer />
      </section>


    </>
  )
}
