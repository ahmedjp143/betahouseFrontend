import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Chip, Stack, Typography } from '@mui/material';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function HouseList({ housegetdata, updatahouse, deletedata }) {
  const [opendialog, setopendialog] = useState(false);
  const [xogtaguryaha, setxogtaguryaha] = useState({});
  const handleopendialog = () => {
    setopendialog(!opendialog);
  };
  const seeMore = (data) => {
    console.log(data);
    setxogtaguryaha(data);
    handleopendialog();
  };
  const columns = [
    // { field: '_id', headerName: 'ID', width: 60 },
    {
      field: 'typeHouse',
      headerName: 'typeHouse',
      width: 250,
      renderCell: (params) => {
        return (
          <Box>
            {' '}
            {params.row.typeHouse}{' '}
            <Chip
              size='small'
              label='See More'
              variant='outlined'
              sx={{ marginLeft: '10px', bgcolor: 'primary.main' }}
              onClick={() => seeMore(params.row)}
            />
          </Box>
        );
      },
    },
    {
      field: 'area',
      headerName: 'area',
      width: 100,
    },
    {
      field: 'address',
      headerName: 'address',

      width: 150,
    },

    {
      field: 'imagespriview',
      headerName: 'imagespriview',
      width: 150,
      renderCell: (params) => {
        return (
          <Box>
            <Avatar
              alt='Imagespriveiws'
              src={params.row.imagespriview}
              sx={{ width: 56, height: 56 }}
            />
          </Box>
        );
      },
    },

    {
      field: 'isAvailable',
      headerName: 'isAvailable',

      width: 130,
    },
    {
      field: 'delete',
      headerName: 'action',
      width: 90,
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant='contained'
              sx={{ bgcolor: 'primary.buton' }}
              size='small'
              onClick={() => {
                deletedata(params.row._id);
              }}
            >
              <AutoDeleteIcon />
            </Button>
          </div>
        );
      },
    },
    {
      field: 'update',
      headerName: '',
      width: 90,
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant='contained'
              size='small'
              sx={{ bgcolor: 'primary.buton' }}
              onClick={() => {
                updatahouse(params.row);
              }}
            >
              <BorderColorIcon />
            </Button>
          </div>
        );
      },
    },
    {
      field: 'Images',
      headerName: '',
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <Link
              to={`/dashboard/image/${params.row._id}`}
              style={{
                textDecoration: 'none',
                color: 'black',
                backgroundColor: '#C8B568',
                padding: '5px',
                borderRadius: '10px',
                fontWeight: 'bold',
              }}
            >
              Image here
            </Link>
          </div>
        );
      },
    },
  ];

  const rows = housegetdata ? housegetdata : null;
  return (
    <>
      <Box sx={{ height: 400, width: '100%' }}>
        {/* diagle see more */}
        <Dialog
          open={opendialog}
          onClose={handleopendialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle
            id='alert-dialog-title'
            sx={{ bgcolor: 'primary.ahmed', borderBottom: '2px solid black' }}
          >
            <Box sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <Typography variant='h6'> typeHouse: </Typography>

              {xogtaguryaha?.typeHouse}
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Box width={500}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant='h6'> Rooms: </Typography>

                  {xogtaguryaha.Rooms}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant='h6'> MasterRoom: </Typography>

                  {xogtaguryaha.MasterRoom}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant='h6'> toilets: </Typography>

                  {xogtaguryaha.toilets}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant='h6'> rent: </Typography>

                  {xogtaguryaha.rent}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant='h6'> deposit: </Typography>

                  {xogtaguryaha.deposit}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant='h6'> parking: </Typography>

                  {xogtaguryaha.parking}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant='h6'> faafaahin: </Typography>

                  {xogtaguryaha?.faafaahin}
                </Box>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleopendialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
        {/* end diaglog */}
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}

export default HouseList;
