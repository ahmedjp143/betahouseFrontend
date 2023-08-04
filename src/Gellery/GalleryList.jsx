import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const GalleryList = ({ gallerygetdata, updategallery }) => {
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'ImageTitle',
      headerName: 'ImageTitle',
      width: 150,
    },
    {
      field: 'Image',
      headerName: ' Image',
      width: 350,
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
              size='small'
              sx={{ bgcolor: 'primary.buton' }}
              onClick={() => {
                updategallery(params.row);
              }}
            >
              <BorderColorIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const rows = gallerygetdata ? gallerygetdata : null;
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

export default GalleryList;
