import axios from 'axios' ;


export const BASE_URL = 'https://youtube-v31.p.rapidapi.com' ;

const options = {
   url: BASE_URL,
  params : {
     maxResults : '50' 
  } ,
  headers : {
     "X-RapidAPI-Key" : '3b7b7b332dmsh3ef58b1c809f04dp1640c7jsn567c0b6f7db6',
     'X-RapidAPI-HOST' : 'youtube-v31.p.rapidapi.com'
  }

} ;


export const fetchFromAPI =  async (url) => { 
    const {data} = await axios.get(`${BASE_URL }/${url}`  , options) ;

    return data ;
}