import hotelSortService from './hotel-sort.service';
import testObjectSort from '../testObjectSort'

//all test data and results exist in testObjectSort
//mockApi is an abbreviation of the data called from the RocketMiles API
//tests for sorting dropdown menu ascending, descending, recommended, and no selection

describe('HotelSortService', () => {

    it('sorts hotel prices decending from highest price to lowest price', () => {
        expect(hotelSortService(testObjectSort.mockApi, 'descending')).toStrictEqual(testObjectSort.testSortDescending);
    });

    it('sorts hotel prices ascending from lowest price to highest price', () => {
        expect(hotelSortService(testObjectSort.mockApi, 'ascending')).toStrictEqual(testObjectSort.testSortAscending);
    });

    it('sorts hotel prices descending from highest rating to lowest rating', () => {
        expect(hotelSortService(testObjectSort.mockApi, 'recommended')).toStrictEqual(testObjectSort.testSortRecommended);
    });

    it('is called without user input on sort method', () => {
        expect(hotelSortService(testObjectSort.mockApi)).toStrictEqual(testObjectSort.mockApi);
    });


});
