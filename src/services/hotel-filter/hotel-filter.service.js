/**hotelFilterService takes in two arguments, the result of the API call to the DB and the filterValue caputured from user input
 * it the user types nothing, the function returns the value unchanged
 * if a single characters or sequence of characters match anything in the hotel.hotelStaticContent.name, it's returned as part of filterResults
 * if a character doesn't match, or if something is misspelled, the function will return an empty array
 */

export default function hotelFilterService(arrayToFilter, filterValue) {
    //once the user starts typing, the filter starts
    if (filterValue) {
        const filterResults = arrayToFilter.filter(hotel =>
            hotel.hotelStaticContent.name.toLowerCase().includes(filterValue.trim().toLowerCase())
        )
            return filterResults
    }
    //if the user provides no input to filter hotels by name, the function returns an unfiltered array
    else if (!filterValue) {
        return arrayToFilter
    }
}
