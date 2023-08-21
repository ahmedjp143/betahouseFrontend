import React from 'react';
import './login.css';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import GTranslateSharpIcon from '@mui/icons-material/GTranslateSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

import WbAutoOutlinedIcon from '@mui/icons-material/WbAutoOutlined';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { AddQuery } from '../../queryApi/ReactApi';
import { toast } from 'react-toastify';
import jscookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useUsercontext } from '../contextApi/Context';
import { ThreeCircles, Vortex } from 'react-loader-spinner';
function Login() {
  const usenavigate = useNavigate();
  const validationYup = yup.object({
    email: yup.string().required('Please Enter The  email'),
    password: yup.string().required('Please Enter The password'),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationYup) });

  // login
  const { mutateAsync, isLoading, isError, error } = AddQuery(
    '/users/login',
    'login'
  );
  const { setemail } = useUsercontext();
  const AddLogin = (value) => {
    // console.log(value);
    try {
      mutateAsync(value).then((res) => {
        if (res.data.status == true) {
          setemail(value.email);
          //   console.log(res.data.token);
          toast.success(res.data.message);
          jscookie.set('token', res.data.token);
          usenavigate('/dashboard');
        } else {
          toast.error(res.data.message);
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Box>
        <Box
          component={'form'}
          onSubmit={handleSubmit(AddLogin)}
          sx={{
            width: '450px',
            height: '450px',
            boxShadow: '10px 5px 15px 5px black',
            p: 6,
            mt: 15,
            mx: 'auto',
          }}
        >
          <Typography
            variant='h6'
            sx={{
              mb: 4,
              textAlign: 'center',
              fontFamily: 'revert',
              fontSize: '30px',
            }}
          >
            {' '}
            welcome to betahouse <WbAutoOutlinedIcon />
          </Typography>
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', fontFamily: 'revert', fontSize: '30px' }}
          >
            <LockOpenIcon /> Login
          </Typography>
          <Stack direction={'column'} spacing={2}>
            <TextField
              fullWidth
              label='email'
              {...register('email')}
              variant='standard'
            />
            {errors.email ? (
              <Typography sx={{ color: 'red' }}>
                {errors.email.message}
              </Typography>
            ) : null}
            <TextField
              fullWidth
              {...register('password')}
              label='password'
              type='password'
              variant='standard'
            />
            {errors.password ? (
              <Typography sx={{ color: 'red' }}>
                {errors.password.message}
              </Typography>
            ) : null}
            <Button variant='contained' type='submit' fullWidth size='small'>
              {isLoading ? (
                <ThreeCircles
                  height='20'
                  width='100'
                  color='white'
                  wrapperStyle={{}}
                  wrapperClass=''
                  visible={true}
                  ariaLabel='three-circles-rotating'
                  outerCircleColor=''
                  innerCircleColor=''
                  middleCircleColor=''
                />
              ) : (
                'Login'
              )}
            </Button>
          </Stack>
          <Box sx={{ mt: 2, mx: 3, textAlign: 'end' }}>
            <GTranslateSharpIcon sx={{ mx: 2 }} />
            <FacebookSharpIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
