//HotelSortService takes in the hotel list from the API and the direction for sorting from the user
//by using the built in .sort() method, the function sorts hotels at lowestAveragePrice
//This sort function makes the assumtion that the values at rating and amount will always be numbers

export default function hotelSortService(arrayToSort, typeOfSort) {

    const hotelSort = arrayToSort.sort((a, b) => {

        switch (typeOfSort) {
            case 'descending':
                return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
            case 'ascending':
                return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
            case 'recommended':
                return b.hotelStaticContent.rating - a.hotelStaticContent.rating;

            default:
                //if the function is called without user input, the input array is returned unsorted
                return arrayToSort
        }
    })

    return hotelSort
}
