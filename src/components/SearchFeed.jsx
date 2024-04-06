import {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import {useParams} from 'react-router-dom';

import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data?.items))
    
    
  }, [searchTerm])
  

  return (
    <Box p={2} sx={{ml: 1, overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
        Results for: <span style={{color: '#F31503'}}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed