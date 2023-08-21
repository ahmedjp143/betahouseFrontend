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
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import Clientlistdata from './clientlistdata';
import {
  AddNewData,
  DeleteAllData,
  GetAllData,
  UpdateClientData,
} from '../../ApiCrudOperation/CrudOperation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import {
  AddQuery,
  DeleteQuery,
  GetQuery,
  UpdateQuery,
} from '../../queryApi/ReactApi';
import { useQuery } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Circles } from 'react-loader-spinner';

export const Clients = () => {
  const validationYup = yup.object({
    ClientName: yup.string().required('Please Enter The Cient Name'),
    Logo: yup.string().required('Please Enter The Logo'),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationYup) });
  const [dailogOpen, setDailog] = useState(false);
  const [clid, setclid] = useState('');
  const [Sweeralert, setSweeralert] = useState(false);
  const ToggleDailog = () => {
    setDailog(!dailogOpen);
  };

  const handleOpen = () => {
    ToggleDailog();
    setclid('');
  };
  // get guery data
  const { data: client, isLoading, isError } = GetQuery('/client', 'client');
  console.log('data', client);
  // post query data
  const { mutateAsync, isLoading: clientmutate } = AddQuery(
    '/client',
    'client'
  );
  // update client
  const { mutateAsync: updatemutateass, isLoading: upadteloding } = UpdateQuery(
    '/client',
    clid,
    'client'
  );

  // Add new client
  const AddClientpost = async (value) => {
    if (clid !== '') {
      // update client
      try {
        await updatemutateass(value).then(() => {
          toast.success(' client updated successfully');

          ToggleDailog();
          reset();
        });
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      // add new client
      try {
        mutateAsync(value).then(() => {
          toast.success('New client added');
          ToggleDailog();
          reset();
        });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  // update data
  const updateclientdatainfo = (data) => {
    setValue('ClientName', data.ClientName);
    setValue('Logo', data.Logo);
    setclid(data._id);
    ToggleDailog();
  };
  // delete client

  const [deleteId, setdeleteId] = useState('');
  // delete client
  const { mutateAsync: deletemuatate, isLoading: deleteloding } = DeleteQuery(
    '/client',
    'client'
  );

  // console.log(deleteId);

  const deleteClient = (id) => {
    // console.log(data);
    setdeleteId(id);
    setSweeralert(true);
  };
  const deleteClientFuction = async () => {
    try {
      await deletemuatate(deleteId).then(() => {
        toast.success('data deleted successfully');
        setSweeralert(!Sweeralert);
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Box p={4}>
        <Alert
          sx={{ bgcolor: 'primary.normal', color: 'white', fontSize: '18px' }}
        >
          Our Clients
        </Alert>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} my={4}>
          <Typography variant='h6'>List Clients</Typography>

          <IconButton onClick={handleOpen}>
            <AddHomeWorkIcon sx={{ color: 'green' }} />
          </IconButton>
        </Box>

        <Dialog open={dailogOpen} onClose={ToggleDailog}>
          <DialogTitle sx={{ bgcolor: 'primary.main' }}>New Client</DialogTitle>
          <Box component={'form'} onSubmit={handleSubmit(AddClientpost)}>
            <DialogContent>
              <Box sx={{ width: '400px' }} mt={2}>
                <Stack spacing={2} direction={'column'}>
                  <TextField
                    label='Client Name'
                    {...register('ClientName')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.ClientName ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.ClientName.message}
                    </Typography>
                  ) : null}

                  <TextField
                    label='Client logo'
                    {...register('Logo')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.Logo ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Logo.message}
                    </Typography>
                  ) : null}
                </Stack>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={ToggleDailog}>Cancel</Button>
              <Button
                type='submit'
                disabled={clid !== '' ? upadteloding : clientmutate}
                variant='contained'
                size='small'
              >
                {clid !== '' ? 'Update' : 'Submit'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

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
        ) : client ? (
          <Clientlistdata
            ourclientdata={client}
            updatedata={updateclientdatainfo}
            deletdata={deleteClient}
          />
        ) : null}

        <Divider />
        {/* // sweetalert */}
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
        {/* // end sweetalert */}
      </Box>
    </>
  );
};
