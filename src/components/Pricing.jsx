import pricingModalStyles from "../styles/pricingModalStyles.module.css"


const Pricing = () => {
    return (
        <div className={pricingModalStyles.priceWrapper}>
            <h3>$<span>100</span> night</h3>

            <div className={pricingModalStyles.dateWrapper}>
                <div className={pricingModalStyles.datePickersWrapper}>
                    <div>
                        <h6>CHECK-IN</h6>
                        <label htmlFor="checkInDate"></label>
                        <input type="date" name="checkIn" id="checkInDate" />
                    </div>
                    <div>
                        <h6>CHECL-OUT</h6>
                        <label htmlFor="checkOutDate"></label>
                        <input type="date" name="checkOut" id="checkOutDate" />
                    </div>
                </div>
                <div className={pricingModalStyles.guestWrapper}>
                <label htmlFor="guests">Guests: 
                    <select id="guests">
                        <option value="">

                        </option>
                        <option value="adults">
                            Adults (Age 13+)
                        </option>

                        <option value="children">
                            Children (Age 0-12)
                        </option>
                    </select>
                </label>

                    
                </div>
                
            </div>
            <div className={pricingModalStyles.reserveBttnWrapper}>
                <button>Reserve</button>
                <p>You won't be charged yet</p>
            </div>

            <div className={pricingModalStyles.pricingAmount}>
                <div>
                    <p>$100 X 5 nights</p>
                    <p>Cleaning fee</p>
                    <p>Airbnb service fee</p>
                </div>
                <div>
                    <p>$500</p>
                    <p>$149</p>
                    <p>$131</p>
                </div>
            </div>

            <div style={{display:'flex', justifyContent:"space-between", marginTop:"1rem"}}>
                <p style={{fontWeight: "bold", fontSize: "1.2rem"}}>Total before taxes</p>
                <p><span>$</span>1,200</p>
            </div>
        </div>
)
}

export default Pricing