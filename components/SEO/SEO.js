import { DefaultSeo } from "next-seo";

const SEO = () => {
    return (
        <DefaultSeo
            title="Vivi Handmade"
            description="Vivi Handmade - Thiết kế túi xách thủ công bằng nguyên liệu sợi. Mở các lớp hướng dẫn kĩ thuật đan móc túi xách thủ công. Kinh doanh nguyên liệu và dụng cụ hỗ trợ đan móc túi xách"
            additionalMetaTags={[
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                },
                {
                    httpEquiv: "content-type",
                    content: "text/html; charset=utf-8"
                }, 
                {
                    name: "vivihandmade",
                    content: "túi vivi, túi xách handmade, vivi handmade, tui xach vivi, https://www.vivihandmade.com/"
                },
                {
                    name: "túi xách",
                    content: "túi xách handmade, vivi handmade"
                }
            ]}
            openGraph={{
                type: "website",
                url: "https://www.vivihandmade.com/",
                site_name: "Vivi Handmade",
                description: "Vivi Handmade - Chuyên túi xách thủ công",
                images: [
                    {
                        url: "https://scontent.fdad3-5.fna.fbcdn.net/v/t1.18169-9/23316292_1687143811297427_1147731239945999720_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YXFNFZGHLS4AX_FeORy&_nc_ht=scontent.fdad3-5.fna&oh=00_AT9vv_O56Ih09MAmrl_y7f_LrWcJEI8Or754Iaw1e_0hCA&oe=626A880F",
                        width: 460,
                        height: 460,
                        alt: "Site image",
                    },
                ],
            }}
        />
    );
};

export default SEO;
