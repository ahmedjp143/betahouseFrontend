import { Box, Stack, Typography, Drawer } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HouseIcon from '@mui/icons-material/House';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import CollectionsIcon from '@mui/icons-material/Collections';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logos/logo.png';
// import { Link } from 'react-router-dom';

// import StarBorder from '@mui/icons-material/StarBorder';
import FontAwesome from 'react-fontawesome';
import { useUsercontext } from '../contextApi/Context';
import { useEffect } from 'react';

export const Sidebar = ({ DrawerOpen, DrawerClose }) => {
  const { roleallowed, onload } = useUsercontext();
  useEffect(() => {
    onload();
  }, []);

  return (
    <>
      {/* drawer */}
      <Drawer open={DrawerOpen} onClose={DrawerClose}>
        <Box
          sx={{
            width: '300px',
            bgcolor: 'primary.main',
          }}
        >
          <Box sx={{ p: 4 }}>
            <Stack direction={'row'} spacing={1}>
              <Box>
                <AddHomeWorkIcon
                  sx={{ color: 'green', height: 30, fontSize: 50 }}
                />
              </Box>

              <Box>
                <Typography variant='h6'> Betahouse</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Menu list */}

          <Box>
            <List sx={{ width: '100%', maxWidth: 360 }} component='nav'>
              <Link
                to='dashboard'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon>
                    <DashboardCustomizeIcon sx={{ backgroundColor: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary='Dashboard' />
                </ListItemButton>
              </Link>
              <Link
                to='home'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon>
                    <MapsHomeWorkIcon sx={{ backgroundColor: 'white' }} />
                    {/* <FontAwesome icon='fa-thin fa-house-person-return' /> */}
                  </ListItemIcon>
                  <ListItemText primary='HomeSitting' />
                </ListItemButton>
              </Link>
              <Link
                to='guryaha'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon>
                    <AddBusinessIcon sx={{ backgroundColor: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary='Guryaha' />
                </ListItemButton>
              </Link>

              <Link
                to='image'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon style={{ ':hover': 'primary.main' }}>
                    <CameraAltIcon
                      sx={{
                        backgroundColor: 'white',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary='Images' />
                </ListItemButton>
              </Link>

              <Link
                to='service'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon>
                    <SupportAgentIcon sx={{ backgroundColor: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary='Services' />
                </ListItemButton>
              </Link>

              <Link
                to='client'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon>
                    <ApartmentIcon sx={{ backgroundColor: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary='Clients' />
                </ListItemButton>
              </Link>

              <Link
                to='contact'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon>
                    <AddIcCallIcon sx={{ backgroundColor: 'white' }} />
                  </ListItemIcon>

                  <ListItemText primary='contact' />
                </ListItemButton>
              </Link>
              <Link
                to='about'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemButton
                  sx={{ ':hover': { backgroundColor: 'primary.normal' } }}
                  onClick={() => {
                    DrawerClose();
                  }}
                >
                  <ListItemIcon>
                    <TroubleshootIcon
                      sx={{
                        backgroundColor: 'primary.buton',
                        color: 'primary.normal',
                      }}
                    />
                  </ListItemIcon>

                  <ListItemText primary='About' />
                </ListItemButton>
              </Link>
            </List>
          </Box>
          {/* endMenu list */}
        </Box>
      </Drawer>
      {/* end drawer */}

      {/* big screen menu */}
      <Box
        sx={{
          width: '330px',
          bgcolor: 'primary.normal',
          height: '300vh',
          display: {
            xs: 'none',
            md: 'block',
          },
          borderRight: 1,
          borderColor: '#eee',
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* <Stack direction={'row'} spacing={1}> */}

          <img
            src={logo}
            alt='logo'
            width='50%'
            height='50%'
            style={{
              marginLeft: '50px',
              marginBottom: 0,
            }}
          />
          {/* </Stack> */}
        </Box>

        {/* Menu list */}

        <Box>
          <List
            sx={{ width: '100%', maxWidth: 360 }}
            // style={{ marginLeft: '15px' }}
            component='nav'
          >
            <Link
              to='dashboard'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <ListItemButton
                sx={{ ':hover': { backgroundColor: 'primary.main' } }}
              >
                <ListItemIcon>
                  <DashboardCustomizeIcon
                    sx={{
                      backgroundColor: 'primary.normal',
                      color: 'primary.buton',
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </Link>
            {roleallowed == 'Admin' ? (
              <>
                <Link
                  to='home'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <MapsHomeWorkIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary='HomeSitting' />
                  </ListItemButton>
                </Link>
                <Link
                  to='guryaha'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <HouseIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary='Houses' />
                  </ListItemButton>
                </Link>

                <Link
                  to='image'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <CameraAltIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary='Images' />
                  </ListItemButton>
                </Link>

                <Link
                  to='service'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <SupportAgentIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary='Services' />
                  </ListItemButton>
                </Link>

                <Link
                  to='client'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <ApartmentIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary='Clients' />
                  </ListItemButton>
                </Link>

                <Link
                  to='contact'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <AddIcCallIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText primary='contact' />
                  </ListItemButton>
                </Link>
                <Link
                  to='about'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <TroubleshootIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText primary='About' />
                  </ListItemButton>
                </Link>
                <Link
                  to='galery'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <CollectionsIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText primary='Gallery' />
                  </ListItemButton>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to='home'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <MapsHomeWorkIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary='HomeSitting' />
                  </ListItemButton>
                </Link>
                <Link
                  to='guryaha'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <HouseIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary='Houses' />
                  </ListItemButton>
                </Link>
                <Link
                  to='contact'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItemButton
                    sx={{ ':hover': { backgroundColor: 'primary.main' } }}
                  >
                    <ListItemIcon>
                      <AddIcCallIcon
                        sx={{
                          backgroundColor: 'primary.normal',
                          color: 'primary.buton',
                        }}
                      />
                    </ListItemIcon>

                    <ListItemText primary='contact' />
                  </ListItemButton>
                </Link>
              </>
            )}
          </List>
        </Box>
        {/* end Menu list */}
      </Box>
    </>
  );
};
