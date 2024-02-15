import React from 'react';
import { useSelector } from 'react-redux';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function AppbarItemsMobile() {
  const language = useSelector((state) => state.language);
  const translations = useSelector((state) => state.translations);
  const navigate=useNavigate();
  return (
    <Box >
      <List >
        <ListItem disablePadding sx={{flexDirection: 'column' }}>
          <ListItemButton onClick={()=>navigate('/')}>
            {translations[language].appBar}
          </ListItemButton>
          <ListItemButton onClick={()=>navigate('/plan')}>
            {translations[language].appBarPT}
          </ListItemButton>
          <ListItemButton onClick={()=>navigate('/branches')}>
            {translations[language].appBarB}
          </ListItemButton>
          <ListItemButton onClick={()=>navigate('/contact')}>
            {translations[language].appBarContact}
          </ListItemButton>
          
        </ListItem>
      </List>
    </Box>
  );
}

export default AppbarItemsMobile;
