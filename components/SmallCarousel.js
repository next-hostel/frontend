import styles from '../styles/SmallCarousel.module.css';
import Carousel from 'react-elastic-carousel';


const SmallCarousel = () => {

    const carObject = ["Hostel", "Mess", "PG", "Blog", "Harsh", "Raman", "Pragati"];
    const breakPoints = [
        { width: 800, itemsToShow: 3 }
    ]


    return (
        <>
            

            <div className={`${styles.carousel} mob-car `}>

                <Carousel breakPoints={breakPoints} >



                    {
                        carObject.map((ele) => [
                            <div className="">
                                <div className={styles.carEle}></div>
                                <span>{ele}</span>

                            </div>
                        ]
                        )
                    }


                </Carousel>


            </div>


        </>
    )
}

export default SmallCarousel
