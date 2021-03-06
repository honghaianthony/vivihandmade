import React from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import PageChange from 'components/PageChange/PageChange.js';

import AuthProvider from '../context/provider';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'styles/tailwind.css';
import { SEO } from '../components/SEO';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/pacifico';
import '@fontsource/send-flowers';
import '@fontsource/arvo';
import '@fontsource/open-sans';
Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	document.body.classList.add('body-page-transition');
	ReactDOM.render(
		<PageChange path={url} />,
		document.getElementById('page-transition')
	);
});
Router.events.on('routeChangeComplete', () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
	document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
	document.body.classList.remove('body-page-transition');
});

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	render() {
		const { Component, pageProps } = this.props;

		const Layout = Component.layout || (({ children }) => <>{children}</>);

		return (
			<React.Fragment>
				<AuthProvider>
					<Layout>
						<SEO />
						<Component {...pageProps} />
					</Layout>
				</AuthProvider>
			</React.Fragment>
		);
	}
}
