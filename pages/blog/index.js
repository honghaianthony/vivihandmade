import React from 'react';
import Image from 'next/image';
import Navbar from 'components/Navbars/AuthNavbar.js';
import Footer from 'components/Footers/Footer.js';
import { Icon } from '@iconify/react';
import { SEOPage } from '../../components/SEO';
import { getAllBlogs } from 'axios/blogApi';
import Link from 'next/link';

export async function getServerSideProps() {
	const allBlogs = await getAllBlogs();

	return {
		props: {
			allBlogs,
		},
	};
}

const Blog = ({ allBlogs }) => {
	return (
		<>
			<SEOPage href="/blog" name="Blog" />
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
							<div className="w-full lg:w-6/12 px-4 mx-auto text-center">
								<div className="pr-12">
									<h1 className="text-white font-semibold text-6xl font-sendflower">
										Blog
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
					<div className="relative z-10 mb-8">
						<div className="px-10 flex flex-col justify-between py-12">
							{allBlogs.map((blog, index) => {
								return (
									<Link href={`/blog/${blog.slug}`}>
										<a className="flex flex-col h-500-px lg:flex-row w-10/12 lg:h-275-px shadow-lg rounded-lg text-left mx-auto mt-5 mb-12 bg-white">
											<figure
												className="relative z-10 w-5/12 m-4 items-center"
												data-category="label"
											>
												<Image
													className="top-0 right-0 bottom-0 left-0 block max-w-full h-full object-cover rounded-lg ease-linear hover:scale-110"
													alt="title"
													src={blog.coverImage[0]}
													width={500}
													height={245}
												/>
											</figure>
											<div className="relative w-7/12 px-2 flex flex-col justify-between mt-2">
												<div className="py-5 px-3" data-category="info">
													<h5 className="text-black text-2xl my-3 hidden text-ellipsis hover:text-blue-400 font-bold">
														{blog.title}
													</h5>

													<p className="mb-10 text-lg leading-relaxed text-blueGray-700 lg:leading-normal lg:overflow-hidden lg:overflow-ellipsis lg:line-clamp-2 lg:h-650">
														{blog.description}
													</p>
												</div>
												<div className="w-full mt-16 py-3 px-3 left-1/2 -translate-x-1/2 flex justify-between align-center  relative bottom-0 text-gray-300 text-sm whitespace-nowrap">
													<div className="flex">
														<p>Tác giả: </p>
														<span className="ml-2 text-blue-500">
															Vivi Handmade UIT
														</span>
													</div>
													<div className="flex items-center mx-4">
														<Icon icon="bi:dot" />
														<span className="ml-1">
															{new Date(blog.updatedAt).toLocaleDateString()}
														</span>
													</div>
												</div>
											</div>
										</a>
									</Link>
								);
							})}
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Blog;
