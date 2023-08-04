import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  AddNewData,
  DeleteAllData,
  GetAllData,
  UpdateClientData,
} from '../ApiCrudOperation/CrudOperation';
import { toast } from 'react-toastify';

export const GetQuery = (endpoint, querykey) => {
  return useQuery({
    queryKey: [querykey],
    queryFn: () => GetAllData(endpoint),
  });
};

export const AddQuery = (endpoint, querykey) => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: (data) => AddNewData(endpoint, data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: [querykey] });
    },
    onError: () => {
      toast.error('xogta lama xareen');
    },
  });
};
export const UpdateQuery = (endpoint, id, querykey) => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data) => UpdateClientData(endpoint, id, data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: [querykey] });
    },
    onError: () => {
      toast.error('Failed to update client');
    },
  });
};

export const DeleteQuery = (endpoint, querykey) => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id) => DeleteAllData(endpoint, id),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: [querykey] });
    },
    onError: () => {
      toast.error('xogta lama delete gareen');
    },
  });
};
