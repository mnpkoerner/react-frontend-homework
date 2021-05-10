import React from 'react'

//HotelDetail takes some details aout a specific hotel and renders it in its own card
//a second 'Yes, book it!' allows the user to confirm that they want the hotel
//if they click the select button from a different hotel, the displayed information will change
export default function HotelDetail({ hotelDetails }) {

    return (
        <main className="hotel-details-card">

            <header className="details-header">
                <h1>{hotelDetails.hotelStaticContent.name}</h1>

                <h3>{hotelDetails.hotelStaticContent.address.line1}</h3>

                <h3>{hotelDetails.hotelStaticContent.address.city}, {hotelDetails.hotelStaticContent.address.stateName} {hotelDetails.hotelStaticContent.address.zipCode}</h3>
            </header>

            <hr></hr>
            
            <section className="hotel-details-card-description">
                <p>{hotelDetails.hotelStaticContent.description}</p>
            </section>

            <section className="amenities">
                <p><span className="bold-type">Ammenities include:</span>
                    {hotelDetails.hotelStaticContent.amenities.map((amenity) => {
                        return (
                            <span key={amenity.name}> {amenity.name}, </span>
                        )
                    }
                    )}
                and all the comforts of home.</p>
            </section>

            <section className="button-panel hotel-card">
                <button
                    className="button select-button card-button"
                    role="button"
                    id="book-hotel-button"
                    onClick={() => console.log(`hotel ${hotelDetails.id} selected`)}>
                    Yes, book it!
                </button>
            </section>

        </main>
    )
}
