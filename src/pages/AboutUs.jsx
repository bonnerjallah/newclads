import Footer from "../components/Footer";

import aboutusstyles from "../styles/aboutusstyles.module.css"

import ScrollToTop from "../components/ScrollToTop";


const AboutUs = () => {
    return (
        <div className={aboutusstyles.mainContainer}>
            <ScrollToTop />
            <main>
                <h1 className={aboutusstyles.header}>
                    About Us
                </h1>

                <section>
                    <div className={aboutusstyles.historyFirstSection}>
                        <img src="/Images/image3.png" alt="" width={300} height={400} className={aboutusstyles.firstImage} />
                        <p className={aboutusstyles.firstLetter}>
                        The Davies family has held ownership of the CLAD Homestead for over a century, passing it down through five successive generations. Originally acquired by Thomas and Elizabeth Davies upon their settlement in Liberia, Thomas, a contractor who immigrated via Sierra Leone, purchased the property. After Thomas passed away, Elizabeth bequeathed the estate to their sole biological son, Claudius L. A. Davies, fondly known as C.L. Abiose Davies.
                        </p>
                        
                    </div>
                    <div className={aboutusstyles.historySecondSection}>
                        <img src="/Images/image5.jpg" alt="" width={300} height={400} className={aboutusstyles.grandpaImage} />
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p className={aboutusstyles.firstLetter}>
                                For over a century, the CLAD Homestead has remained within the Davies family, passing through five successive generations.  Originally acquired by Thomas and Elizabeth Davies upon their settlement in Liberia.Thomas, a contractor, built a two-story framed house where he and his wife lived until his death.  Upon Thomas's passing, Elizabeth bequeathed the estate to their sole biological son, affectionately known as C.L. Abiose Davies.
                            </p>
                            <p>
                                This property is where C.L. Abiose Davies and his wife, Catherine O. Davies, raised their five children: Claudia, Thomas, Catherine, Reginal, and Claudius. Subsequently, in 1976, the land was leased to the Eid family (Eagle Electric), who established and grew a thriving building supply business within the city.
                            </p>
                        </div>
                        
                    </div>
                    <div className={aboutusstyles.lastSectionWrapper}>
                        <img src="/Images/image12.png" alt="" width={300} height={400} className={aboutusstyles.lastImage} />
                        <p className={aboutusstyles.firstLetter}> 
                            Upon C.L. Abiose Davies' demise, he passed the property on to his five surviving children, with the stipulation that the estate remain within the family lineage.  As the family expanded and the potential heirs (including great-grandchildren) increased, C.L. Abiose Davies' heirs collectively decided to designate their successors and transfer ownership while they were alive, preempting any future confusion. 
                        </p>
                    </div>
                    <div style={{padding: '3rem', margin : "-2rem"}}>
                        <img src="/Images/family.jpg" alt="" height={300} />
                    </div>
                </section>

            </main>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default AboutUs