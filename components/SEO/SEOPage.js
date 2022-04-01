import { NextSeo } from "next-seo";

const SEOPage = ({ name, href }) => {
    const title = `${name} | Vivi Handmade`;
    const url = `https://www.vivihandmade.com/${href}`;
    return (
        <NextSeo
            title={title}
            openGraph={{ title: title, url, site_name: "Vivi Handmade" }}
        />
    );
};

export default SEOPage;
