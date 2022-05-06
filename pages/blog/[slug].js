import React, { useState, useEffect } from 'react';
import Navbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/FooterAdmin';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { SEOPage } from '../../components/SEO';
import { getAllBlogs, getBlogBySlug } from 'axios/blogApi';

export async function getServerSideProps(context) {
	const allBlogs = await getAllBlogs();
	const { slug } = context.params;

	const blog = allBlogs.find((blog) => blog.slug === slug);
	if (!blog) {
		return {
			redirect: {
				destination: '/404',
			},
			props: {},
		};
	}

	const blogData = await getBlogBySlug(blog.slug);

	return {
		props: {
			blogData: blogData,
			blog,
		}, // will be passed to the page component as props
	};
}

const BlogDetail = ({ blogData, blog }) => {
	return (
		<>
			<SEOPage href={`/blog/${blog.slug}`} name={blog.title} />
			<Navbar />
			<main>
				<div
					className="absolute top-0 w-full h-400-px bg-center bg-cover"
					style={{
						backgroundImage: `url(${blogData.coverImage[0]})`,
					}}
				>
					<span
						id="blackOverlay"
						className="w-full h-full absolute opacity-80 bg-black"
					></span>
				</div>
				<div className="container relative mx-auto py-40">
					<div className="items-center flex flex-wrap">
						<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
							<div className="pr-12">
								<h1 className="text-white font-semibold text-5xl font-opensans">
									{blogData.title}
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="container relative px-12 lg:px-70 pt-24 pb-16 items-center flex">
					<Image src="/img/brand/vivihandmade.png" width={30} height={30} />
					<div className="flex flex-col mx-4">
						<h1 className="font-bold">Vivi Handmade UIT</h1>
						<a href="/" className="text-blue-500">
							@vivihandmadeuit
						</a>
					</div>
				</div>

				<div
					className="mx-12 lg:mx-70"
					dangerouslySetInnerHTML={{
						__html: blogData.content,
					}}
				></div>
			</main>
			<Footer />
		</>
	);
};

export default BlogDetail;
