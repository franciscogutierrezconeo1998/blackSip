import axios from 'axios';
import env from '../environment'

export const __GetProducts = ()=>{
    let url =  `${env.GET_PRODUCTS}`
    return axios.get(url);
}