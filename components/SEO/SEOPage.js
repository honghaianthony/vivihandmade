import { NextSeo } from 'next-seo';

const SEOPage = ({ name, href }) => {
	const title = `${name} | Vivi Handmade UIT`;
	const url = `https://www.vivihandmade.com/${href}`;
	return (
		<NextSeo
			title={title}
			openGraph={{ title: title, url, site_name: 'Vivi Handmade UIT' }}
		/>
	);
};

export default SEOPage;
