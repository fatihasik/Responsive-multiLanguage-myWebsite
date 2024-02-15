import React from 'react';
import { useSelector } from 'react-redux';
import tourism from '../Assets/tourism.gif';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useMediaQuery } from '@mui/material';

function Home() {
  const language = useSelector((state) => state.language);
  const translations = useSelector((state) => state.translations);
  const isMobile = useMediaQuery('(max-width: 600px)'); // 600px'ten küçük ekranlar için mobil

  return (
    <Card sx={{
      maxWidth: isMobile ? 345 : 400, // Mobil ve web için farklı genişlik
      textAlign: isMobile ? 'center' : 'left', // Mobil ve web için farklı metin hizalama
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={isMobile ? 140 : 200} // Mobil ve web için farklı resim yüksekliği
          image={tourism}
          alt="green iguana"
          sx={{ textAlign: 'center' }} // Resmi ortala
        />
        <CardContent>
          <Typography gutterBottom variant={isMobile ? 'h5' : 'h4'}>
            {translations[language].whyTurkeyHead}
          </Typography>
          <Typography variant={isMobile ? 'body2' : 'body1'} color="text.secondary">
            {translations[language].whyTurkey}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Home;
