import {
  Box,
  Stack,
  IconButton,
  Typography,
  Avatar,
  Button,
  Popover,
} from '@mui/material';
import { Sidebar } from './SideBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
// import { Clients } from '../clients/client';
import Image from '../images/image';
// import { Outlet } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import { useUsercontext } from '../contextApi/Context';
import { Logout } from '@mui/icons-material';
import avatarimage from '../assets/avater.jpg';
export const Dashboard = () => {
  const [draweOpen, setDrawer] = useState(false);
  // const [avatartoggle, setavatartoggle] = useState(false);
  const { islogin, email, logout } = useUsercontext();
  // popover
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const ToggleDrawer = () => {
    setDrawer(!draweOpen);
  };
  return (
    <>
      <Box>
        <Stack direction={'row'}>
          <Sidebar DrawerOpen={draweOpen} DrawerClose={ToggleDrawer} />
          {/* content box */}
          <Box sx={{ width: '100%' }}>
            {/* top header */}

            <Box
              sx={{
                bgcolor: 'primary.normal',
                color: 'white',
                display: 'flex',
                justifyContent: {
                  xs: 'space-between',
                  md: 'end',
                  borderBottom: '2px  solid black',
                },
              }}
              p={2}
            >
              <IconButton
                sx={{
                  p: 0,
                  display: {
                    xs: 'block',
                    md: 'none',
                  },
                }}
                onClick={() => ToggleDrawer()}
              >
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>

              {/* popover */}
              <Button
                aria-describedby={id}
                variant='primary.normal'
                onClick={handleClick}
              >
                <Avatar alt='Cindy Baker' src={avatarimage} />
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box sx={{ p: 3, alignItems: 'center' }}>
                  <Typography mb={2}> User : {email}</Typography>
                  <IconButton sx={{ p: 0 }} onClick={() => logout()}>
                    <Logout sx={{ color: 'black' }} />
                  </IconButton>
                </Box>
              </Popover>
              {/* end popover */}
            </Box>

            {/* top header end */}

            {/* content pages */}
            <Outlet />

            {/* end content */}
            {/* imagepage */}

            {/* imagepage end */}
          </Box>
        </Stack>
      </Box>
    </>
  );
};
