import React from 'react'
import { useState , useEffect } from 'react' ;
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material' ; 

import ChannelCard from './ChannelCard';
import Videos from './Videos' ;
import {fetchFromAPI} from '../utils/fetchFromAPI' ;
const ChannelDetail = () => {
  const [channelDetail ,setChannelDetail] = useState(null) ;  
  const {id} = useParams() ;
  console.log(channelDetail , videos) ;
  const[videos , setVideos] = useState([]) ;


   useEffect (()=>{ 
      fetchFromAPI(`channels?part=snippet&id=${id}`).then  ((data)=> setChannelDetail(data?.items[0])) ;


      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then  ((data)=> setVideos(data?.items)) ;


    } , [id])
  return (
    <Box minHeight="95vh">
       <Box>
          <div style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,8,1) 100%, rgba(0,212,255,1) 100%)' , zIndex:10, height:'300px' 
          }}
           />
          <ChannelCard  channelDetail={channelDetail} marginTop='-93px' />
       </Box>
       <Box display="flex" p ="2">
            <Box sx={{ mr: { sm: '100px' } }}/>
              <Videos videos={videos} />
            </Box>
       </Box>  
  );
};

export default ChannelDetail
