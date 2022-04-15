import React, { useState, useEffect } from 'react';
import Navbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/FooterAdmin';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { SEOPage } from '../../components/SEO';
import { getAllProducts, getProductById } from 'axios/productApi';

export async function getStaticPaths() {
	const allProducts = await getAllProducts();
	const paths = allProducts.map((product) => {
		return {
			params: {
				slug: product.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const allProducts = await getAllProducts();
	const { slug } = context.params;

	const product = allProducts.find((product) => product.slug === slug);
	if (!product) {
		return {
			redirect: {
				destination: '/404',
			},
			props: {},
		};
	}

	const productData = await getProductById(product.slug);

	return {
		props: {
			productData: productData,
			product,
		}, // will be passed to the page component as props
	};
}

export default function ProductDetail({ productData, product }) {
	const [rating, setRating] = useState();
	const [hover, setHover] = useState(null);
	console.log(productData);
	return (
		<>
			<SEOPage href={`/product/${product.slug}`} name={product.title} />
			<Navbar />
			<main>
				<div className="flex flex-row relative pt-24 pl-4 lg:pl-40 md:px-10">
					<Link href="/">
						<a className="hover:text-lightBlue-600">Trang chủ</a>
					</Link>
					<i className="pt-1 px-2">
						<FaAngleRight />
					</i>
					<Link href="/product">
						<a className="hover:text-lightBlue-600">Sản phẩm</a>
					</Link>
					<i className="pt-1 px-2">
						<FaAngleRight />
					</i>
					<Link href={`/product/${product.slug}`}>
						<a className="hover:text-lightBlue-600">{product.title}</a>
					</Link>
				</div>

				<div className="container mx-auto px-4 mt-5 flex flex-row">
					<div className="flex flex-col md:flex md:flex-col">
						<div className="md:flex md:flex-row">
							<div
								className="w-7/10 ml-auto mr-auto px-4 relative md:h-32 md:min-w-35"
								style={{
									position: 'relative',
									height: '650px',
								}}
							>
								<Image
									alt="Handmade bag number 5-1"
									className="max-w-full shadow-lg "
									src={productData.images[0]}
									layout="fill"
									objectFit="contain"
								/>
							</div>
							<div className="w-full md:w-10/12 px-4 mt-3">
								<div className="flex flex-row md:flex-col pl-4">
									{productData.images.map((i, index) => {
										return (
											<div className="mr-4" key={index}>
												<Image
													src={i}
													alt={'Handmade bag number 5-' + index}
													className="w-1/5 mr-auto cursor-pointer md:mb-4"
													width={112}
													height={150}
												/>
											</div>
										);
									})}
								</div>
							</div>
							<div className="w-full mt-5">
								<h2 className="font-bold grid place-items-center text-3xl">
									{productData.title}
								</h2>
								<p className="mt-3 mx-auto flex">{productData.description}</p>
								<p className="mt-3 font-bold text-2xl">
									Set nguyên liệu:{' '}
									<span className="text-red-500">
										{productData.price}
										<sup>đ</sup>
									</span>
								</p>
								<p className="mt-3 font-bold text-2xl">
									Vé hướng dẫn:{' '}
									<span className="text-red-500">
										{productData.ticket}
										<sup>đ</sup>
									</span>
								</p>
								<div className="mt-5 flex flex-row">
									{[...Array(5)].map((star, i) => {
										const ratingValue = i + 1;
										return (
											<label>
												<input
													type="radio"
													name="rating"
													className="hidden"
													value={ratingValue}
													onClick={() => setRating(ratingValue)}
												/>
												<FaStar
													size={20}
													className="cursor-pointer transition color 200ms"
													color={
														ratingValue <= (hover || rating)
															? '#ffc107'
															: '#e4e5e9'
													}
													onMouseEnter={() => setHover(ratingValue)}
													onMouseLeave={() => setHover(null)}
												/>
											</label>
										);
									})}
								</div>
								<p className="mt-3 ">Đánh giá ({rating})</p>
								<div className="mt-5 grid place-items-center">
									<Link href="https://www.facebook.com/ViViHandmade">
										<a
											target="_blank"
											className="text-white hover:text-blue-800 visited:text-purple-600 bg-orange-500 px-3 py-3 rounded-lg mt-3"
											rel="noreferrer"
										>
											Đặt mua trên Facebook Vivi Handmade
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="md:flex md:flex-col md:items-center">
							<div className="mt-5 flex flex-col md:items-center">
								<h2 className="text-red-500 justify-center text-xl font-semibold">
									Mô tả
								</h2>
								<span className="mt-2 mb-3 relative block w-12 h-1 bg-orange-500 justify-center"></span>
							</div>
							<div>
								<div className="mt-2 flex flex-col">{productData.content}</div>
							</div>
							<div className="mt-5 flex flex-col md:items-center">
								<h2 className="text-red-500 justify-center text-xl font-semibold">
									Mới nhất
								</h2>
								<span className="mt-2 mb-3 relative block w-12 h-1 bg-orange-500 justify-center"></span>
							</div>
							<div className="md:flex md:flex-row md:px-4">
								<div className="mt-2 flex flex-col items-center md:px-4">
									<Image
										src="/img/lop05/lop-tui-so-5-2022-07.jpg"
										alt="The picture of handamde"
										width={350}
										height={500}
									/>
									<h3 className="text-xl font-semibold justify-center mt-3">
										Nguyên liệu: <span className="text-red-500">295k/set</span>
									</h3>
									<h3 className="text-xl font-semibold justify-center mt-2">
										Phí hướng dẫn: <span className="text-red-500">100k/vé</span>
									</h3>
								</div>
								<div className="mt-2 flex flex-col items-center md:px-4">
									<Image
										src="/img/lop05/lop-tui-so-5-2022-02.jpg"
										alt="The picture of handamde"
										width={350}
										height={500}
									/>
									<h3 className="text-xl font-semibold justify-center mt-3">
										Nguyên liệu: <span className="text-red-500">295k/set</span>
									</h3>
									<h3 className="text-xl font-semibold justify-center mt-2">
										Phí hướng dẫn: <span className="text-red-500">100k/vé</span>
									</h3>
								</div>
								<div className="mt-2 flex flex-col items-center md:px-4">
									<Image
										src="/img/lop05/lop-tui-so-5-2022-05.jpg"
										alt="The picture of handamde"
										width={350}
										height={500}
									/>
									<h3 className="text-xl font-semibold justify-center mt-3">
										Nguyên liệu: <span className="text-red-500">295k/set</span>
									</h3>
									<h3 className="text-xl font-semibold justify-center mt-2">
										Phí hướng dẫn: <span className="text-red-500">100k/vé</span>
									</h3>
								</div>
								<div className="mt-2 flex flex-col items-center md:px-4">
									<Image
										src="/img/lop05/lop-tui-so-5-2022-03.jpg"
										alt="The picture of handamde"
										width={350}
										height={500}
									/>
									<h3 className="text-xl font-semibold justify-center mt-3">
										Nguyên liệu: <span className="text-red-500">295k/set</span>
									</h3>
									<h3 className="text-xl font-semibold justify-center mt-2">
										Phí hướng dẫn: <span className="text-red-500">100k/vé</span>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
