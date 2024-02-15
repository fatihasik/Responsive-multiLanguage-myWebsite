import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FaTiktok } from "react-icons/fa";
import footer from '../App.css'
function Footer() {
  const language = useSelector((state) => state.language);
  const translations = useSelector((state) => state.translations);

  return (
    <div className='footer'>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          
            <Typography variant="body1">{translations[language].footer}</Typography>
         
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}spacing={4}>
            <InstagramIcon  fontSize="large"/>
            <FacebookIcon  fontSize="large"/>
            <YouTubeIcon  fontSize="large"/>
            <XIcon fontSize="large" />
            <FaTiktok style={{fontSize:'35px'}} />

          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Footer