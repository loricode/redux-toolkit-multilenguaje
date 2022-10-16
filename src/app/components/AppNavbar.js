import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { config } from '../config';

import { useSelector, useDispatch } from 'react-redux';

import { language } from '../context/languageSlice';

export const AppNavbar = () => {

   const { dictionary } = useSelector(state => state.languageState);
   
   const dispatch = useDispatch();

   const [anchorEl, setAnchorEl] = useState(null);;
 
   const isMenuOpen = Boolean(anchorEl);

   const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

   const handleMenuClose = () => {
      setAnchorEl(null);
    };


   const menuId = 'primary-search-account-menu';

   const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => {
            dispatch(language(config.spanish));
        }}>
         {dictionary.lblSpanish}
         </MenuItem>
        <MenuItem onClick={() => {
           dispatch(language(config.english));
        }}>
          {dictionary.lblEnglish}
         </MenuItem>
      </Menu>
    );


  return (
   <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
     <Toolbar>
     <IconButton
           size="large"
           aria-label="show more"
           aria-controls={menuId}
           aria-haspopup="true"
           onClick={handleProfileMenuOpen}
           color="inherit"
         >
           <AccountCircle />
         </IconButton>
       <Typography
         variant="h6"
         noWrap
         component="div"
         sx={{ display: { sm: 'block' } }}
       >
         {dictionary.login.lblEmail}
       </Typography>
     </Toolbar>
   </AppBar>
   {renderMenu}
 </Box>
  )
}
