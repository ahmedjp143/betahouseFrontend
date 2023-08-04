import { Alert, Box, Button, Grid, Stack, TextField } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../logos/card1.jpg';
import card from '../logos/card2.png';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Storage } from './Firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { AddQuery, GetQuery } from '../../queryApi/ReactApi';
import { toast } from 'react-toastify';

const Image = () => {
  const { id } = useParams();
  const [imageuplod, setimageuplod] = useState(null);
  const [imagelistitem, setimagelistitem] = useState([]);
  const [geturlimg, setgeturlimg] = useState('');

  const { mutateAsync } = AddQuery('/images', 'images');
  // gat from mongodb server
  const { data, isLoading, isError } = GetQuery('/images', 'image');
  // console.log(data);
  const getimage = data?.filter((data) => data.HouseID == id);
  // add firebase and database server
  const uploadimage = () => {
    if (!imageuplod) return toast.warning('pls selected image');
    const imageRef = ref(Storage, `images/${imageuplod.name + v4()}`);
    uploadBytes(imageRef, imageuplod)
      .then((res) => {
        getDownloadURL(res.ref).then((url) => setgeturlimg(url));
      })
      .then(async () => {
        if (geturlimg == '') return toast.warning('taabo mar kle');
        const Data = {
          HouseID: id,
          pathImage: geturlimg,
        };
        mutateAsync(Data).then(() => {
          toast.success('successfully added image');
        });
      });
  };
  // get images from storage
  // useEffect(() => {
  //   const onlod = () => {
  //     listAll(imagelistref).then((response) => {
  //       // console.log(response);
  //       response.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setimagelistitem((prev) => [...prev, url]);
  //         });
  //       });
  //     });
  //   };
  //   onlod();
  // }, []);
  return (
    <>
      <Box p={3}>
        <Alert
          sx={{
            bgcolor: 'primary.normal',
            color: 'white',
            textAlign: 'center',
            fontSize: '17px',
          }}
        >
          {' '}
          Images Here
        </Alert>
        <Box m={3}>
          <Stack direction={'row'} spacing={2}>
            <TextField
              type='file'
              onChange={(e) => {
                setimageuplod(e.target.files[0]);
              }}
              // label='Outlined'
              // {...register('file[0]')}
              variant='outlined'
              size='small'
              fullWidth
            />
            <Button onClick={uploadimage} type='submit' variant='contained'>
              Upload
            </Button>
          </Stack>
        </Box>
        {/* cards */}
        <Grid container>
          {getimage?.map((url) => {
            return (
              <Grid xl={4} md={6} sm={12} xs={12}>
                <Card
                  sx={{ maxWidth: 345, marginTop: 3, borderRadius: '50px' }}
                >
                  <CardMedia
                    component='img'
                    height='194'
                    image={url.pathImage}
                    alt='Paella dish'
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Image;

{
  //   <ImageList
  //   sx={{ width: 500, height: 450 }}
  //   cols={3}
  //   rowHeight={164}
  // >
  //   <ImageListItem>
  //     <img
  //       src={img}
  //       // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
  //       alt=' here image'
  //       loading='lazy'
  //     />
  //   </ImageListItem>
  // </ImageList>
  /* <Stack direction={'row'} spacing={3}>
<Grid container spacing={2}>
  <Grid xs={12} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
</Grid>
</Stack> */
}
