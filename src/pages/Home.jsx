import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";

import homestyles from '../styles/homestyles.module.css'
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";




const Home = () => {


    return (
        <div className={homestyles.mainContainer} >
            <ScrollToTop />
            <div className={homestyles.heroSectionWrapper}  >
                <h2  className={homestyles.slidein} >
                    <span className={homestyles.fastflicker }>C</span>LAD<span className={homestyles.fastflicker }>'</span>
                    <span>S</span>
                    
                </h2>
                <h2  className={homestyles.place }>
                    <span>P</span>
                    <span className={homestyles.fastflicker }>LA</span>
                    <span>C</span>
                    <span className={homestyles.flicker}>E</span>

                </h2>
                {/* <p   className={homestyles.meets}>Where elegance meets experience</p> */}

                <img src="/Images/house/House1.jpg" alt=""  className={homestyles.houseImage}  />
            </div>

            <hr className={homestyles.linebrk}/>

            <main>
                <div>
                    <h2 className={homestyles.header}>
                        Welcome !!! 
                    </h2>
                </div>
                <p className={[homestyles.welcome, homestyles.paragraphOne].join(' ')}>
                    Welcome to CLAD’s place! This third-floor modern two-bedroom, two bath apartment is fully furnished and nestled in the center of Monrovia. CLADs is just minutes away from the beach, the American Embassy, grocery stores, fun restaurants, and other attractions.  Fully equipped kitchen (with a full-size Refrigerator, Gas stove, Blender, Microwave, Toaster, and Rice Cooker) to make you feel right at home.
                </p> 

                <p className={[homestyles.welcome, homestyles.paragraphTwo].join(' ')}>
                    Your stay at CLADs will be a luxurious one.  We look forward to welcoming you to this city retreat and hope that you experience a little bit of luxury and a good dose of fun and relaxation for the body, mind, and soul!
                </p>

            </main>

            <div className={homestyles.gallaryContainer}>
                <div className={homestyles.galleryHeaderWrapper}>
                    <h2 style={{fontSize: "1.7rem"}} className={homestyles.header}>
                        Highlights 
                    </h2>
                </div>
                <div className={homestyles.gallery}>
                    <NavLink to="/Gallery">
                        <div className={homestyles.imgbox}><h3>Bed Room</h3></div>
                    </NavLink>
                    <NavLink to="/Gallery">
                        <div className={homestyles.imgbox}><h3>Kitchen</h3></div>
                    </NavLink>
                    <NavLink to="/Gallery">
                        <div className={homestyles.imgbox}><h3>Living Room</h3></div>
                    </NavLink>
                    <NavLink to="/Gallery">
                        <div className={homestyles.imgbox}><h3>Bath Room</h3></div>
                    </NavLink>
                </div>
            </div>

            <hr className={homestyles.linebrk}/>

            <div className={homestyles.ourServicesWrapper}>
                <h2 className={homestyles.header}>
                    Our Services
                </h2>
                <p className={[homestyles.welcome, homestyles.sevParagraphOne].join(' ')}>
                We provide modern, clean and safe short term rentals for business professionals and vacationers alike. No matter how you identify, our top-notch skills ensure you get the best experience possible. It’s what we love to do.
                </p>

                <p className={[homestyles.welcome, homestyles.svcParagraphTwo].join(' ')}>
                If you have questions about availabilities, or would like to make any special requests, trust us to cater to your needs to the best of our ability. We make sure you feel confident and satisfied every step of the way.  
                </p>
            </div>



            <div className={homestyles.buttonWrapper}>

                <NavLink to="/ContactUs">
                    <button>Contact us</button>
                </NavLink>
                
                <NavLink>
                    <button>Book A Stay</button>
                </NavLink>
                
            </div>
            

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home