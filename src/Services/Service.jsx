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
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import ServiceList from './ServiceList';
import { AddQuery, GetQuery, UpdateQuery } from '../../queryApi/ReactApi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Service = () => {
  const validationYup = yup.object({
    Title: yup.string().required('Please Enter The  Title'),
    Icon: yup.string().required('Please Enter The Icon'),
    Decribtion: yup.string().required('Please Enter The Decribtion'),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationYup) });
  const [servicetoggle, setservicetoggle] = useState(false);
  const [sId, setsId] = useState('');
  const handleservicetoggle = () => {
    setservicetoggle(!servicetoggle);
  };

  const handleserviceIcon = () => {
    handleservicetoggle();
    setsId('');
  };
  // get service data
  const { data: service, isLoading, isError } = GetQuery('/service', 'service');
  console.log(service);

  // add new service
  const { mutateAsync, isLoading: addloading } = AddQuery(
    '/service',
    'service'
  );
  // update service query
  const { mutateAsync: updatemuateate, isLoading: updateloading } = UpdateQuery(
    '/service',
    sId,
    'service'
  );

  const AddnewService = (value) => {
    if (sId !== '') {
      try {
        updatemuateate(value).then(() => {
          toast.success('service updated successfully');
          handleservicetoggle();
          reset();
        });
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        mutateAsync(value).then(() => {
          toast.success('Service added successfully');
          handleservicetoggle();
          reset();
        });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  // update service
  const updateserviceinfo = (data) => {
    setValue('Title', data.Title);
    setValue('Icon', data.Icon);
    setValue('Decribtion', data.Decribtion);
    setsId(data._id);
    handleservicetoggle();
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
          Service Here
        </Alert>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
          }}
        >
          <Typography variant='h5'> Service List</Typography>
          <IconButton onClick={handleserviceIcon}>
            <AddCircleIcon style={{ color: 'primary.normal' }} />
          </IconButton>
        </Box>
        {/* Dialog */}
        <Dialog open={servicetoggle} onClose={handleservicetoggle}>
          <DialogTitle sx={{ bgcolor: 'primary.main' }}>
            New service
          </DialogTitle>
          <Box component={'form'} onSubmit={handleSubmit(AddnewService)}>
            <DialogContent>
              <Box sx={{ width: '400px' }} mt={2}>
                <Stack spacing={2} direction={'column'}>
                  <TextField
                    label=' Title'
                    validate
                    {...register('Title')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.Title ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Title.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='Icon'
                    {...register('Icon')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.Icon ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Icon.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='Decribtion'
                    variant='outlined'
                    {...register('Decribtion')}
                    size='small'
                    fullWidth
                  />
                  {errors.Decribtion ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Decribtion.message}
                    </Typography>
                  ) : null}
                </Stack>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleservicetoggle}>Cancel</Button>
              <Button
                type='submit'
                disabled={sId !== '' ? updateloading : addloading}
                variant='contained'
                size='small'
              >
                {sId !== '' ? 'update' : 'submit'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
        {/*end Dialog */}
        <Divider />
        {isLoading ? (
          'Loading...'
        ) : service ? (
          <ServiceList serviceget={service} updateservice={updateserviceinfo} />
        ) : null}
      </Box>
    </>
  );
};

export default Service;

// <Box component={'form'}>
// <DialogContent>
//   <Box sx={{ width: '400px' }} mt={2}>
//     <Stack spacing={2} direction={'column'}>
//       <TextField
//         label=' Title'
//         validate
//         variant='outlined'
//         size='small'
//         fullWidth
//       />

//       <TextField
//         label='Icon'
//         variant='outlined'
//         size='small'
//         fullWidth
//       />
//       <TextField
//         label='Decribtion'
//         variant='outlined'
//         size='small'
//         fullWidth
//       />
//     </Stack>
//   </Box>
// </DialogContent>
// <DialogActions>
//   <Button onClick={handleservicetoggle}>Cancel</Button>
//   <Button type='submit' variant='contained' size='small'>
//     Submit
//   </Button>
// </DialogActions>
// </Box>
