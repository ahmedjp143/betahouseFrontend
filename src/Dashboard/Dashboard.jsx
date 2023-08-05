import { Box, Stack, IconButton, Typography } from '@mui/material';
import { Sidebar } from './SideBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
// import { Clients } from '../clients/client';
import Image from '../images/image';
// import { Outlet } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
export const Dashboard = () => {
  const [draweOpen, setDrawer] = useState(false);

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
                bgcolor: 'primary.main',
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

              <Typography> User : ahmed@gmail.com</Typography>
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
