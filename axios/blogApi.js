import axiosInstance from './axiosInstance';

export const createBlog = async (data) => {
	return await axiosInstance.post('/blog/create-blog', data);
};

export const getAllBlogs = async () => {
	return await axiosInstance.get('/blog/get-all-blogs');
};

export const getBlogBySlug = async (slug) => {
	return await axiosInstance.get(`/blog/get-blog-by-slug/${slug}`);
};

export const deleteBlog = async (id) => {
	return await axiosInstance.delete(`/blog/delete-blog/${id}`);
};
