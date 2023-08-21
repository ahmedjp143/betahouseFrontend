import { Title } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const CardDashboard = () => {
  return (
    <>
      <Box p={2}>
        <Alert
          sx={{
            bgcolor: 'primary.normal',
            color: 'white',
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          {' '}
          Welcome to beta house Dashboard Here
        </Alert>
      </Box>
    </>
  );
};

export default CardDashboard;
