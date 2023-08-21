import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GalleryList from './GalleryList';
import { AddQuery, GetQuery, UpdateQuery } from '../../queryApi/ReactApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Circles } from 'react-loader-spinner';
function Galery() {
  const validationYup = yup.object({
    ImageTitle: yup.string().required('Please Enter The ImageTitle'),
    Image: yup.string().required('Please Enter The Image'),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationYup) });
  const [gallerytoggle, setgallerytoggle] = useState(false);
  const [Glid, setGid] = useState('');
  const handlegallerytoggle = () => {
    setgallerytoggle(!gallerytoggle);
  };
  const handleicongalley = () => {
    handlegallerytoggle();
    setGid('');
  };
  // get gallery data
  const { data: gallery, isLoading, isError } = GetQuery('/gallery', 'gallery');
  //   console.log(gallery);
  // post data to gallery
  const { mutateAsync, isLoading: addloading } = AddQuery(
    '/gallery',
    'gallery'
  );
  // update the gallery query
  const { mutateAsync: updatemutate, isLoading: updateloding } = UpdateQuery(
    '/gallery',
    Glid,
    'gallery'
  );
  const AddNewgallery = (value) => {
    if (Glid !== '') {
      updatemutate(value).then(() => {
        toast.success('updated gallery successfully');
        handlegallerytoggle();
        reset();
      });
    } else {
      try {
        mutateAsync(value).then(() => {
          toast.success('Add new gallery successfully');
          handlegallerytoggle();
          reset();
        });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  // update the gallery function
  const upadtegallerydatainfo = (data) => {
    setValue('ImageTitle', data.ImageTitle);
    setValue('Image', data.Image);
    setGid(data._id);
    handlegallerytoggle();
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
          Gallery Here
        </Alert>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
          }}
        >
          <Typography variant='h5'> Gallery List</Typography>
          <IconButton onClick={handleicongalley}>
            <AddCircleIcon style={{ color: 'primary.normal' }} />
          </IconButton>
        </Box>
        {/* Dialog */}
        <Dialog open={gallerytoggle} onClose={handlegallerytoggle}>
          <DialogTitle sx={{ bgcolor: 'primary.main' }}>
            New Gallery
          </DialogTitle>
          <Box component={'form'} onSubmit={handleSubmit(AddNewgallery)}>
            <DialogContent>
              <Box sx={{ width: '400px' }} mt={2}>
                <Stack spacing={2} direction={'column'}>
                  <TextField
                    label=' ImageTitle'
                    validate:true='true'
                    {...register('ImageTitle')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.ImageTitle ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.ImageTitle.message}
                    </Typography>
                  ) : null}
                  <TextField
                    label='Image'
                    validate:true='true'
                    {...register('Image')}
                    variant='outlined'
                    size='small'
                    fullWidth
                  />
                  {errors.Image ? (
                    <Typography sx={{ color: 'red' }}>
                      {errors.Image.message}
                    </Typography>
                  ) : null}
                </Stack>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handlegallerytoggle}>Cancel</Button>
              <Button
                type='submit'
                disabled={Glid !== '' ? updateloding : addloading}
                variant='contained'
                size='small'
              >
                {Glid !== '' ? 'Update' : 'Submit'}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
        {/*end Dialog */}
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
        ) : gallery ? (
          <GalleryList
            gallerygetdata={gallery}
            updategallery={upadtegallerydatainfo}
          />
        ) : null}
      </Box>
    </>
  );
}

export default Galery;
