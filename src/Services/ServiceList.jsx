import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const ServiceList = ({ serviceget, updateservice }) => {
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'Title',
      headerName: 'Title name',
      width: 150,
      editable: true,
    },
    {
      field: 'Icon',
      headerName: 'Icon ',
      width: 150,
      editable: true,
    },
    {
      field: 'Decribtion',
      headerName: 'Decribtion',

      width: 110,
      editable: true,
    },
    {
      field: 'update',
      headerName: '',
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant='contained'
              sx={{ bgcolor: 'primary.buton' }}
              size='small'
              onClick={() => {
                updateservice(params.row);
              }}
            >
              <BorderColorIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const rows = serviceget ? serviceget : null;
  return (
    <>
      <Box sx={{ height: 400, width: '100%' }}>
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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default ServiceList;
