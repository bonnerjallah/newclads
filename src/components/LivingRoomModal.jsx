import {useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"

import modalsstyles from "../styles/modalsstyles.module.css"


import PHOTO5 from "../assets/PHOTO-5.jpg"
import PHOTO7 from "../assets/PHOTO-7.jpg"
import PHOTO8 from "../assets/PHOTO-8.jpg"

const Images = [PHOTO5, PHOTO7, PHOTO8]

//ImageSlider
const ImageSlider = ({imageUrls}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const showPrevImage = () => {
        setCurrentIndex(index => {
            if(index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    const showNextImage = () => {
        setCurrentIndex(index => {
            if(index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div style={{width: "100%", height: "100%", margin: " 0 auto" }} >
            <div style={{ height: "90%", width: "100%", position:"relative", overflow: "hidden"}}>
                <div style={{width: "100%", height: "100%", display: "flex"}} >
                    {imageUrls.map(urlElem => (
                        <img key={urlElem} src={ urlElem} className={modalsstyles.imageItSelf} style={{translate: `${-100 * currentIndex}%`}}/>
                    ))}
                </div>
                <button className={modalsstyles.circleLeft} onClick={showPrevImage}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </button>
                <button className={modalsstyles.circleRight} onClick={showNextImage} >
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />   
                </button>
            </div>
            <div style={{backgroundColor: "rgb(0,0,0,.1)", height:"4rem", display:"flex", justifyContent: "center", alignItems: "center" }}>
                {imageUrls.map((elem, index) => (
                    <button onClick={() => setCurrentIndex(index)} className={modalsstyles.sliderButton}>{ <img key={index} src={elem} style={{width:"100%", height:"100%", borderRadius: "50%"}} /> }</button>
                ))}
            </div>
        </div>
    )

}



const LivingRoomModal = ({closeLivingRoomModal}) => {
    return (
        <div className={modalsstyles.mainContainer} >
            <div className={modalsstyles.ImagesliderContainer}>
                <ImageSlider imageUrls={Images} />
            </div>
            <div className={modalsstyles.closeModalBttn} onClick={() => {closeLivingRoomModal(false)}}>
                X
            </div>
        </div>
    )
}

export default LivingRoomModal