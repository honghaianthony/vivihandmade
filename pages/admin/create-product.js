import React, { useState } from 'react';
import { uploadFile, deleteFile } from '../../firebase/util';
import router from 'next/router';
import { useEffect } from 'react';
import { useRole } from '../../utilities/useRole';
import { Icon } from '@iconify/react';
import { createProduct } from 'axios/productApi';

// layout for page

import Admin from 'layouts/Admin.js';

export default function CreateProduct() {
	const [url, setUrl] = useState([]);
	const [productTitle, setProductTitle] = useState('');
	const [productDescription, setProductDescription] = useState('');
	const [productContent, setProductContent] = useState('');
	const [productPrice, setProductPrice] = useState(0);
	const [productTiket, setProductTiket] = useState(0);
	const [progress, setProgress] = useState(0);
	const role = useRole();

	useEffect(() => {
		if (role !== 2) router.push('/');
	}, []);

	useEffect(() => {
		console.log(url);
	}, [url]);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			uploadFile(
				e.target.files[0],
				(progress) => {
					setProgress(progress);
				},
				(url1) => {
					setUrl([...url, url1]);
				}
			);
		}
	};
	const handleDelete = (url1) => {
		deleteFile(
			url1,
			() => {
				alert('Xóa thành công');
				const newUrl = url.filter((i) => i !== url1);
				setUrl(newUrl);
			},
			(error) => {
				alert(error);
			}
		);
	};
	const Images = () => {
		return (
			<div>
				<label
					htmlFor="image"
					className="uppercase text-blueGray-600 text-xs font-bold mb-2 w-fit"
				>
					<span className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
						Nhấn để thêm ảnh
					</span>
					<input
						type="file"
						accept="image/*"
						hidden={true}
						id="image"
						onChange={handleChange}
					/>
				</label>
				<br />
				<div className="flex">
					{url.length > 0 &&
						url.map((i, index) => {
							return (
								<div className="relative w-fit p-1" key={index}>
									<img src={i} alt="firebase" />
									<Icon
										icon="ci:off-close"
										onClick={() => {
											handleDelete(i);
										}}
									/>
								</div>
							);
						})}
				</div>
			</div>
		);
	};
	const handleCreateProduct = async () => {
		const body = {
			title: productTitle,
			description: productDescription,
			content: productContent,
			price: productPrice,
			tiket: productTiket,
			images: url,
		};
		const res = await createProduct(body);
		if (res) {
			router.push('/product/' + res.slug);
		}
	};
	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-12/12 px-4">
					<>
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
							<div className="rounded-t bg-white mb-0 px-6 py-6">
								<div className="text-center flex justify-between">
									<h6 className="text-blueGray-700 text-xl font-bold">
										Thêm sản phẩm mới
									</h6>
									<button
										className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
										type="button"
										onClick={handleCreateProduct}
									>
										Thêm
									</button>
								</div>
							</div>
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								<form>
									<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
										Thông tin sản phẩm
									</h6>
									<div className="flex flex-wrap">
										<div className="w-full lg:w-6/12 px-4">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Tên sản phẩm
												</label>
												<input
													type="text"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													value={productTitle}
													onChange={(e) => {
														setProductTitle(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="w-full lg:w-6/12 px-4">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Mô tả sản phẩm
												</label>
												<input
													type="email"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													value={productDescription}
													onChange={(e) => {
														setProductDescription(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="w-full lg:w-6/12 px-4">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Giá
												</label>
												<input
													type="text"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													value={productPrice}
													onChange={(e) => {
														setProductPrice(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="w-full lg:w-6/12 px-4">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Vé vào lớp học
												</label>
												<input
													type="text"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													value={productTiket}
													onChange={(e) => {
														setProductTiket(e.target.value);
													}}
												/>
											</div>
										</div>
									</div>
									<div className="flex flex-wrap">
										<div className="w-full lg:w-12/12 px-4">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Mô tả chi tiết
												</label>
												<textarea
													type="text"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													rows="4"
													value={productContent}
													onChange={(e) => {
														setProductContent(e.target.value);
													}}
												></textarea>
											</div>
										</div>
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<Images />
									</div>
								</form>
							</div>
						</div>
					</>
				</div>
			</div>
		</>
	);
}

CreateProduct.layout = Admin;
