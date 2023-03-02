import httpClient from '@/api';
const END_POINT = '/goods';

const getAllGoods = () => httpClient.get(END_POINT);
const createGood = (name, cat_id) => httpClient.post(END_POINT, { name, cat_id });
const deleteGood = (id) => httpClient.delete(`${END_POINT} + /${id}`);
const putGood = (id) => httpClient.put(`${END_POINT} + /${id}`);
