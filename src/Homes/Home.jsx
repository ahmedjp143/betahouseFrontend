// import { Padding } from '@mui/icons-material';
import { Alert, Box, Button, Grid, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddQuery, GetQuery } from '../../queryApi/ReactApi';
import { GetAllData } from '../../ApiCrudOperation/CrudOperation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [gethousedata, setgethousedata] = useState({});
  // get data
  useEffect(() => {
    const onlood = async () => {
      const data = await GetAllData('/homesitting');
      // console.log(data);
      // setgethousedata(data);
      setValue('Title', data[0]?.Title);
      setValue('name', data[0]?.name);
      setValue('location', data[0]?.location);
      setValue('logo', data[0]?.logo);
      setValue('email', data[0]?.email);
      setValue('Com_Plane_Email', data[0]?.Com_Plane_Email);
      setValue('Com_Plane_Phone', data[0]?.Com_Plane_Phone);
      setValue('facebook', data[0]?.facebook);
      setValue('tiktok', data[0]?.tiktok);
      setValue('twitter', data[0]?.twitter);
      setValue('instagram', data[0]?.instagram);
      setValue('HeroTitle', data[0]?.HeroTitle);
      setValue('HeroDecribtion', data[0]?.HeroDecribtion);
      setValue('heroImage', data[0]?.heroImage);
      setValue('footerText', data[0]?.footerText);
    };
    onlood();
  }, []);

  // add data
  const { mutateAsync } = AddQuery('/homesitting', 'homesitting');
  const AddHomesetting = async (value) => {
    try {
      await mutateAsync(value).then(() => {
        toast.success('data added successfully');
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Box p={3}>
        <Alert
          sx={{ bgcolor: 'primary.normal', color: 'white', fontSize: '18px' }}
        >
          HomeSetting Here
        </Alert>
        <Box component={'form'} onSubmit={handleSubmit(AddHomesetting)}>
          <Box sx={{ width: '400px,' }} mt={2}>
            <Grid container spacing={2}>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  id='Title'
                  name='Title'
                  {...register('Title')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  id='name'
                  {...register('name')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('location')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('logo')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('email')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('Com_Plane_Email')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('Com_Plane_Phone')}
                  type='number'
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('facebook')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('tiktok')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('twitter')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('instagram')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('HeroTitle')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('HeroDecribtion')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('heroImage')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={3} m={2}>
                <TextField
                  {...register('footerText')}
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button type='submit' variant='contained' size='small' fullWidth>
              {' '}
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
