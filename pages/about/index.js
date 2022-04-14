import React from 'react';
import Image from 'next/image';
import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';
import { Icon } from '@iconify/react';
import { SEOPage } from '../../components/SEO';
export default function Profile() {
	return (
		<>
			<SEOPage href="/about" name="Về chúng tôi" />
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
										Về chúng tôi
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
				<section className="relative py-40 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
										<div className="relative -mt-20 flex">
											<Image
												alt="khuongduy"
												src="/img/about/kd.jpg"
												className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
												width={200}
												height={200}
											/>
										</div>
									</div>
								</div>
								<div className="text-center mt-12">
									<h1 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
										Nguyễn Ngọc Khương Duy
									</h1>
									<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-700 font-bold ">
										@nguyenngockhuongduy
									</div>
									<div className="mb-2 text-blueGray-600 mt-10 justify-center flex">
										<Icon
											icon="fa6-solid:suitcase"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Sinh Viên - Làm website
									</div>
									<div className="mb-2 text-blueGray-600 justify-center flex">
										<Icon
											icon="fa-solid:university"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Trường Đại học Công nghệ Thông Tin (UIT)
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-9/12 px-4">
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
												Vivi Handmade - Nơi mọi thứ tuyệt vời về handmade
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="relative py-40 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
										<div className="relative -mt-20 flex">
											<Image
												alt="honghai"
												src="/img/about/hh.jpg"
												className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
												width={200}
												height={200}
											/>
										</div>
									</div>
								</div>
								<div className="text-center mt-12">
									<h1 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
										Đặng Ngô Hồng Hải
									</h1>
									<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-700 font-bold ">
										@anthonyhai
									</div>
									<div className="mb-2 text-blueGray-600 mt-10 justify-center flex">
										<Icon
											icon="fa6-solid:suitcase"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Sinh Viên - Làm website
									</div>
									<div className="mb-2 text-blueGray-600 justify-center flex">
										<Icon
											icon="fa-solid:university"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Trường Đại học Công nghệ Thông Tin (UIT)
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-9/12 px-4">
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
												Vivi Handmade - Tinh hoa của túi xách handmade
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="relative py-40 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
										<div className="relative -mt-20 flex">
											<Image
												alt="binhchuong"
												src="/img/about/bc.jpg"
												className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
												width={200}
												height={200}
											/>
										</div>
									</div>
								</div>
								<div className="text-center mt-12">
									<h1 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
										Trần Bình Chương
									</h1>
									<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-700 font-bold ">
										@tranbinhchuong
									</div>
									<div className="mb-2 text-blueGray-600 mt-10 justify-center flex">
										<Icon
											icon="fa6-solid:suitcase"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Sinh Viên - Làm website
									</div>
									<div className="mb-2 text-blueGray-600 justify-center flex">
										<Icon
											icon="fa-solid:university"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Trường Đại học Công nghệ Thông Tin (UIT)
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-9/12 px-4">
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
												Vivi Handmade - Nơi hội tụ các túi xách handmade đẹp
												nhất
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="relative py-40 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
										<div className="relative -mt-20 flex">
											<Image
												alt="myduyen"
												src="/img/about/md.jpg"
												className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
												width={200}
												height={200}
											/>
										</div>
									</div>
								</div>
								<div className="text-center mt-12">
									<h1 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
										Trương Mỹ Duyên
									</h1>
									<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-700 font-bold ">
										@truongmyduyen
									</div>
									<div className="mb-2 text-blueGray-600 mt-10 justify-center flex">
										<Icon
											icon="fa6-solid:suitcase"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Sinh Viên - Làm website
									</div>
									<div className="mb-2 text-blueGray-600 justify-center flex">
										<Icon
											icon="fa-solid:university"
											className="mr-2 text-lg text-blueGray-400"
										/>
										Trường Đại học Công nghệ Thông Tin (UIT)
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-9/12 px-4">
											<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
												Vivi Handmade - Muốn dùng đồ handmade hãy đến với Vivi
												Handmade
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
