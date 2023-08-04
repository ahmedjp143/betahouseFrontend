import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const AboutList = ({ AboutDataInfo }) => {
  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    {
      field: 'FaahFaahin',
      headerName: 'FaahFaahin',
      width: 550,
      editable: true,
    },
    {
      field: 'FaahFaaahinYar',
      headerName: 'FaahFaaahinYar',
      width: 190,
      editable: true,
    },
  ];

  const rows = AboutDataInfo ? AboutDataInfo : null;
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

export default AboutList;
