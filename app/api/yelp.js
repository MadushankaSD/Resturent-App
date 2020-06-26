import axios from 'axios'

export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'87bd7183570d7be0fe6ca6267ece35c3'
    }
});