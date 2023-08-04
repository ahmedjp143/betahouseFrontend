import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { IconButton } from '@mui/material';

const ContactList = ({ contactdatainfo }) => {
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'Name',
      headerName: ' name',
      width: 150,
    },
    {
      field: 'Phone',
      headerName: 'Phone',

      width: 150,
    },
    {
      field: 'message',
      headerName: 'message',
      width: 110,
    },
  ];

  const rows = contactdatainfo ? contactdatainfo : null;
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
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default ContactList;
