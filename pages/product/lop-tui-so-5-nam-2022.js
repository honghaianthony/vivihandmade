import React, { useState, useEffect } from "react";
import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/FooterAdmin";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { SEOPage } from "../../components/SEO";

export default function ProductDetail(products) {
    const [rating, setRating] = useState();
    const [hover, setHover] = useState(null);
    const [product, setProduct] = useState(null);
    const [active, setActive] = useState(false);

    // [{
    //     titlte, descdesc, image, active: true
    // }]

    function activeImage(index) {
        setProduct(
            product.map((product, productIndex) => ({
                ...product,
                active: index == productIndex,
            }))
        );
    }

    // useEffect(() => {
    //     const bigImg = document.querySelector(
    //         ".product-content-left-big-img Image"
    //     );
    //     const smallImg = document.querySelectorAll(
    //         ".product-content-left-small-img Image"
    //     );

    //     smallImg.forEach(function (imgItem, X) {
    //         imgItem.addEventListener("click", function () {
    //             bigImg.src = imgItem.src;
    //         });
    //     });
    // }, []);

    return (
        <>
            <SEOPage
                href="/product/lop-tui-so-5-nam-2022"
                name="Lớp túi số 5 năm 2022"
            />
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
                    <Link href="/product/lop-tui-so-5-2022">
                        <a className="hover:text-lightBlue-600">
                            Lớp túi số 5 năm 2022
                        </a>
                    </Link>
                </div>

                <div className="container mx-auto px-4 mt-5 flex flex-row">
                    <div className="flex flex-col md:flex md:flex-col">
                        <div className="md:flex md:flex-row">
                            <div
                                className="w-7/10 ml-auto mr-auto px-4 relative md:h-32 md:min-w-35"
                                style={{
                                    position: "relative",
                                    height: "650px",
                                }}
                            >
                                <Image
                                    alt="..."
                                    className="max-w-full shadow-lg "
                                    src="/img/lop05/lop-tui-so-5-2022-06.jpg"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="w-full md:w-10/12 px-4 mt-3">
                                <div className="flex flex-row md:flex-col pl-4">
                                    <div className="mr-4">
                                        <Image
                                            src="/img/lop05/lop-tui-so-5-2022-07.jpg"
                                            alt="..."
                                            className="w-1/5 mr-auto cursor-pointer md:mb-4"
                                            width={112}
                                            height={150}
                                        />
                                    </div>
                                    <div className="mr-4">
                                        <Image
                                            src="/img/lop05/lop-tui-so-5-2022-02.jpg"
                                            alt="..."
                                            className="w-1/5 mx-auto cursor-pointer md:mb-4"
                                            width={112}
                                            height={150}
                                        />
                                    </div>
                                    <div className="mr-4">
                                        <Image
                                            src="/img/lop05/lop-tui-so-5-2022-05.jpg"
                                            alt="..."
                                            className="w-1/5 mr-auto cursor-pointer md:mb-4"
                                            width={112}
                                            height={150}
                                        />
                                    </div>
                                    <div className="mr-4">
                                        <Image
                                            src="/img/lop05/lop-tui-so-5-2022-03.jpg"
                                            alt="..."
                                            className="w-1/5 mr-auto cursor-pointer md:mb-4"
                                            width={112}
                                            height={150}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                <h2 className="font-bold grid place-items-center text-3xl">
                                    Lớp túi số 5 năm 2022
                                </h2>
                                <p className="mt-3 mx-auto flex">
                                    Lớp túi số 5 năm 2022 đã xong, xong rùi mới
                                    thấy cưng ơi là cưng, một kiểu túi lạ mắt và
                                    dễ phối đồ cộng thêm hoạ tiết đang hot trend
                                    😘
                                </p>
                                <p className="mt-3 font-bold text-2xl">
                                    Set nguyên liệu:{" "}
                                    <span className="text-red-500">
                                        295.000<sup>đ</sup>
                                    </span>
                                </p>
                                <p className="mt-3 font-bold text-2xl">
                                    Vé hướng dẫn:{" "}
                                    <span className="text-red-500">
                                        100.000<sup>đ</sup>
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
                                                    onClick={() =>
                                                        setRating(ratingValue)
                                                    }
                                                />
                                                <FaStar
                                                    size={20}
                                                    className="cursor-pointer transition color 200ms"
                                                    color={
                                                        ratingValue <=
                                                        (hover || rating)
                                                            ? "#ffc107"
                                                            : "#e4e5e9"
                                                    }
                                                    onMouseEnter={() =>
                                                        setHover(ratingValue)
                                                    }
                                                    onMouseLeave={() =>
                                                        setHover(null)
                                                    }
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
                                <div className="mt-2 flex flex-col"></div>

                                <p className="mt-3 flex">
                                    <Icon
                                        icon="ant-design:heart-filled"
                                        className="text-red-500 mr-3 text-2xl"
                                    />{" "}
                                    Lớp túi 71: Túi hoạ tiết thoi khoá vặn by
                                    Vivi Handmade
                                </p>
                                <p className="mt-3 flex">
                                    <Icon
                                        icon="ant-design:heart-filled"
                                        className="text-red-500 mr-3 text-2xl"
                                    />{" "}
                                    Size: 20x14x8
                                </p>
                                <p className="mt-3 flex">
                                    <Icon
                                        icon="ant-design:heart-filled"
                                        className="text-red-500 mr-3 text-2xl"
                                    />{" "}
                                    Mẫu móc toàn bộ (không phải thêu nha)
                                </p>
                                <p className="mt-3 flex">
                                    <Icon
                                        icon="ant-design:heart-filled"
                                        className="text-red-500 mr-3 text-2xl"
                                    />{" "}
                                    Độ khó: 7/10
                                </p>
                                <p className="mt-5 font-bold">
                                    Set Nguyên liệu:
                                </p>
                                <p className="mt-2">
                                    3 cuộn sợi dệt (đen, be nhạt, nâu đỏ)
                                </p>
                                <p className="mt-2">1 tấm canvas</p>
                                <p className="mt-2">1 tấm canvas</p>
                                <p className="mt-2">1 bộ lót túi</p>
                                <p className="mt-2">1 bộ đế túi</p>
                                <p className="mt-2">1 khoá vặn</p>
                                <p className="mt-2">1 cục bông treo túi</p>
                                <p className="mt-2">1 cặp chốt quai</p>
                                <p className="mt-2">1 khoá kim</p>
                                <p className="mt-2">1 cặp cua</p>
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
                                        Nguyên liệu:{" "}
                                        <span className="text-red-500">
                                            295k/set
                                        </span>
                                    </h3>
                                    <h3 className="text-xl font-semibold justify-center mt-2">
                                        Phí hướng dẫn:{" "}
                                        <span className="text-red-500">
                                            100k/vé
                                        </span>
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
                                        Nguyên liệu:{" "}
                                        <span className="text-red-500">
                                            295k/set
                                        </span>
                                    </h3>
                                    <h3 className="text-xl font-semibold justify-center mt-2">
                                        Phí hướng dẫn:{" "}
                                        <span className="text-red-500">
                                            100k/vé
                                        </span>
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
                                        Nguyên liệu:{" "}
                                        <span className="text-red-500">
                                            295k/set
                                        </span>
                                    </h3>
                                    <h3 className="text-xl font-semibold justify-center mt-2">
                                        Phí hướng dẫn:{" "}
                                        <span className="text-red-500">
                                            100k/vé
                                        </span>
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
                                        Nguyên liệu:{" "}
                                        <span className="text-red-500">
                                            295k/set
                                        </span>
                                    </h3>
                                    <h3 className="text-xl font-semibold justify-center mt-2">
                                        Phí hướng dẫn:{" "}
                                        <span className="text-red-500">
                                            100k/vé
                                        </span>
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
