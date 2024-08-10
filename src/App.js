import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom' ;
import {Box} from '@mui/material' ;

import Feed from './Components/Feed' ;
import Navbar from './Components/Navbar' ;
import ChannelDetail from './Components/ChannelDetail'
import SearchFeed from './Components/SearchFeed' ;
import VideoDetail from './Components/VideoDetail' ;
import SearchBar from './Components/SearchBar.jsx' ;

const App = () => {
  return (
     <BrowserRouter>
       <Box sx={{backgroundColor : '#000'}}>
         <Navbar/>
         <Routes>
           <Route path="/" exact element={<Feed />} />

           <Route path="/video/:id" element={<VideoDetail />} />

           <Route path="/channel/:id" element={<ChannelDetail />} />

           <Route path="/search/:searchTerm" element={<SearchFeed />} />

          </Routes>  
       </Box>
    </BrowserRouter>
  )
}

export default App
//RAFCE FOR BOILER CODE 