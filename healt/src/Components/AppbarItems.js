import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AppbarItems() {
  const language = useSelector((state) => state.language);
  const translations = useSelector((state) => state.translations);

  // Make sure translations is an object, not a function
  const navigate=useNavigate();

  return (
    
    <div >
      <List>
        
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>navigate('/')} >
            {translations[language].appBar}
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}onClick={()=>navigate('/plan')}>
            {translations[language].appBarPT}
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}onClick={()=>navigate('/branches')}>
            {translations[language].appBarB}
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}onClick={()=>navigate('/contact')}>
            {translations[language].appBarContact}
            </ListItemButton>
            
          </ListItem>
        
      </List>
    </div>
  );
}

export default AppbarItems;
