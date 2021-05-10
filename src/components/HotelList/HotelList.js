import React, { useState } from 'react';
import HotelDetail from '../HotelDetail/HotelDetail'

//props passed into this component will be filtered/sorted in SearchControls
//regardless of what SearchControls does, this component will render a list of hotels
export default function HotelList({
    hotels
}) {

    //state variables to turn on HotelDetails and pass specific details into it
    const [seeDetails, setSeeDetails] = useState(false)
    const [hotelDetails, setHotelDetails] = useState('')


    //handleClick turns on the HotelDetails component, gives specific hotel data to a state variable, and passes it into HotelDetails
    const handleClick = (uniqueHotel) => {

        setSeeDetails(true)
        setHotelDetails(uniqueHotel)
    }

    return (
        <div>

            <div className="hotel-list">
                {hotels.map(hotel => (
                    <div className="hotel-card" key={hotel.id}>
                        <div
                            className="image"
                            style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})` }}>
                        </div>

                        <div className="hotel-details">
                            <div className="hotel-name">
                                {hotel.hotelStaticContent.name}
                            </div>
                            <div className="location">
                                {hotel.hotelStaticContent.neighborhoodName}
                            </div>
                        </div>

                        <div className="price-details">
                            <span className="price">
                                <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                                {hotel.lowestAveragePrice.amount}
                            </span>
                            <span className="rewards">
                                {hotel.rewards.miles} miles
                                </span>
                            <button
                                className="button select-button"
                                onClick={() => handleClick(hotel)}>
                                Select
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            {/* only renders if 'select' button is clicked on a hotel, if clicked, HotelDetails gets passed in all of the hotel's data */}
            {seeDetails ? <HotelDetail hotelDetails={hotelDetails}/>: <span></span>}

        </div>
    )
}
