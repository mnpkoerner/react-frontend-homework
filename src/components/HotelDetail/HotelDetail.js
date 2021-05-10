import React from 'react'

export default function HotelDetail({ hotelDetails }) {
    return (
        <main className="hotel-details-card">
            <header className="details-header">
                <h1>{hotelDetails.hotelStaticContent.name}</h1>

                <h3>{hotelDetails.hotelStaticContent.address.line1}</h3>

                <h3>{hotelDetails.hotelStaticContent.address.city}, {hotelDetails.hotelStaticContent.address.stateName} {hotelDetails.hotelStaticContent.address.zipCode}</h3>
            </header>

            <main className="hotel-details-card-description">
                <p>{hotelDetails.hotelStaticContent.description}</p>
            </main>
            
            <section className="amenities">
                <p><span className="bold-type">Ammenities include:</span>
                    {hotelDetails.hotelStaticContent.amenities.map((amenity) => {
                        return (
                            <span> {amenity.name}, </span>
                        )
                    }
                    )}
                and all the comforts of home.</p>
            </section>
            <section className="hotel-details-pandp">

            </section>
        </main>
    )
}
