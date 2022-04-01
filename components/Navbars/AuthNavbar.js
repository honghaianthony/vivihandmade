import React from "react";
import Link from "next/link";
// components

// import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className="text-white text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-pacifico"
                                href="#pablo"
                            >
                                Vivi Handmade
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-white fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen
                                ? " block rounded shadow-lg"
                                : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center"></li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center px-3 lg:text-white hover:text-orange-500 cursor-pointer">
                                <Link href="/">
                                    <a>Trang chủ</a>
                                </Link>
                            </li>
                            <li className="flex items-center px-3 lg:text-white hover:text-orange-500 cursor-pointer">
                                <Link href="/product">
                                    <a>Sản phẩm</a>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://www.facebook.com/ViViHandmade"
                                    target="_blank"
                                >
                                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">
                                        Fanpage
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
