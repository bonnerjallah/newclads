import { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCouch, faFan, faKitchenSet, faTv, faUtensils, faWifi, } from "@fortawesome/free-solid-svg-icons"
import gallerystyles from "../styles/gallerystyles.module.css"

//Modals components
import HouseModal from '../components/HouseModal'
import BedRoomModal from '../components/BedRoomModal'
import KitchenModal from '../components/KitchenModal'
import BathRoomModal from "../components/BathRoomModal"
import LivingRoomModal from '../components/LivingRoomModal'
import Pricing from '../components/Pricing'

import Footer from "../components/Footer"


const Gallery = () => {

    //Modals
    const [openHouseModal, setOpenHouseModal] = useState(false)
    const [openBedRoomModal, setOpenBedRoomModal] = useState(false)
    const [openKetchenModal, setOpenKitchenModal] = useState(false)
    const [openBathRoomModal, setOpenBathRoomModal] = useState(false)
    const [openLivingRoomModal, setOpenLivingRoomModal] = useState(false)

    const handleOpenHouseModal = () => {
        setOpenHouseModal(true)
    }

    const handleOpenBedRoomModal = () => {
        setOpenBedRoomModal(true)
    }

    const handleOpenKitchenModal = () => {
        setOpenKitchenModal(true)
    }

    const handleOpenBathRoomModal = () => {
        setOpenBathRoomModal(true)
    }

    const handleLivingRoomModal = () => {
        setOpenLivingRoomModal(true)
    }

    return (
        <>
            <ScrollToTop />
            <div className={gallerystyles.mainContainer}>
                {/* <h1 className={gallerystyles.header} >
                    Gallery
                </h1> */}

                <div className={gallerystyles.mainWrapper} >
                    
                        <div className={gallerystyles.thecard} onClick={handleOpenHouseModal}>
                            <div className={`${gallerystyles.imageWrapperOne} ${gallerystyles.front}`}>
                                <img src="/Images/house/House1.jpg" alt="" className={gallerystyles.imageOne} />
                            </div>
                            <div className={gallerystyles.theback}>
                                <h2 className={gallerystyles.flipCarderBackHeader}>Appartment</h2>
                                <p>This third-floor modern two-bedroom, two bath apartment is fully furnished with...</p>
                                <ul>
                                    <li>Housekeeping (depending on the length of stay)</li>
                                    <li>Iron & Ironing board</li>
                                    <li>Furnished & decorated</li>
                                    <li>Air conditioning</li>
                                    <li>Flat-screen TV</li>
                                    <li>WiFi</li>
                                </ul>
                            </div>
                        </div>
                    
                        { openHouseModal && (<HouseModal closeHouseModal={setOpenHouseModal} />)}

                        <div className={gallerystyles.secondCard} onClick={handleOpenBedRoomModal}>
                            <div className={`${gallerystyles.imageWrapperTwo} ${gallerystyles.imageTwofront}`}>
                                <img src="/Images/house/PHOTO-9.jpg" alt="" className={gallerystyles.imageTwo} />
                            </div>
                            <div className={gallerystyles.imagetwoeback}>
                                <h2 className={gallerystyles.flipCarderBackHeader}>Bed Rooms</h2>
                                <ul>
                                    <li>Housekeeping (depending on the length of stay)</li>
                                    <li>Iron & Ironing board</li>
                                    <li>Furnished & decorated</li>
                                    <li>Air conditioning</li>
                                    <li>Flat-screen TV</li>
                                </ul>
                            </div>
                        </div>

                        {openBedRoomModal && (<BedRoomModal closeBedRoomModal={setOpenBedRoomModal}/>)}
                    

                        <div className={gallerystyles.thirdCard} onClick={handleOpenKitchenModal}>
                            <div className={`${gallerystyles.imageWrapperThree} ${gallerystyles.imageThreeFront} `}>
                                <img src="/Images/house/PHOTO-10.jpg" alt="" className={gallerystyles.imageThree} />
                            </div>
                            <div className={gallerystyles.imagethreeback}>
                                <h2 className={gallerystyles.flipCarderBackHeader}>Kitchen</h2>
                                <ul>
                                    <li>Full-sized Refrigerator & Stove</li>
                                    <li>Blender</li>
                                    <li>Cookware/dishes/utensils</li>
                                    <li>Microwave</li>
                                    <li>Rice cooker</li>
                                    <li>Toaster</li>
                                </ul>
                            </div>
                        </div>

                        {openKetchenModal && (<KitchenModal closeKitchenModal={setOpenKitchenModal} />)}

                        <div className={gallerystyles.forthCard} onClick={handleOpenBathRoomModal}>
                            <div className={`${gallerystyles.imageWrapperFour} ${gallerystyles.imageFourFront} `}>
                                <img src="/Images/house/PHOTO-11.jpg" alt="" className={gallerystyles.imageFour} />
                            </div>
                            <div className={gallerystyles.imageFourBack}>
                                <h2 className={gallerystyles.flipCarderBackHeader}>Bath Room</h2>
                                <ul>
                                    <li>Clean Towels</li>
                                    <li>Body Wash</li>
                                </ul>
                            </div>
                        </div>

                        {openBathRoomModal && (<BathRoomModal closeBathRoomModal={setOpenBathRoomModal} />)}
                    
                        <div className={gallerystyles.fifthCard} onClick={handleLivingRoomModal}>
                            <div className={`${gallerystyles.imageWrapperFive} ${gallerystyles.imageFiveFront} `}>
                            <img src="/Images/house/PHOTO-5.jpg" alt="" className={gallerystyles.imageFive} />
                            </div>
                            <div className={gallerystyles.imageFiveBack} >
                                <h2 className={gallerystyles.flipCarderBackHeader}>Living Room</h2>
                                <ul>
                                    <li>Furnished & decorated</li>
                                    <li>Flat-screen TV</li>
                                    <li>Wifi</li>
                                </ul>
                            </div>
                        </div>

                        {openLivingRoomModal && <LivingRoomModal closeLivingRoomModal={setOpenLivingRoomModal} />}
                </div>
            </div>

            <div className={gallerystyles.discriptionContainer}>
                <div className={gallerystyles.disWrapper}>
                    <h2>Apartment</h2>
                    <div className={gallerystyles.details}>
                        <p>2 guests</p>
                        <p>-2 bedrooms</p>
                        <p>-2 beds</p>
                        <p>-1 bath</p>
                    </div>

                    <div className={gallerystyles.offerWrapper}>
                        <p>What this place offers</p>
                        <div className={gallerystyles.iconWrapper}>
                            <div>
                                <p><span><FontAwesomeIcon icon={faWifi}  /></span> Wifi</p>
                                <p><span><FontAwesomeIcon icon={faTv} /></span> Flat Screen</p>
                                <p><span><FontAwesomeIcon icon={faKitchenSet} /></span> Cookware/Dishes</p>
                                <p><span><FontAwesomeIcon icon={faUtensils} /></span> Utensils</p>
                            </div>
                            <div>
                                <p><span><FontAwesomeIcon icon={faCouch} /></span> Furnished & Decorated</p>
                                <p><span><FontAwesomeIcon icon={faFan} /></span> Air conditioning</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Pricing />
                </div>

            </div>

            <div className={gallerystyles.buttonWrapper}>
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
            
        </>
    )
}

export default Gallery