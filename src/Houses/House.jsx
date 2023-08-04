import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Home from '../Homes/Home';
import HouseList from './HouseList';
import {
  AddQuery,
  DeleteQuery,
  GetQuery,
  UpdateQuery,
} from '../../queryApi/ReactApi';
import { toast } from 'react-toastify';
import SweetAlert from 'react-bootstrap-sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function House() {
  const validationYup = yup.object({
    typeHouse: yup.string().required('Please Enter The typeHouse'),
    area: yup.string().required('Please Enter The area'),
    address: yup.string().required('Please Enter The address'),
    rent: yup.number().required('Please Enter The rent'),
    deposit: yup.number().required('Please Enter The deposit'),
    parking: yup.string().required('Please Enter The parking'),
    imagespriview: yup.string().required('Please Enter The imagespriview'),
    isAvailable: yup.string().required('Please Enter The isAvailable'),
    Rooms: yup.number().required('Please Enter The Rooms'),
    toilets: yup.number().required('Please Enter The toilets'),
    MasterRoom: yup.number().required('Please Enter The MasterRoom'),
    faafaahin: yup.string().required('Please Enter The faafaahin'),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationYup) });
  const [housetoggle, sethousetoggle] = useState(false);
  const [hlid, sethlid] = useState('');
  const [Sweeralert, setSweeralert] = useState(false);
  const [did, setdid] = useState('');

  const handlehousetoggle = () => {
    sethousetoggle(!housetoggle);
  };
  const handlehouseIcon = () => {
    handlehousetoggle();
    setdid('');
  };
  // get data house
  const { data: house, isLoading, isError } = GetQuery('/house', 'house');
  //   console.log(house);
  // add house
  const { mutateAsync, isLoading: addloading } = AddQuery('/house', 'house');
  // update query
  const { mutateAsync: updatemuate, isLoading: updateloading } = UpdateQuery(
    '/house',
    hlid,
    'house'
  );
  // delete query
  const { mutateAsync: deletemutate } = DeleteQuery('/house', 'house');
  const AddNewhouse = async (value) => {
    if (hlid !== '') {
      updatemuate(value).then(() => {
        toast.success('data has been updated successfully');
        handlehousetoggle();
        reset();
      });
    } else {
      try {
        await mutateAsync(value).then(() => {
          toast.success('house added successfully ');
          handlehousetoggle();
          reset();
        });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  // update functioninformation
  const updatehouseinfo = (data) => {
    setValue('typeHouse', data.typeHouse);
    setValue('toilets', data.toilets);
    setValue('rent', data.rent);
    setValue('parking', data.parking);
    setValue('isAvailable', data.isAvailable);
    setValue('imagespriview', data.imagespriview);
    setValue('faafaahin', data.faafaahin);
    setValue('deposit', data.deposit);
    setValue('area', data.area);
    setValue('address', data.address);
    setValue('Rooms', data.Rooms);
    setValue('MasterRoom', data.MasterRoom);
    sethlid(data._id);
    handlehousetoggle();
  };
  // delete fuction
  const deleteClientFuction = () => {
    // console.log('dlete data');
    deletemutate(did).then(() => {
      toast.success('deleted data successfully ');
      setSweeralert(false);
    });
  };
  // delete house data
  const deletehouseinfo = (id) => {
    setdid(id);
    setSweeralert(true);
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
          house Here
        </Alert>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
          }}
        >
          <Typography variant='h5'> house List</Typography>
          <IconButton onClick={handlehouseIcon}>
            <AddCircleIcon style={{ color: 'primary.normal' }} />
          </IconButton>
        </Box>
        {/* Dialog */}
        <Dialog open={housetoggle} onClose={handlehousetoggle}>
          <DialogTitle sx={{ bgcolor: 'primary.main' }}>
            New Gallery
          </DialogTitle>
          <Box component={'form'} onSubmit={handleSubmit(AddNewhouse)}>
            <DialogContent>
              <Box sx={{ width: '400px' }} mt={2}>
                <Stack spacing={2} direction={'column'}>
                  <TextField
                    label=' typeHouse'
                    {...register('typeHouse')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.typeHouse ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.typeHouse.message}
                    </Typography>
                  ) : null}

                  <TextField
                    label='area'
                    {...register('area')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.area ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.area.message}
                    </Typography>
                  ) : null}

                  <TextField
                    label='address'
                    {...register('address')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.address ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.address.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='rent'
                    type='number'
                    {...register('rent')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.rent ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.rent.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='deposit'
                    type='number'
                    {...register('deposit')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.deposit ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.deposit.message}
                    </Typography>
                  ) : null}
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      parking
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='parking'
                      {...register('parking')}

                      //   onChange={handleChange}
                    >
                      <MenuItem value='haa'>Haa</MenuItem>
                      <MenuItem value='maya'>Maya</MenuItem>
                    </Select>
                  </FormControl>
                  {errors.parking ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.parking.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='imagespriview'
                    {...register('imagespriview')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.imagespriview ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.imagespriview.message}
                    </Typography>
                  ) : null}
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      isAvailable
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      {...register('isAvailable')}
                      label='isAvailable'
                    >
                      <MenuItem value='haa'>Haa</MenuItem>
                      <MenuItem value='maya'>Maya</MenuItem>
                    </Select>
                  </FormControl>
                  {errors.isAvailable ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.isAvailable.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='Rooms'
                    type='number'
                    {...register('Rooms')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.Rooms ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Rooms.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='toilets'
                    type='number'
                    {...register('toilets')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.toilets ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.toilets.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='MasterRoom'
                    {...register('MasterRoom')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.MasterRoom ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.MasterRoom.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='faafaahin'
                    {...register('faafaahin')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.faafaahin ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.faafaahin.message}
                    </Typography>
                  ) : null}
                </Stack>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handlehousetoggle}>Cancel</Button>
              <Button
                type='submit'
                disabled={hlid !== '' ? updateloading : addloading}
                variant='contained'
                size='small'
              >
                {hlid !== '' ? 'Update' : 'Submit'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
        {/*end Dialog */}
        {Sweeralert ? (
          <SweetAlert
            title='Are you sure?'
            warning
            showCancel
            confirmButtonText='Yes, delete it!'
            confirmBtnBsStyle='primary.main'
            cancelBtnBsStyle='primary.normal'
            onConfirm={deleteClientFuction}
            onCancel={() => setSweeralert(false)}
          >
            You won't be able to revert this!
          </SweetAlert>
        ) : null}
        <Divider />
        {isLoading ? (
          'loading...'
        ) : house ? (
          <HouseList
            housegetdata={house}
            updatahouse={updatehouseinfo}
            deletedata={deletehouseinfo}
          />
        ) : null}
      </Box>
    </>
  );
}

export default House;
