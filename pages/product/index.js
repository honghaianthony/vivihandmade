import React from 'react';
import Image from 'next/image';
import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';
import { Icon } from '@iconify/react';
import { SEOPage } from '../../components/SEO';
import Link from 'next/link';
import { getAllProducts } from 'axios/productApi';

export async function getServerSideProps() {
	const allProducts = await getAllProducts();

	return {
		props: {
			allProducts,
		},
	};
}

export default function index({ allProducts }) {
	return (
		<>
			<SEOPage href="/product" name="Sản phẩm" />
			<Navbar transparent />
			<main className="profile-page">
				<section className="relative block h-500-px">
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage: "url('/img/home/pic6.jpg')",
						}}
					>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-50 bg-black"
						></span>
					</div>
					<div className="container relative mx-auto py-40">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<div className="pr-12">
									<h1 className="text-white font-semibold text-6xl font-sendflower">
										Sản phẩm
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
						style={{ transform: 'translateZ(0)' }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-blueGray-200 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</section>

				<div className="flex flex-col my-4 lg:grid lg:grid-cols-3">
					{allProducts.map((product, index) => {
						return (
							<section
								className="relative py-16 bg-blueGray-200 my-32 w-full h-auto "
								key={index}
							>
								<div className="container mx-auto px-4">
									<div className="relative flex flex-col min-w-0 break-words bg-white hover:bg-teal-200 w-full mb-6 shadow-xl rounded-lg -mt-64">
										<div className="px-6">
											<div className="flex flex-wrap justify-center">
												<div className="w-full lg:w-8/12 md:w-6/12 px-4 lg:order-1 flex justify-center">
													<div className="relative -mt-20 flex">
														<Image
															alt="Handmade bag number 5-1"
															src={product.images[0]}
															className="rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
															width={800}
															height={800}
														/>
													</div>
												</div>
											</div>
											<div className="text-center mt-5">
												<div className="flex flex-wrap justify-center">
													<div className="py-6 px-3 mt-32 sm:mt-0">
														<Link href={`/product/${product.slug}`}>
															<a className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
																Xem thông tin chi tiết
															</a>
														</Link>
													</div>
												</div>
												<h1 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
													{product.title}
												</h1>
												<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-700 font-bold uppercase justify-center flex">
													<Icon
														icon="bx:store"
														className="mr-2 text-lg text-blueGray-700"
													/>{' '}
													ViVi Handmade UIT
												</div>
												<div className="mb-2 text-blueGray-600 mt-10 justify-center flex">
													<Icon
														icon="fluent:style-guide-20-filled"
														className="mr-2 text-2xl text-blueGray-400"
													/>{' '}
													Hợp thời trang, phong cách hiện đại, trẻ trung
												</div>
												<div className="mb-2 text-blueGray-600 justify-center flex">
													<Icon
														icon="fa:shopping-bag"
														className="mr-2 text-2xl text-blueGray-400"
													/>{' '}
													Được đan móc tỉ mỉ, cẩn thận cùng với những chất liệu
													tốt
												</div>
											</div>
											<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
												<div className="flex flex-wrap justify-center">
													<div className="w-full lg:w-9/12 px-4">
														<p className="mb-4 text-lg leading-relaxed text-blueGray-700 lg:leading-normal lg:overflow-hidden lg:overflow-ellipsis lg:line-clamp-2 lg:h-650">
															{product.description}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						);
					})}
				</div>
			</main>
			<Footer />
		</>
	);
}
