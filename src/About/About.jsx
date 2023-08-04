import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  IconButton,
  Typography,
  Alert,
  TextField,
  Button,
  FormGroup,
  Divider,
} from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState } from 'react';
// import AboutList from './AboutList';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { AddQuery, GetQuery } from '../../queryApi/ReactApi';
import { GetAllData } from '../../ApiCrudOperation/CrudOperation';
const About = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   setValue,
  //   formState: { error },
  // } = useForm();
  const [Getfaahfahin, setGetfaahfahin] = useState('');
  const [getfafaahinyar, setgetfafaahinyar] = useState('');
  useEffect(() => {
    const getdata = async () => {
      const data = await GetAllData('/about');
      // console.log(data[0]?.FaahFaahin);
      setGetfaahfahin(data[0]?.FaahFaahin);
      setgetfafaahinyar(data[0]?.FaahFaaahinYar);
    };
    getdata();
  }, []);
  // update query
  const { mutateAsync } = AddQuery('/about', 'about');

  const updatedata = () => {
    const data = {
      FaahFaahin: Getfaahfahin,
      FaahFaaahinYar: getfafaahinyar,
    };
    mutateAsync(data).then(() => {
      toast.success('succesfully data updated');
    });
  };

  return (
    <>
      <Box p={4}>
        <Alert
          sx={{
            bgcolor: 'primary.normal',
            color: 'white',
            textAlign: 'center',
            fontSize: '17px',
          }}
        >
          {' '}
          About Here
        </Alert>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
          }}
        >
          <Typography variant='h5'> About List</Typography>
        </Box>
        <Box sx={{ marginBottom: '30px' }}>
          <ReactQuill
            theme='snow'
            value={Getfaahfahin}
            onChange={setGetfaahfahin}
          />
        </Box>
        <Box sx={{ marginBottom: '35px' }}>
          <ReactQuill
            theme='snow'
            value={getfafaahinyar}
            onChange={setgetfafaahinyar}
          />
        </Box>

        <Button variant='contained' size='small' onClick={() => updatedata()}>
          {' '}
          Save
        </Button>

        <Divider />
      </Box>
    </>
  );
};

export default About;
