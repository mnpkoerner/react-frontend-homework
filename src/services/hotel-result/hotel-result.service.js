import axios from 'axios';

//added a log for extra information
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
