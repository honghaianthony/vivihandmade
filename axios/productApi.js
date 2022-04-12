import axiosInstance from './axiosInstance';

export const createProduct = async (data) => {
	return await axiosInstance.post('/product', data);
};
