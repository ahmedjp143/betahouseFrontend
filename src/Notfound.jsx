import React from 'react';
import {
  Alert,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import notfound from './logos/error.png';
function Notfound() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontStyle: 'oblique',
            fontFamily: 'sans-serif',
          }}
        >
          <Typography variant='h1'> Not Found</Typography>
        </Box>
        <img src={notfound} alt='notfound' width='70%'></img>
      </Box>
    </>
  );
}

export default Notfound;
