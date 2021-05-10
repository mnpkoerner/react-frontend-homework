import axios from 'axios';

//added a log for extra information about the error if one occurs
class HotelResultService {
    get() {
        return axios
            .get('http://localhost:8080/rest/rates')
            .then(response => response.data)
            .catch((error) => {console.log(error)})
    }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
