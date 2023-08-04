import { api } from '../Apiconfig/config';
// ALL client crud operartion
export const GetAllData = async (endpoint) => {
  return await api.get(endpoint).then((res) => res.data);
};
export const GetbyId = async (endpoint, id) => {
  return await api.get(`/${endpoint}/${id}`).then((res) => res.data);
};
export const AddNewData = async (endpoint, data) => {
  return await api.post(endpoint, data);
};
export const UpdateClientData = async (endpoint, id, data) => {
  // return await api.put(`/${endpoint}/${id}`, data).then((res) => res.data);
  return await api.put(`${endpoint}/${id}`, data);
};
export const DeleteAllData = async (endpoint, id) => {
  return await api.delete(`${endpoint}/${id}`);
};

// All contact Crud Operations
// export const GetContactData = async () => {
//   return await api.get('/contact');
// };
// export const AddNewContactData = async (data) => {
//   return await api.post('/contact', data);
// };
// export const UpdateContactData = async (id, data) => {
//   return await api.put(`/contact/${id}`, data);
// };

// // all crud operations About
// export const AboutGetData = async () => {
//   return await api.get('/about');
// };

// export const AddNewAboutData = async (data) => {
//   return await api.post('/about', data);
// };
