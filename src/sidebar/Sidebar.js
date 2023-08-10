import React from 'react';
import Button from '@material-ui/core/Button';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SettingsIcon from '@mui/icons-material/Settings';
import FlakyIcon from '@mui/icons-material/Flaky';
import './sidebar.css';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_hader'>
       
          
          <Stack direction="row" spacing={2}> <Avatar>xx</Avatar>
          </Stack>
        </div>
        <div className='sidebar_hader_right'>
         

          <IconButton color="secondary">
            <DonutLargeIcon />
          </IconButton>

          <IconButton color="secondary">
            <WhatsAppIcon />
          </IconButton>

          <IconButton color="secondary">
            <SettingsIcon />
          </IconButton>

          <IconButton color="secondary">
            <FlakyIcon />
          </IconButton>
        </div>
      </div>
  );
};

export default Sidebar;
