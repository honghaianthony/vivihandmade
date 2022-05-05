import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'next/link';

export default function Footer() {
	return (
		<>
			<footer className="relative bg-blueGray-200 pt-8 pb-6">
				<div
					className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap text-center lg:text-left">
						<div className="w-full lg:w-6/12 px-4">
							<h1 className="text-3xl font-semibold font-pacifico">
								Vivi Handmade UIT
							</h1>
							<h2 className="text-lg mt-0 mb-2 text-blueGray-600">
								Handmade là những gì chúng tôi hướng tới cho tương lai.
							</h2>
							<div className="mt-6 lg:mb-0 mb-6 flex justify-center lg:justify-start">
								<a
									href="https://www.facebook.com/ViViHandmade"
									aria-label="Facebook"
									className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
								>
									<Icon icon="akar-icons:facebook-fill" className="ml-3 mt-3" />
								</a>

								<a
									href="mailto:tuongvi841995@gmail.com"
									aria-label="Email"
									className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
								>
									<Icon icon="ant-design:mail-filled" className="ml-3 mt-3" />
								</a>
							</div>
						</div>
						<div className="w-full lg:w-6/12 px-4">
							<div className="flex flex-wrap items-top mb-6">
								<div className="w-full lg:w-4/12 px-4 ml-auto">
									<span className="block uppercase text-blueGray-700 text-lg font-semibold mb-2">
										Liên kết
									</span>
									<ul className="list-unstyled">
										<li className="mb-3">
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold pb-2 text-lg"
												href="/"
											>
												Trang chủ
											</a>
										</li>
										<li className="mb-3">
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold  pb-2 text-lg"
												href="/product"
											>
												Sản phẩm
											</a>
										</li>
										<li className="mb-3">
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold  pb-2 text-lg"
												href="/about"
											>
												Về chúng tôi
											</a>
										</li>
									</ul>
								</div>
								{/* <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/terms?ref=nnjs-footer"
                                            >
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/privacy?ref=nnjs-footer"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
							</div>
						</div>
					</div>
					<hr className="my-6 border-blueGray-300" />
					<div className="flex flex-wrap items-center md:justify-between justify-center">
						<div className="w-full md:w-4/12 px-4 mx-auto text-center">
							<div className="text-sm text-blueGray-700 font-semibold py-1">
								Copyright © {new Date().getFullYear()} Vivi Handmade by{' '}
								<a
									href="mailto:tuongvi841995@gmail.com"
									className="text-blueGray-700 hover:text-blueGray-800"
								>
									Tuong Vi
								</a>
								.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
