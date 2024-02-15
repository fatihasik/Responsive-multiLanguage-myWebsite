import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AppbarItems from './AppbarItems';
import logom from '../Assets/logom.png'
import AppbarItemsMobile from './AppbarItemsMobile';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navigate=useNavigate()
  const LanguageSelector = () => {
    const language = useSelector((state) => state.language);
    
    const dispatch = useDispatch();

    const handleChange = (event) => {
      dispatch({ type: 'CHANGE_LANGUAGE', payload: event.target.value });
    };
    return (
      <Grid sx={{display:'flex', alignItems:'center'}}>
  <Grid item>
    <GTranslateIcon />
  </Grid>
  <Grid item>
    <FormControl>
      <Select value={language} onChange={handleChange} sx={{color:'white'}}>
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="German">German</MenuItem>
        <MenuItem value="French">French</MenuItem>
        <MenuItem value="Russian">Russian</MenuItem>
        <MenuItem value="Arabic">Arabic</MenuItem>
        <MenuItem value="Turkish">Türkçe</MenuItem>
        <MenuItem value="Turkmen">Turkmen</MenuItem>
        <MenuItem value="Azerbaijani">Azerbaijani</MenuItem>

      </Select>
    </FormControl>
  </Grid>
  </Grid>

)};

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Box sx={{display:'flex',alignItems:'center',}}>
      <img src={logom} style={{width:75,height:75}}/>

      <Typography variant="h6" sx={{ my: 2 }}>
        Healt and Care
      </Typography>
      </Box>

      
      <Divider />
      <AppbarItemsMobile/>
    
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          
          <img src={logom} style={{width:75,height:75,padding:7,cursor:'pointer'}} onClick={()=>navigate('/')}/>
          <Typography
            onClick={()=>navigate('/')}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { margin:10},cursor:'pointer' }}
          >
            Healt and Care
          </Typography>
          
          
          <Box sx={{ display: { xs: 'none', sm: 'block', margin:10} }}>
          <AppbarItems/>
          
            
            

          </Box>
          <LanguageSelector />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
