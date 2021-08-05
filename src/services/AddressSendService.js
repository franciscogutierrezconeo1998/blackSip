import axios from 'axios';
import env from '../environment'

export const __GetCodePostal = (code)=>{
    let url =  `${env.GET_DATA_CODE_POSTAL}/${code}`
    return axios.get(url);
}

export const __SendContact = async(data)=>{
    try{
        const res = await  axios.post(env.POST_DATA_CONTACT,data);
        return res;

    } catch (error) {
        throw error 
    }
}