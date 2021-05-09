import React from 'react'

export default function HotelDetail ({hotelDetails}) {
    return(
        <div className="hotel-details-card">
                    <h1>{hotelDetails.hotelStaticContent.name}</h1>
                    <div
                            className="image"
                            style={{ backgroundImage: `url(${hotelDetails.hotelStaticContent.mainImage.url})` }}>
                    </div>

        </div>
    )
}
