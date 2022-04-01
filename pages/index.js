import React, { useEffect } from "react";
import Link from "next/link";

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
                            backgroundImage:
                                "url('https://scontent.fdad3-2.fna.fbcdn.net/v/t31.18172-8/20543800_1602317866446689_605011096871211592_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=nANTCR_ivZQAX-XlMex&_nc_ht=scontent.fdad3-2.fna&oh=00_AT8FYMSGcpzbVuy_RFlh2je7yrlWTN1kFBWmLqKKX1JWFA&oe=626D821F')",
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
                                        Handmade - Nơi mà mỗi sản phẩm chúng tôi
                                        đều chứa đựng tâm tư tình cảm của mình.
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
                                            <i className="fas fa-award"></i>
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
                                            <i className="fas fa-drafting-compass"></i>
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
                                            <i className="fas fa-chalkboard-teacher"></i>
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
                                    <i className="fas fa-shopping-bag text-xl"></i>
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
                                <Link href="/">
                                    <a
                                        href="#pablo"
                                        className="font-bold text-blueGray-700 mt-8"
                                    >
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
                                    <img
                                        alt="..."
                                        src="https://drive.google.com/uc?export=view&id=1pdT92BwI6QYUIjf8NghaqVSIxDN8vOmF"
                                        className="w-full align-middle rounded-t-lg"
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
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/275858000_5304175506260888_8115943721788537176_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=ZJ2UDOLmwlkAX9wlFG0&tn=PjH-Pz7apLSuoRCQ&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT-YPYeEZfVVqTEk0SRUYIWxCZ5WV50Qxkw1vH9jr42Duw&oe=624B2ED6"
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200 mt-5">
                                        <i className="fas fa-child text-xl"></i>
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
                                                        <i className="fas fa-fingerprint"></i>
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
                                                        <i className="fab fa-sketch"></i>
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
                                                        <i className="fas fa-money-check-alt"></i>
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
                            <img
                                src="/img/component-image-homepage.png"
                                alt="Gallery"
                            />
                        </div>
                    </div>
                </section>

                {/* <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    Here are our heroes
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                    According to the National Oceanic and
                                    Atmospheric Administration, Ted, Scambos,
                                    NSIDClead scentist, puts the potentially
                                    record maximum.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src="/img/team-1-800x800.jpg"
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Ryan Tompson
                                        </h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            Web Developer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src="/img/team-2-800x800.jpg"
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Romina Hadid
                                        </h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            Marketing Specialist
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src="/img/team-3-800x800.jpg"
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Alexa Smith
                                        </h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            UI/UX Designer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src="/img/team-4-470x470.png"
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Jenna Kardi
                                        </h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            Founder and CEO
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

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
                                    <i className="fas fa-medal text-xl"></i>
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
                                    <i className="fas fa-poll text-xl"></i>
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
                                    <i className="fas fa-lightbulb text-xl"></i>
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
                                    <img
                                        src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/135516497_3946736428671476_5636357665780578803_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_ohc=XLJ0mrX1AE4AX9Gfzq8&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT8z52AnsQ-LVZ7hQo8jIZXGorJGXlmt_TbnyVFx0bTihQ&oe=626DA55B"
                                        alt="..."
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center mb-4">
                                <div className="w-full rounded-lg shadow-lg ">
                                    <img
                                        src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/261300578_4933256696686106_3951900368897214499_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_ohc=k-ZOL8pdHPkAX8u3bmD&_nc_ht=scontent-hkg4-2.xx&oh=00_AT8YHU1e9VvhLNPEJj54XuNTKJZhNuPXDOCDoq6X-YxOjA&oe=624B4636"
                                        alt="..."
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center mb-4">
                                <div className="w-full rounded-lg shadow-lg">
                                    <img
                                        src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/138383039_3960175640660888_5593142211070280376_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=PEVlBM8KzqkAX_BNzt-&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT9KGSjwMuGqeorb0_yCMcdZKXho4HawE39_PSk2MhhP8g&oe=626C9921"
                                        alt="..."
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
            </main>
            <Footer />
        </>
    );
}
