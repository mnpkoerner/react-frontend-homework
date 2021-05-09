import hotelFilterService from './hotel-filter.service';
import testObjectFilter from '../testObjectFilter'

//all test data and results exist in testObjectFilter
//mockApi is an abbreviation of the data called from the RocketMiles API
//tests for checking possible user inputs for hotel name
describe('HotelFilterService', () => {

    it('is called with one word that matches', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, 'axe')).toStrictEqual(testObjectFilter.testOne);
    });
    it('is called with one letter that matches', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, 'X')).toStrictEqual(testObjectFilter.testTwo);
    });
    it('is called with matching letters, but letters out of order', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, 'ex')).toStrictEqual(testObjectFilter.testThree);
    });
    it('is called with matching letters and numbers', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, 'Super 8 M')).toStrictEqual(testObjectFilter.testFour);
    });
    it('is called with too many spaces after the name', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, 'Minn           ')).toStrictEqual(testObjectFilter.testFive);
    });
    it('is called when a chacter is not present', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, 'Q')).toStrictEqual(testObjectFilter.testSix);
    });
    it('is called with only spaces', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, '         ')).toStrictEqual(testObjectFilter.mockApi);
    });
    it('is called with a name misspelled', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, 'Jilton')).toStrictEqual(testObjectFilter.testEight);
    });
    it('is called with and empty string', () => {
        expect(hotelFilterService(testObjectFilter.mockApi, '')).toStrictEqual(testObjectFilter.mockApi);
    });
    it('is called without user input', () => {
        expect(hotelFilterService(testObjectFilter.mockApi)).toStrictEqual(testObjectFilter.mockApi);
    });


});
