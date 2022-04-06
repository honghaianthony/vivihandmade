import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function index() {
    return (
        <>
            <Navbar />
            <main>
                <div className="relative pt-12"></div>
            </main>
            <Footer />
        </>
    );
}
