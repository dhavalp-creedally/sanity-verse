"use client"; import React, { useState } from "react";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
                <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/images/creedally-blue.svg"
                            alt="Creedally Logo"
                            className="w-32 h-auto lg:w-40"
                        />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-6 text-base text-[color:var(--color-dark-4)]">
                        <div className="relative group">
                            <button className="hover:text-[var(--primary)] transition-colors duration-200">Home</button>
                        </div>
                        <div className="relative group">
                            <button className="hover:text-[var(--primary)] transition-colors duration-200">Pages</button>
                        </div>
                        <div className="relative group">
                            <button className="hover:text-[var(--primary)] transition-colors duration-200">Blogs</button>
                        </div>
                        <a href="#" className="hover:text-[var(--primary)] transition-colors duration-200">
                            Support
                        </a>
                    </nav>


                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 focus:outline-none"
                            aria-label="Toggle menu">
                            {mobileMenuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
                        </button>
                    </div>

                    {/* Right Side Icons */}
                    <div className="hidden lg:flex items-center gap-x-[10px]">
                        <div className="hidden lg:flex items-center space-x-3 text-gray-500">
                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-primary hover:bg-gray-200 transition-all duration-300"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-primary hover:bg-gray-200 transition-all duration-300"
                            >
                                <FaTwitter size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-primary hover:bg-gray-200 transition-all duration-300"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-primary hover:bg-gray-200 transition-all duration-300"
                            >
                                <FaPinterestP size={16} />
                            </a>

                        </div>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white px-4 py-3 shadow-md">
                        <ul className="flex flex-col space-y-3 text-gray-700 text-sm">
                            <li>
                                <a href="#" className="block hover:text-[var(--primary)]">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block hover:text-[var(--primary)]">
                                    Pages
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block hover:text-[var(--primary)]">
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block hover:text-[var(--primary)]">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </header>

            <div className="relative">
                {/* Background layer */}
                <div className="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray"></div>

                {/* Hero image background for large screens */}
                <div className="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full">
                    <img src="/images/hero-bg.svg" alt="hero" className="w-full h-full object-cover rounded-b-[50px]" />
                </div>
            </div>

            {/* Main Section */}
            <section className="max-w-[1200px] mx-auto px-4 py-4 rounded-b-[50px] relative overflow-hidden z-10 pb-[60px] pt-[60px]">
                {/* Optional intro div */}
                <div></div>

                {/* Grid Container */}
                <div className="grid gap-6">
                    {/* Main Large Blog Card */}
                    <div className="max-w-[1170px] w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-white shadow-sm rounded-xl p-4 lg:p-2.5">
                        <div className="lg:max-w-[536px] w-full">
                            <img src="/images/hero-01.png" alt="hero" className="w-full rounded-lg" />
                        </div>
                        <div className="lg:max-w-[540px] w-full">
                            <a
                                href="category.html"
                                className="inline-flex text-purple-dark bg-purple-500/10 font-bold text-sm py-1 px-3 rounded-full mb-4"
                            >
                                Lifestyle
                            </a>
                            <h1 className="text-3xl font-bold text-[color:var(--color-dark)] mb-4">
                                Begin here to obtain a brief summary encompassing all the essential
                            </h1>
                            <p className="text-[color:var(--color-dark-4)] text-base">
                                This comprehensive post serves as your cheat-sheet to swiftly familiarize yourself with Ghost. Packed with crucial...
                            </p>
                            <div className="flex items-center space-x-2 text-sm mt-5">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Author"
                                    className="w-6 h-6 rounded-full"
                                />
                                <p className="text-sm text-[color:var(--color-dark-4)]">Adrio Devid</p>
                                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-4"></span>
                                <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Two Smaller Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-sm rounded-xl p-2.5">
                            <img src="/images/hero-02.png" alt="hero" className="w-full rounded-lg" />
                            <div className="flex flex-col justify-center lg:max-w-[272px] w-full">
                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-bold w-fit mb-4">Technology</span>
                                <h3 className="font-semibold text-[color:var(--color-dark)] mb-4 text-lg leading-snug">
                                    14 Innovative Architectural Designs to Create a Vast Interior Space
                                </h3>
                                <div className="flex items-center gap-2.5">
                                    <p className="text-sm text-[color:var(--color-dark-4)]">
                                        <a href="author.html">By Adrio Devid</a>
                                    </p>

                                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-4"></span>

                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-sm rounded-xl p-2.5">
                            <img src="/images/hero-03.png" alt="hero" className="w-full rounded-lg" />
                            <div className="flex flex-col justify-center lg:max-w-[272px] w-full">
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-bold w-fit mb-4">Travel</span>
                                <h3 className="font-semibold text-[color:var(--color-dark)] mb-4 text-lg leading-snug">
                                    Traveller Visiting Ice Cave With Amazing Eye-catching view with nature
                                </h3>
                                <div className="flex items-center gap-2.5">
                                    <p className="text-sm text-[color:var(--color-dark-4)]">
                                        <a href="author.html">By Adrio Devid</a>
                                    </p>

                                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-4"></span>

                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1200px] mx-auto px-4 py-4 rounded-b-[50px] relative overflow-hidden z-10 pb-[60px] pt-[60px]">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold">Browse by Category</h2>
                    <p className="text-[color:var(--color-dark-4)] mt-2">
                        Select a category to see more related content
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4 pb-[60px]">
                    <button className="rounded-full border py-2.5 px-5 font-medium bg-dark border-dark text-white hover:bg-dark hover:border-dark hover:text-white transition ease-in duration-200">
                        All (20)
                    </button>
                    <button className="rounded-full border py-2.5 px-5 font-medium bg-gray-100 border-gray-300 text-dark hover:bg-dark hover:border-dark hover:text-white transition ease-in duration-200">
                        Technology (03)
                    </button>
                    <button className="rounded-full border py-2.5 px-5 font-medium bg-gray-100 border-gray-300 text-dark hover:bg-dark hover:border-dark hover:text-white transition ease-in duration-200">
                        Lifestyle (02)
                    </button>
                    <button className="rounded-full border py-2.5 px-5 font-medium bg-gray-100 border-gray-300 text-dark hover:bg-dark hover:border-dark hover:text-white transition ease-in duration-200">
                        Travel (05)
                    </button>
                    <button className="rounded-full border py-2.5 px-5 font-medium bg-gray-100 border-gray-300 text-dark hover:bg-dark hover:border-dark hover:text-white transition ease-in duration-200">
                        Health (09)
                    </button>
                    <button className="rounded-full border py-2.5 px-5 font-medium bg-gray-100 border-gray-300 text-dark hover:bg-dark hover:border-dark hover:text-white transition ease-in duration-200">
                        Culture (01)
                    </button>
                </div>


                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3">
                </div>

                {/* Posts Grid */}
                <div x-show="selectedCategory === 'All'">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5 ">

                        <div className="group">
                            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <a href="blog-single.html">
                                    <img src="/images/hero-01.png" alt="hero" className="w-full" />
                                </a>
                            </div>

                            <h3>
                                <a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
                                    <span className="bg-gradient-to-r from-purple-500/70 to-indigo-400/50 
                                            bg-[length:0%_3px] bg-left-bottom bg-no-repeat 
                                            transition-[background-size] duration-500 
                                            hover:bg-[length:100%_3px]">
                                        Stylish Kitchen And Dining Room With Functional Ideas
                                    </span>
                                </a>
                            </h3>


                            <p className="text-[color:var(--color-dark-4)]">
                                Lorem Ipsum is simply dummy text of the print and
                                typesetting industry...vdsvsdv
                            </p>

                            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                                <div className="flex items-center gap-2.5">
                                    <a href="author.html" className="flex items-center gap-3">
                                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                            <img src="/images/user-01.png" alt="hero" />
                                        </div>
                                        <p className="text-sm text-[color:var(--color-dark-4)]">Adrio Devid</p>
                                    </a>

                                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-4"></span>

                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                                <a href="category.html" className="inline-flex text-blue-600 [background-color:var(--color-catskill)] font-bold text-sm py-1 px-3 rounded-full">Lifestyle</a>
                            </div>
                        </div>


                        <div className="group">
                            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <a href="blog-single.html">
                                    <img src="/images/hero-01.png" alt="hero" className="w-full" />
                                </a>
                            </div>

                            <h3>
                                <a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
                                    <span className="bg-gradient-to-r from-purple-500/70 to-indigo-400/50 
                                            bg-[length:0%_3px] bg-left-bottom bg-no-repeat 
                                            transition-[background-size] duration-500 
                                            hover:bg-[length:100%_3px]">
                                        Stylish Kitchen And Dining Room With Functional Ideas
                                    </span>
                                </a>
                            </h3>
                            <p className="text-[color:var(--color-dark-4)]">
                                Lorem Ipsum is simply dummy text of the print and
                                typesetting industry...
                            </p>

                            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                                <div className="flex items-center gap-2.5">
                                    <a href="author.html" className="flex items-center gap-3">
                                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                            <img src="/images/user-01.png" alt="hero" />
                                        </div>
                                        <p className="text-sm text-[color:var(--color-dark-4)]">Adrio Devid</p>
                                    </a>

                                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-4"></span>


                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                                <a href="category.html" className="inline-flex [color:var(--color-green)] [background-color:var(--color-green-dark)] font-bold text-sm py-1 px-3 rounded-full">Travel</a>

                            </div>
                        </div>


                        <div className="group">
                            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <a href="blog-single.html">
                                    <img src="/images/hero-01.png" alt="hero" className="w-full" />
                                </a>
                            </div>

                            <h3>
                                <a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
                                    <span className="bg-gradient-to-r from-purple-500/70 to-indigo-400/50 
                                            bg-[length:0%_3px] bg-left-bottom bg-no-repeat 
                                            transition-[background-size] duration-500 
                                            hover:bg-[length:100%_3px]">
                                        Stylish Kitchen And Dining Room With Functional Ideas
                                    </span>
                                </a>
                            </h3>
                            <p className="text-[color:var(--color-dark-4)]">
                                Lorem Ipsum is simply dummy text of the print and
                                typesetting industry...
                            </p>

                            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                                <div className="flex items-center gap-2.5">
                                    <a href="author.html" className="flex items-center gap-3">
                                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                            <img src="/images/user-01.png" alt="hero" />
                                        </div>
                                        <p className="text-sm text-[color:var(--color-dark-4)]">Adrio Devid</p>
                                    </a>

                                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-4"></span>

                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                                <a href="category.html" className="inline-flex text-blue-600 [background-color:var(--color-catskill)] font-bold text-sm py-1 px-3 rounded-full">Lifestyle</a>
                            </div>
                        </div>


                        <div className="group">
                            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <a href="blog-single.html">
                                    <img src="/images/hero-01.png" alt="hero" className="w-full" />
                                </a>
                            </div>

                            <h3>
                                <a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
                                    <span className="bg-gradient-to-r from-purple-500/70 to-indigo-400/50 
                                            bg-[length:0%_3px] bg-left-bottom bg-no-repeat 
                                            transition-[background-size] duration-500 
                                            hover:bg-[length:100%_3px]">
                                        Stylish Kitchen And Dining Room With Functional Ideas
                                    </span>
                                </a>
                            </h3>
                            <p className="text-[color:var(--color-dark-4)]">
                                Lorem Ipsum is simply dummy text of the print and
                                typesetting industry...
                            </p>

                            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                                <div className="flex items-center gap-2.5">
                                    <a href="author.html" className="flex items-center gap-3">
                                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                            <img src="/images/user-01.png" alt="hero" />
                                        </div>
                                        <p className="text-sm text-[color:var(--color-dark-4)]">Adrio Devid</p>
                                    </a>

                                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                                <a href="category.html" className="inline-flex [color:var(--color-green)] [background-color:var(--color-green-dark)] font-bold text-sm py-1 px-3 rounded-full">Travel</a>
                            </div>
                        </div>

                        <div className="group">
                            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <a href="blog-single.html">
                                    <img src="/images/hero-01.png" alt="hero" className="w-full" />
                                </a>
                            </div>

                            <h3>
                                <a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
                                    <span className="bg-gradient-to-r from-purple-500/70 to-indigo-400/50 
                                            bg-[length:0%_3px] bg-left-bottom bg-no-repeat 
                                            transition-[background-size] duration-500 
                                            hover:bg-[length:100%_3px]">
                                        Stylish Kitchen And Dining Room With Functional Ideas
                                    </span>
                                </a>
                            </h3>
                            <p className="text-[color:var(--color-dark-4)]">
                                Lorem Ipsum is simply dummy text of the print and
                                typesetting industry...
                            </p>
                            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                                <div className="flex items-center gap-2.5">
                                    <a href="author.html" className="flex items-center gap-3">
                                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                            <img src="/images/user-01.png" alt="hero" />
                                        </div>
                                        <p className="text-sm text-[color:var(--color-dark-4)]">Adrio Devid</p>
                                    </a>

                                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                                <a href="category.html" className="inline-flex text-blue-600 [background-color:var(--color-catskill)] font-bold text-sm py-1 px-3 rounded-full">Technology</a>
                            </div>
                        </div>

                        <div className="group">
                            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <a href="blog-single.html">
                                    <img src="/images/hero-01.png" alt="user" className="w-full" />
                                </a>
                            </div>

                            <h3>
                                <a href="blog-single.html" className="block text-dark font-bold text-xl mb-3.5">
                                    <span className="bg-gradient-to-r from-purple-500/70 to-indigo-400/50 
                                            bg-[length:0%_3px] bg-left-bottom bg-no-repeat 
                                            transition-[background-size] duration-500 
                                            hover:bg-[length:100%_3px]">
                                        Stylish Kitchen And Dining Room With Functional Ideas
                                    </span>
                                </a>
                            </h3>
                            <p className="text-[color:var(--color-dark-4)]">
                                Lorem Ipsum is simply dummy text of the print and
                                typesetting industry...
                            </p>

                            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                                <div className="flex items-center gap-2.5">
                                    <a href="author.html" className="flex items-center gap-3">
                                        <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                            <img src="/images/user-01.png" alt="hero" />
                                        </div>
                                        <p className="text-sm text-[color:var(--color-dark-4)]">Adrio Devid</p>
                                    </a>

                                    <span className="flex w-[3px] h-[3px] rounded-full text-[color:var(--color-dark-4)]"></span>

                                    <p className="text-sm text-[color:var(--color-dark-4)]">Sep 10, 2025</p>
                                </div>
                                <a href="category.html" className="inline-flex [color:var(--color-green)] [background-color:var(--color-green-dark)] font-bold text-sm py-1 px-3 rounded-full">Travel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <a
                        href="#"
                        className="inline-block px-6 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
                    >
                        Browse all Posts
                    </a>

                </div>
            </section>

            <footer className="bg-white border-t text-gray-600 text-sm">
                <div className="max-w-[1200px] mx-auto px-4 py-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">


                    {/* Left Side */}
                    <div className="text-center lg:text-left text-[color:var(--color-dark-4)]">
                        © 2025 CreedAlly. All rights reserved
                    </div>

                    {/* Center Links */}
                    <div className="flex flex-wrap items-center justify-center gap-x-3 text-center text-base text-[color:var(--color-dark-4)]">
                        <a href="#" className="hover:text-[var(--primary)] transition">
                            Privacy
                        </a>
                        <span className="text-gray-400 hidden sm:inline">·</span>
                        <a href="#" className="hover:text-[var(--primary)] transition">
                            Terms
                        </a>
                        <span className="text-gray-400 hidden sm:inline">·</span>
                        <a href="#" className="hover:text-[var(--primary)] transition">
                            Contact
                        </a>
                        <span className="text-gray-400 hidden sm:inline">·</span>
                        <a href="#" className="hover:text-[var(--primary)] transition">
                            Contribute
                        </a>
                    </div>

                    {/* Right Side - Social Icons */}
                    <div className="flex items-center justify-center gap-3">
                        <span className="font-medium hidden sm:inline text-[color:var(--color-dark-4)]">Follow Us:</span>
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-[var(--primary)] hover:bg-gray-100 transition-all duration-300"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Header;




