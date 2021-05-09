import React, { useState } from 'react';
import hotelSortService from '../../services/hotel-sort/hotel-sort.service'
import hotelFilterService from '../../services/hotel-filter/hotel-filter.service'
import HotelList from '../HotelList/HotelList'
import SearchFailure from '../SearchFailure/SearchFailure'


export default function SearchControls({ hotels }) {

    //state variables to capture user input from the hotel name filter field and the sort dropdown
    const [sortValue, setSortValue] = useState('')
    const [filterValue, setFilterValue] = useState('')

    //information passes through to sortedHotelsByPrice every time the user types
    //or every time the user filters with the dropdown
    const filteredHotelsByName = hotelFilterService(hotels, filterValue)
    const sortedHotelsByPrice = hotelSortService(filteredHotelsByName, sortValue)

    //reset state values => return hotel list to unfiltered/unsorted
    const reset = () => {
        setSortValue('');
        setFilterValue('');
        console.log('reset')
    }

    return (
        <div className="content">


            <div className="filters">

                <label htmlFor="hotel-name-filter-input">Hotel name</label>
                <input
                    type="text"
                    className="input"
                    id="hotel-name-filter-input"
                    value={filterValue}
                    onChange={(event)=>setFilterValue(event.target.value)}/>

                <label htmlFor="hotel-price">Hotel name</label>
                <select
                    name="hotel-price-sort-dropdown"
                    className="select"
                    id="hotel-price-sort-dropdown"
                    value={sortValue}
                    onChange={(event) => setSortValue(event.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="ascending">Price low-to-high</option>
                    <option value="descending">Price high-to-low</option>
                </select>

                <button
                    className="button reset-button"
                    role="button"
                    id="reset-button"
                    onClick={() => reset()}>
                    Reset
                </button>

            </div>
            {/* If the filter yields no results, sortedHotelsByPrice will be an empty array (falsy) and we call the SearchFailure component */}
           { sortedHotelsByPrice.length ? <HotelList hotels={sortedHotelsByPrice} /> : <SearchFailure />}
        </div>

    )
}
