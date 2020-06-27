import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 1EVkvgpfdWzNX5QtCdSNIWIa30K4CqiIlpXxRgtlj2XOGFYJwgSDnpeOfrfacjUVisxLooeKa76R8I80hAhvsZAut-my5MpDuWAN_sZbk0xuDPsb-Js20uLJKtj2XnYx',
    }
});