import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteAllData } from '../../ApiCrudOperation/CrudOperation';
// import { Message } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, IconButton } from '@mui/material';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Clientlistdata = ({ ourclientdata, updatedata, deletdata }) => {
  // delete clientlist
  // const DeleteClient = async (id) => {
  //   try {
  //     const { data } = await DeleteAllData(id);
  //     if (data.status == true) {
  //       //   alert('delete client data successfully');
  //       toast.success(data.message);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      width: 150,
      editable: true,
    },
    {
      field: 'ClientName',
      headerName: 'Client name',
      width: 150,
      editable: true,
    },
    {
      field: 'Logo',
      headerName: 'logo client',
      width: 150,
      editable: true,
    },
    {
      field: 'delete',
      headerName: 'action',
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              // variant='contained'

              // size='small'
              // sx={{ bgcolor: 'primary.buton' }}
              onClick={() => {
                deletdata(params.row._id);
              }}
            >
              <AutoDeleteIcon sx={{ color: 'primary.normal' }} />
            </IconButton>
          </div>
        );
      },
    },
    {
      field: 'update',
      headerName: '',
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              // variant='contained'
              // sx={{ bgcolor: 'primary.buton' }}
              // size='small'
              onClick={() => {
                updatedata(params.row);
              }}
            >
              <BorderColorIcon sx={{ color: 'primary.normal' }} />
            </IconButton>
          </div>
        );
      },
    },
  ];
  const rows = ourclientdata ? ourclientdata : null;
  //   console.log(ourclientdata);
  // const rows = ourclientdata?.map((items) => ({
  //   id: items._id,
  //   ...items,
  // }));

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
        {/* <ToastContainer /> */}
      </Box>
    </>
  );
};

export default Clientlistdata;
