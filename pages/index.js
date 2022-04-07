import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

import { motion } from "framer-motion";

export default function Landing() {
    const stagger = {
        initial: {
            opacity: 0,
            y: 60,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.9,
                duration: 0.7,
            },
        },
    };
    const variants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
            },
        },
    };
    const variantsRight = {
        initial: {
            opacity: 0,
            x: 200,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
            },
        },
    };
    return (
        <>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('/img/home/pic6.jpg')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Chất lượng trong từng sản phẩm.
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        ViVi Handmade - Nơi mà mỗi sản phẩm
                                        chúng tôi đều chứa đựng tâm tư tình cảm
                                        của mình.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                        style={{ transform: "translateZ(0)" }}
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
                </div>

                <section className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="flex flex-wrap"
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <Icon
                                                icon="carbon:carbon-for-ibm-product"
                                                className="text-xl"
                                            />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Sản phẩm
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Kinh doanh nguyên liệu túi, ví
                                            handmade.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <Icon
                                                icon="fluent:design-ideas-16-regular"
                                                className="text-xl"
                                            />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Thiết kế
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Nhận thiết kế và order các mẫu túi
                                            móc bằng len sợi hợp thời trang.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <Icon
                                                icon="healthicons:i-training-class-outline"
                                                className="text-xl"
                                            />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Đào tạo
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Dạy học online đan móc túi xách bằng
                                            len sợi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-wrap items-center mt-20">
                            <motion.div
                                className="w-full md:w-5/12 px-4 mr-auto ml-auto"
                                variants={variants}
                                initial="initial"
                                animate="animate"
                            >
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <Icon
                                        icon="bi:bag-fill"
                                        className="text-xl"
                                    />
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Thiết kế hợp thời trang
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Chúng tôi sáng tạo các mẫu thiết kế handmade
                                    phù hợp với hiện đại, thời trang. Mọi thứ
                                    đều được làm nên một cách tỉ mỉ.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Sử dụng các chất liệu thân thiện với môi
                                    trường, chúng tôi tin rằng những sản phẩm
                                    này sẽ là xu hướng của tương lai.
                                </p>
                                <Link href="/product">
                                    <a className="font-bold text-blueGray-700 mt-8">
                                        Đến ngay với các sản phẩm!
                                    </a>
                                </Link>
                            </motion.div>

                            <motion.div
                                className="w-full md:w-4/12 px-4 mr-auto ml-auto"
                                variants={variantsRight}
                                initial="initial"
                                animate="animate"
                            >
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                                    <Image
                                        alt="..."
                                        src="/img/home/pic1.jpg"
                                        className="w-full align-middle rounded-t-lg"
                                        width={600}
                                        height={400}
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block h-95-px -top-94-px"
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-blueGray-700 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            Túi xách handmade
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Túi xách được làm từ các chất liệu
                                            vô cùng tự nhiên với len sợi là chủ
                                            yếu.
                                        </p>
                                    </blockquote>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
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
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <Image
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="/img/home/pic2.jpg"
                                    width={600}
                                    height={900}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200 mt-5">
                                        <Icon
                                            icon="bi:people-fill"
                                            className="text-xl"
                                        />
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        Phù hợp với mọi lứa tuổi
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        Chúng tôi đã cho ra các thiết kế vô cùng
                                        thời thượng, phù hợp với mọi lứa tuổi.
                                        Bạn có thể mang bất cứ nơi đâu mà bạn
                                        muốn.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                        <Icon icon="bi:hand-thumbs-up-fill" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Được đan sợi tỉ mỉ
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                        <Icon icon="bxs:diamond" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Người có tay nghề thực
                                                        hiện
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                        <Icon icon="fa-solid:money-check-alt" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Giá cả phải chăng
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    Mẫu mã đa dạng
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                    Các thiết kế của chúng tôi đến từ những
                                    người trong nghề cũng như các học viên nên
                                    sự sáng tạo có trong từng sản phẩm phong
                                    phú.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-7/10 md:w-6/12 mx-auto justify-center items-center">
                            <Image
                                src="/img/component-image-homepage.png"
                                alt="Gallery"
                                width={625}
                                height={614}
                            />
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-blueGray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
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
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Lớp học online móc túi xách bằng len sợi
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                                    Đến với lớp học này, bạn sẽ được học những
                                    điều vô cùng bổ ích về cách tạo ra một chiếc
                                    túi xách xinh xắn hoàn toàn bằng handmade.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <Icon
                                        icon="fa-solid:medal"
                                        className="text-xl"
                                    />
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Người dạy có kinh nghiệm
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Lớp học được thực hiện bởi người có kinh
                                    nghiệm trong làm đồ handmade nhiều năm liền.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <Icon
                                        icon="fa6-solid:ranking-star"
                                        className="text-xl"
                                    />
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Được nhiều người học
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Ngày nay có nhiều người muốn tự tay thiết kế
                                    cho riêng mình những món đồ handmade, họ đã
                                    tìm đến các lớp học để có thể thực hiện ước
                                    mơ của mình.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <Icon
                                        icon="ant-design:bulb-filled"
                                        className="text-xl"
                                    />
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Phát triển kỹ năng
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Sau khi được học hỏi, học viên có thể tự tạo
                                    ra những món đồ handmade yêu thích của riêng
                                    mình.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center mb-4">
                                <div className="w-full rounded-lg shadow-lg">
                                    <Image
                                        src="/img/home/pic3.jpg"
                                        alt="..."
                                        className="rounded-lg shadow-lg"
                                        width={600}
                                        height={900}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center mb-4">
                                <div className="w-full rounded-lg shadow-lg ">
                                    <Image
                                        src="/img/home/pic4.jpg"
                                        alt="..."
                                        className="rounded-lg shadow-lg"
                                        width={600}
                                        height={900}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center mb-4">
                                <div className="w-full rounded-lg shadow-lg">
                                    <Image
                                        src="/img/home/pic5.jpg"
                                        alt="..."
                                        className="rounded-lg shadow-lg"
                                        width={600}
                                        height={900}
                                    />
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
