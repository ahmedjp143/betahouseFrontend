// import { AddBox } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Textarea } from '@mui/joy';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ContactList from './ContactList';

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddQuery, GetQuery } from '../../queryApi/ReactApi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Circles } from 'react-loader-spinner';
// import SweetAlert from 'react-bootstrap-sweetalert';

const Contact = () => {
  const validationYup = yup.object({
    Name: yup.string().required('Please Enter The  Name'),
    Phone: yup.number().required('Please Enter The Phone'),
    message: yup.string().required('Please Enter The message'),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationYup) });
  const [contacDialog, setcontacDialog] = useState(false);
  const [Getcontact, setGetcontact] = useState([]);
  const handlecontactdialog = () => {
    setcontacDialog(!contacDialog);
  };
  const handlecontactIcon = () => {
    handlecontactdialog();
  };
  // get contact data
  const { data: contact, isLoading, isError } = GetQuery('/contact', 'contact');
  console.log(contact);
  const { mutateAsync, isLoading: conatctloading } = AddQuery(
    '/contact',
    'contact'
  );
  // post data
  const AddNewContact = async (value) => {
    try {
      mutateAsync(value).then(() => {
        toast.success('Contact added successfully');
        handlecontactdialog();
      });
      // const { data } = await AddNewContactData(value);
      // if (data.status == true) {
      //   toast.success(data.message);
      //   handlecontactdialog();
      // } else {
      //   toast.warning(data.message);
      // }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Box p={4}>
        <Alert
          sx={{
            bgcolor: 'primary.normal',
            color: 'white',
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          {' '}
          Contact Here
        </Alert>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
          }}
        >
          <Typography variant='h5'> Contacts List</Typography>
          <IconButton onClick={handlecontactIcon}>
            <AddCircleIcon style={{ color: 'primary.normal' }} />
          </IconButton>
        </Box>
        {/* Dialog */}
        <Dialog open={contacDialog} onClose={handlecontactdialog}>
          <DialogTitle sx={{ bgcolor: 'primary.main' }}>
            New Contact
          </DialogTitle>
          <Box component={'form'} onSubmit={handleSubmit(AddNewContact)}>
            <DialogContent>
              <Box sx={{ width: '400px' }} mt={2}>
                <Stack spacing={2} direction={'column'}>
                  <TextField
                    label=' Name'
                    validate
                    {...register('Name')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.Name ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Name.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='Phone'
                    type='number'
                    {...register('Phone')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.Phone ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Phone.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='message'
                    variant='outlined'
                    {...register('message')}
                    size='small'
                    fullWidth
                  />
                  {errors.message ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.message.message}
                    </Typography>
                  ) : null}
                </Stack>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handlecontactdialog}>Cancel</Button>
              <Button
                type='submit'
                disabled={conatctloading}
                variant='contained'
                size='small'
              >
                Submit
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
        {/*end Dialog */}
        <ToastContainer />
        <Divider />
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Circles
              height='80'
              width='80'
              color='#4fa94d'
              ariaLabel='circles-loading'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
            />
          </div>
        ) : contact ? (
          <ContactList contactdatainfo={contact} />
        ) : null}
      </Box>
    </>
  );
};

export default Contact;
