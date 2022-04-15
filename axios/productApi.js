import axiosInstance from './axiosInstance';

export const createProduct = async (data) => {
	return await axiosInstance.post('/product/create-product', data);
};

export const getAllProducts = async () => {
	return await axiosInstance.get('/product/get-all-products');
};

export const getProductById = async (slug) => {
	return await axiosInstance.get(`/product/${slug}`);
};

export const deleteProduct = async (id) => {
	return await axiosInstance.delete(`/product/${id}`);
};
