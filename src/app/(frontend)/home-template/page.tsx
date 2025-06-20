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
                    <h2 className="text-4xl font-bold text-[color:var(--color-dark)]">Browse by Category</h2>
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

            <section className="py-12 relative overflow-hidden z-10 bg-gray-100">
                {/* Background Dots */}
                <div className="absolute inset-0 -z-10 max-w-[1200px] mx-auto px-4 py-4">
                    <img
                        src="/images/bg-dots.svg"
                        alt="dot background"
                        className="w-full h-full object-cover" />
                </div>

                <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="bg-white shadow-md rounded-lg py-9 px-4 sm:px-8 xl:px-10">
                        <div className="flex flex-wrap items-center justify-between gap-10">
                            {/* Left Content */}
                            <div className="max-w-[455px] w-full">
                                <h3 className="text-2xl font-semibold text-[color:var(--color-dark)] mb-3">
                                    Subscribe to Newsletter
                                </h3>
                                <p className="text-[color:var(--color-dark-4)] font-normal">
                                    Provide your email to get notified when we launch new products or publish new articles.
                                </p>
                            </div>

                            {/* Form */}
                            <div className="max-w-[494px] w-full">
                                <form>
                                    <div className="flex items-center gap-5">
                                        <div className="w-full sm:max-w-[350px]">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Enter your Email"
                                                className="w-full py-3.5 px-5 rounded-md border border-gray-300 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-transparent"
                                            />
                                        </div>
                                        <a
                                            href="#"
                                            className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white font-medium rounded-md hover:opacity-90 transition-all duration-300 ease-linear"
                                        >
                                            Subscribe
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="pt-[100px] pb-[100px]">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-4">
                        {/* Left Image */}
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="text-center">
                                <img
                                    src="/images/about-image-1.svg"
                                    alt="About App"
                                    className="max-w-full mx-auto"
                                />
                            </div>
                        </div>

                        {/* Right Text */}
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="max-w-[500px] lg:ml-auto wow fadeInUp">
                                <span className="block mb-2 text-base font-bold text-[var(--primary)]">
                                    About Application
                                </span>
                                <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl text-[color:var(--color-dark)]">
                                    Instant Payment Transfer Saves You Time
                                </h2>
                                <p className="mb-12 text-lg text-[color:var(--color-dark-4)] lg:mb-16">
                                    Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-base font-bold text-[var(--primary)] pt-1 border-b-2 border-transparent hover:border-[var(--primary)] transition-all duration-300"
                                >
                                    Know More About App
                                    <span className="pl-2">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 28 28"
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z" />
                                        </svg>
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-l from-[var(--color-gradient-1)] to-[var(--color-gradient-2)] rounded-[20px] mb-[100px] py-16 mx-4 2xl:mx-[60px] pl-6 lg:pl-10 ">
                <div className="max-w-[1200px] mx-auto px-4 ">
                    <div className="flex flex-col lg:flex-row items-center -mx-4">
                        
                        {/* Left Text Content */}
                        <div className="w-full lg:w-1/2">
                            <div className="mb-14 lg:mb-0 max-w-[470px]">
                                <h2 className="font-semibold text-[color:var(--color-dark)] text-4xl leading-tight mb-8">
                                    Tailwind CSS Template for{" "}
                                    <span className="font-bold">Apps and Software</span>
                                </h2>
                                <p className="mb-16 text-base text-[color:var(--color-dark-4)] font-semibold text-body-color">
                                    All-in-one Tailwind CSS site template for app and software sites.
                                    Includes all essential components, a clean design, and everything you
                                    need for a complete app landing page.
                                </p>

                                <div className="flex items-center flex-wrap gap-6">
                                    <a
                                        href="#about"
                                        className="px-10 py-4 text-base font-bold text-white bg-[var(--primary)] rounded-xl transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                                    >
                                        Explore
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center text-base font-bold text-black dark:text-[color:var(--color-dark)] transition-all hover:text-[var(--primary)] dark:hover:text-[var(--primary)] group"
                                    >
                                        <span className="w-[60px] h-[60px] rounded-full inline-flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] mr-5 transition-all group-hover:bg-[var(--primary)] group-hover:text-white">
                                            <svg
                                                width="15"
                                                height="18"
                                                viewBox="0 0 15 18"
                                                className="fill-current"
                                            >
                                                <path d="M15 9L0 17.6603V0.339746L15 9Z" />
                                            </svg>
                                        </span>
                                        Watch Intro
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative z-10 h-[532px] flex justify-center items-center">
                                <img
                                    src="/images/hero-image-2.svg"
                                    alt="Hero Image"
                                    className="max-w-full mx-auto"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section>
      <div className="bg-[var(--color-gradient-1)] pt-[100px] pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-4 py-4 mx-auto px-4">
          <div className="flex justify-center -mx-4">
            <div className="w-full px-4">
              <div className="max-w-[510px] mx-auto text-center mb-[70px]">
                <h2 className="mb-5 text-3xl font-extrabold text-black sm:text-4xl dark:text-[color:var(--color-dark)]">
                  What Clients Say?
                </h2>
                <p className="text-base font-semibold text-[color:var(--color-dark-4)] text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-wrap -mx-4 lg:-mx-3 xl:-mx-4">
            {/* Card 1 */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 lg:px-3 xl:px-4">
              <div className="bg-white p-10 rounded-[20px] rounded-tl-none relative z-10 overflow-hidden mb-10 group hover:bg-[var(--primary)] transition-all shadow-sm">
                <p className="text-base font-bold text-[color:var(--color-dark)]text-white mb-9 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                  Pellentesque dignissim nisi a odio laoreet luctus.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img
                      src="/images/user-image-1.png"
                      alt="Musharof Chowdhury"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[color:var(--color-dark)]text-white group-hover:text-white">
                      Musharof Chowdhury
                    </h3>
                    <p className="text-xs font-semibold text-[color:var(--color-dark-4)] group-hover:text-white group-hover:text-opacity-70">
                      Web Entrepreneur
                    </p>
                  </div>
                </div>
                <span className="absolute top-0 right-0 -z-1 text-primary group-hover:text-white">
                  <svg width="63" height="30" viewBox="0 0 63 30" className="fill-blue-500 transition-colors duration-300 group-hover:fill-white">
                    <circle cx="7.21563" cy="10.1013" r="1.14106" transform="rotate(-118.771 7.21563 10.1013)"></circle>
                    <circle cx="24.8191" cy="0.43515" r="1.14106" transform="rotate(-118.771 24.8191 0.43515)"></circle>
                    <circle cx="16.7716" cy="27.5037" r="1.14106" transform="rotate(-118.771 16.7716 27.5037)"></circle>
                    <circle cx="2.38256" cy="1.2995" r="1.14106" transform="rotate(-118.771 2.38256 1.2995)"></circle>
                    <circle cx="25.5737" cy="22.6717" r="1.14106" transform="rotate(-118.771 25.5737 22.6717)"></circle>
                    <circle cx="34.3754" cy="17.8386" r="1.14106" transform="rotate(-118.771 34.3754 17.8386)"></circle>
                    <circle cx="43.1771" cy="13.0056" r="1.14106" transform="rotate(-118.771 43.1771 13.0056)"></circle>
                    <circle cx="51.9788" cy="8.17249" r="1.14106" transform="rotate(-118.771 51.9788 8.17249)"></circle>
                    <circle cx="60.5805" cy="3.44925" r="1.14106" transform="rotate(-118.771 60.5805 3.44925)"></circle>
                    <circle cx="11.9389" cy="18.7029" r="1.14106" transform="rotate(-118.771 11.9389 18.7029)"></circle>
                    <circle cx="20.7405" cy="13.8698" r="1.14106" transform="rotate(-118.771 20.7405 13.8698)"></circle>
                    <circle cx="29.5423" cy="9.0368" r="1.14106" transform="rotate(-118.771 29.5423 9.0368)"></circle>
                    <circle cx="38.344" cy="4.2038" r="1.14106" transform="rotate(-118.771 38.344 4.2038)"></circle>
                    <circle cx="47.1458" cy="-0.62915" r="1.14106" transform="rotate(-118.771 47.1458 -0.62915)"></circle>
                  </svg>
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 lg:px-3 xl:px-4">
              <div className="bg-white p-10 rounded-[20px] rounded-tl-none relative z-10 overflow-hidden mb-10 group hover:bg-[var(--primary)] transition-all shadow-testimonial">
                <p className="text-base font-bold text-[color:var(--color-dark)]text-white mb-9 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                  Pellentesque dignissim nisi a odio laoreet luctus.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img
                      src="/images/user-image-2.png"
                      alt="Alex Glorio"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[color:var(--color-dark)]text-white group-hover:text-white">
                      Alex Glorio
                    </h3>
                    <p className="text-xs font-semibold text-[color:var(--color-dark-4)] group-hover:text-white group-hover:text-opacity-70">
                      Graphics Designer
                    </p>
                  </div>
                </div>
                 <span className="absolute top-0 right-0 -z-1 text-primary group-hover:text-white">
                  <svg width="63" height="30" viewBox="0 0 63 30" className="fill-blue-500 transition-colors duration-300 group-hover:fill-white">
                    <circle cx="7.21563" cy="10.1013" r="1.14106" transform="rotate(-118.771 7.21563 10.1013)"></circle>
                    <circle cx="24.8191" cy="0.43515" r="1.14106" transform="rotate(-118.771 24.8191 0.43515)"></circle>
                    <circle cx="16.7716" cy="27.5037" r="1.14106" transform="rotate(-118.771 16.7716 27.5037)"></circle>
                    <circle cx="2.38256" cy="1.2995" r="1.14106" transform="rotate(-118.771 2.38256 1.2995)"></circle>
                    <circle cx="25.5737" cy="22.6717" r="1.14106" transform="rotate(-118.771 25.5737 22.6717)"></circle>
                    <circle cx="34.3754" cy="17.8386" r="1.14106" transform="rotate(-118.771 34.3754 17.8386)"></circle>
                    <circle cx="43.1771" cy="13.0056" r="1.14106" transform="rotate(-118.771 43.1771 13.0056)"></circle>
                    <circle cx="51.9788" cy="8.17249" r="1.14106" transform="rotate(-118.771 51.9788 8.17249)"></circle>
                    <circle cx="60.5805" cy="3.44925" r="1.14106" transform="rotate(-118.771 60.5805 3.44925)"></circle>
                    <circle cx="11.9389" cy="18.7029" r="1.14106" transform="rotate(-118.771 11.9389 18.7029)"></circle>
                    <circle cx="20.7405" cy="13.8698" r="1.14106" transform="rotate(-118.771 20.7405 13.8698)"></circle>
                    <circle cx="29.5423" cy="9.0368" r="1.14106" transform="rotate(-118.771 29.5423 9.0368)"></circle>
                    <circle cx="38.344" cy="4.2038" r="1.14106" transform="rotate(-118.771 38.344 4.2038)"></circle>
                    <circle cx="47.1458" cy="-0.62915" r="1.14106" transform="rotate(-118.771 47.1458 -0.62915)"></circle>
                  </svg>
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 lg:px-3 xl:px-4">
              <div className="bg-white p-10 rounded-[20px] rounded-tl-none relative z-10 overflow-hidden mb-10 group hover:bg-[var(--primary)] transition-all shadow-testimonial">
                <p className="text-base font-bold text-[color:var(--color-dark)]text-white mb-9 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                  Pellentesque dignissim nisi a odio laoreet luctus.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img
                      src="/images/user-image-3.png"
                      alt="Jonathon Smith"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[color:var(--color-dark)]text-white group-hover:text-white">
                      Jonathon Smith
                    </h3>
                    <p className="text-xs font-semibold text-[color:var(--color-dark-4)] group-hover:text-white group-hover:text-opacity-70">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                 <span className="absolute top-0 right-0 -z-1 text-primary group-hover:text-white">
                  <svg width="63" height="30" viewBox="0 0 63 30" className="fill-blue-500 transition-colors duration-300 group-hover:fill-white">
                    <circle cx="7.21563" cy="10.1013" r="1.14106" transform="rotate(-118.771 7.21563 10.1013)"></circle>
                    <circle cx="24.8191" cy="0.43515" r="1.14106" transform="rotate(-118.771 24.8191 0.43515)"></circle>
                    <circle cx="16.7716" cy="27.5037" r="1.14106" transform="rotate(-118.771 16.7716 27.5037)"></circle>
                    <circle cx="2.38256" cy="1.2995" r="1.14106" transform="rotate(-118.771 2.38256 1.2995)"></circle>
                    <circle cx="25.5737" cy="22.6717" r="1.14106" transform="rotate(-118.771 25.5737 22.6717)"></circle>
                    <circle cx="34.3754" cy="17.8386" r="1.14106" transform="rotate(-118.771 34.3754 17.8386)"></circle>
                    <circle cx="43.1771" cy="13.0056" r="1.14106" transform="rotate(-118.771 43.1771 13.0056)"></circle>
                    <circle cx="51.9788" cy="8.17249" r="1.14106" transform="rotate(-118.771 51.9788 8.17249)"></circle>
                    <circle cx="60.5805" cy="3.44925" r="1.14106" transform="rotate(-118.771 60.5805 3.44925)"></circle>
                    <circle cx="11.9389" cy="18.7029" r="1.14106" transform="rotate(-118.771 11.9389 18.7029)"></circle>
                    <circle cx="20.7405" cy="13.8698" r="1.14106" transform="rotate(-118.771 20.7405 13.8698)"></circle>
                    <circle cx="29.5423" cy="9.0368" r="1.14106" transform="rotate(-118.771 29.5423 9.0368)"></circle>
                    <circle cx="38.344" cy="4.2038" r="1.14106" transform="rotate(-118.771 38.344 4.2038)"></circle>
                    <circle cx="47.1458" cy="-0.62915" r="1.14106" transform="rotate(-118.771 47.1458 -0.62915)"></circle>
                  </svg>
                </span>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3 lg:px-3 xl:px-4">
              <div className="bg-white p-10 rounded-[20px] rounded-tl-none relative z-10 overflow-hidden mb-10 group hover:bg-[var(--primary)] transition-all shadow-testimonial">
                <p className="text-base font-bold text-[color:var(--color-dark)]text-white mb-9 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                  Pellentesque dignissim nisi a odio laoreet luctus.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img
                      src="/images/user-image-3.png"
                      alt="Jonathon Smith"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[color:var(--color-dark)]text-white group-hover:text-white">
                      Jonathon Smith
                    </h3>
                    <p className="text-xs font-semibold text-[color:var(--color-dark-4)] group-hover:text-white group-hover:text-opacity-70">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                 <span className="absolute top-0 right-0 -z-1 text-primary group-hover:text-white">
                  <svg width="63" height="30" viewBox="0 0 63 30" className="fill-blue-500 transition-colors duration-300 group-hover:fill-white">
                    <circle cx="7.21563" cy="10.1013" r="1.14106" transform="rotate(-118.771 7.21563 10.1013)"></circle>
                    <circle cx="24.8191" cy="0.43515" r="1.14106" transform="rotate(-118.771 24.8191 0.43515)"></circle>
                    <circle cx="16.7716" cy="27.5037" r="1.14106" transform="rotate(-118.771 16.7716 27.5037)"></circle>
                    <circle cx="2.38256" cy="1.2995" r="1.14106" transform="rotate(-118.771 2.38256 1.2995)"></circle>
                    <circle cx="25.5737" cy="22.6717" r="1.14106" transform="rotate(-118.771 25.5737 22.6717)"></circle>
                    <circle cx="34.3754" cy="17.8386" r="1.14106" transform="rotate(-118.771 34.3754 17.8386)"></circle>
                    <circle cx="43.1771" cy="13.0056" r="1.14106" transform="rotate(-118.771 43.1771 13.0056)"></circle>
                    <circle cx="51.9788" cy="8.17249" r="1.14106" transform="rotate(-118.771 51.9788 8.17249)"></circle>
                    <circle cx="60.5805" cy="3.44925" r="1.14106" transform="rotate(-118.771 60.5805 3.44925)"></circle>
                    <circle cx="11.9389" cy="18.7029" r="1.14106" transform="rotate(-118.771 11.9389 18.7029)"></circle>
                    <circle cx="20.7405" cy="13.8698" r="1.14106" transform="rotate(-118.771 20.7405 13.8698)"></circle>
                    <circle cx="29.5423" cy="9.0368" r="1.14106" transform="rotate(-118.771 29.5423 9.0368)"></circle>
                    <circle cx="38.344" cy="4.2038" r="1.14106" transform="rotate(-118.771 38.344 4.2038)"></circle>
                    <circle cx="47.1458" cy="-0.62915" r="1.14106" transform="rotate(-118.771 47.1458 -0.62915)"></circle>
                  </svg>
                </span>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3 lg:px-3 xl:px-4">
              <div className="bg-white p-10 rounded-[20px] rounded-tl-none relative z-10 overflow-hidden mb-10 group hover:bg-[var(--primary)] transition-all shadow-testimonial">
                <p className="text-base font-bold text-[color:var(--color-dark)]text-white mb-9 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                  Pellentesque dignissim nisi a odio laoreet luctus.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img
                      src="/images/user-image-3.png"
                      alt="Jonathon Smith"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[color:var(--color-dark)]text-white group-hover:text-white">
                      Jonathon Smith
                    </h3>
                    <p className="text-xs font-semibold text-[color:var(--color-dark-4)] group-hover:text-white group-hover:text-opacity-70">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                 <span className="absolute top-0 right-0 -z-1 text-primary group-hover:text-white">
                  <svg width="63" height="30" viewBox="0 0 63 30" className="fill-blue-500 transition-colors duration-300 group-hover:fill-white">
                    <circle cx="7.21563" cy="10.1013" r="1.14106" transform="rotate(-118.771 7.21563 10.1013)"></circle>
                    <circle cx="24.8191" cy="0.43515" r="1.14106" transform="rotate(-118.771 24.8191 0.43515)"></circle>
                    <circle cx="16.7716" cy="27.5037" r="1.14106" transform="rotate(-118.771 16.7716 27.5037)"></circle>
                    <circle cx="2.38256" cy="1.2995" r="1.14106" transform="rotate(-118.771 2.38256 1.2995)"></circle>
                    <circle cx="25.5737" cy="22.6717" r="1.14106" transform="rotate(-118.771 25.5737 22.6717)"></circle>
                    <circle cx="34.3754" cy="17.8386" r="1.14106" transform="rotate(-118.771 34.3754 17.8386)"></circle>
                    <circle cx="43.1771" cy="13.0056" r="1.14106" transform="rotate(-118.771 43.1771 13.0056)"></circle>
                    <circle cx="51.9788" cy="8.17249" r="1.14106" transform="rotate(-118.771 51.9788 8.17249)"></circle>
                    <circle cx="60.5805" cy="3.44925" r="1.14106" transform="rotate(-118.771 60.5805 3.44925)"></circle>
                    <circle cx="11.9389" cy="18.7029" r="1.14106" transform="rotate(-118.771 11.9389 18.7029)"></circle>
                    <circle cx="20.7405" cy="13.8698" r="1.14106" transform="rotate(-118.771 20.7405 13.8698)"></circle>
                    <circle cx="29.5423" cy="9.0368" r="1.14106" transform="rotate(-118.771 29.5423 9.0368)"></circle>
                    <circle cx="38.344" cy="4.2038" r="1.14106" transform="rotate(-118.771 38.344 4.2038)"></circle>
                    <circle cx="47.1458" cy="-0.62915" r="1.14106" transform="rotate(-118.771 47.1458 -0.62915)"></circle>
                  </svg>
                </span>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3 lg:px-3 xl:px-4">
              <div className="bg-white p-10 rounded-[20px] rounded-tl-none relative z-10 overflow-hidden mb-10 group hover:bg-[var(--primary)] transition-all shadow-testimonial">
                <p className="text-base font-bold text-[color:var(--color-dark)]text-white mb-9 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                  Pellentesque dignissim nisi a odio laoreet luctus.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img
                      src="/images/user-image-3.png"
                      alt="Jonathon Smith"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[color:var(--color-dark)]text-white group-hover:text-white">
                      Jonathon Smith
                    </h3>
                    <p className="text-xs font-semibold text-[color:var(--color-dark-4)] group-hover:text-white group-hover:text-opacity-70">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                 <span className="absolute top-0 right-0 -z-1 text-primary group-hover:text-white">
                  <svg width="63" height="30" viewBox="0 0 63 30" className="fill-blue-500 transition-colors duration-300 group-hover:fill-white">
                    <circle cx="7.21563" cy="10.1013" r="1.14106" transform="rotate(-118.771 7.21563 10.1013)"></circle>
                    <circle cx="24.8191" cy="0.43515" r="1.14106" transform="rotate(-118.771 24.8191 0.43515)"></circle>
                    <circle cx="16.7716" cy="27.5037" r="1.14106" transform="rotate(-118.771 16.7716 27.5037)"></circle>
                    <circle cx="2.38256" cy="1.2995" r="1.14106" transform="rotate(-118.771 2.38256 1.2995)"></circle>
                    <circle cx="25.5737" cy="22.6717" r="1.14106" transform="rotate(-118.771 25.5737 22.6717)"></circle>
                    <circle cx="34.3754" cy="17.8386" r="1.14106" transform="rotate(-118.771 34.3754 17.8386)"></circle>
                    <circle cx="43.1771" cy="13.0056" r="1.14106" transform="rotate(-118.771 43.1771 13.0056)"></circle>
                    <circle cx="51.9788" cy="8.17249" r="1.14106" transform="rotate(-118.771 51.9788 8.17249)"></circle>
                    <circle cx="60.5805" cy="3.44925" r="1.14106" transform="rotate(-118.771 60.5805 3.44925)"></circle>
                    <circle cx="11.9389" cy="18.7029" r="1.14106" transform="rotate(-118.771 11.9389 18.7029)"></circle>
                    <circle cx="20.7405" cy="13.8698" r="1.14106" transform="rotate(-118.771 20.7405 13.8698)"></circle>
                    <circle cx="29.5423" cy="9.0368" r="1.14106" transform="rotate(-118.771 29.5423 9.0368)"></circle>
                    <circle cx="38.344" cy="4.2038" r="1.14106" transform="rotate(-118.771 38.344 4.2038)"></circle>
                    <circle cx="47.1458" cy="-0.62915" r="1.14106" transform="rotate(-118.771 47.1458 -0.62915)"></circle>
                  </svg>
                </span>
              </div>
            </div>

            {/* Add more cards as needed... */}
          </div>
        </div>
      </div>
    </section>

     <section className="pt-[100px] pb-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 py-4 mx-auto px-4">
        <div className="max-w-[510px] mx-auto text-center mb-[70px] wow fadeInUp">
          <h2 className="mb-5 text-3xl font-extrabold text-black sm:text-4xl dark:text-[color:var(--color-dark)]">
            How it Works?
          </h2>
          <p className="text-base font-semibold text-[color:var(--color-dark-4)]">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {/* Item 1 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-12 mx-auto max-w-[350px] text-center group wow fadeInUp">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-5 rounded-3xl bg-[var(--primary)]/5 transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                 className="fill-[var(--primary)] group-hover:fill-white transition-colors duration-300">
                  <path d="M3.5 21.3843H7V30.1343H35V21.3843H38.5V30.1343C38.5 32.0768 36.9425 33.6343 35 33.6343H7C5.075 33.6343 3.5 32.0768 3.5 30.1343V21.3843ZM21 26.6343L30.7125 17.0793L28.2275 14.6118L22.75 20.0718V3.88428H19.25V20.0718L13.79 14.6118L11.305 17.0968L21 26.6343Z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl dark:text-[color:var(--color-dark)]">
                Download for Free
              </h3>
              <p className="text-base font-semibold text-[color:var(--color-dark-4)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-12 mx-auto max-w-[350px] text-center group wow fadeInUp">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-5 rounded-3xl bg-[var(--primary)]/5 transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  className="fill-[var(--primary)] group-hover:fill-white transition-colors duration-300">
                  <path d="M21 7.38428C22.8565 7.38428 24.637 8.12177 25.9497 9.43453C27.2625 10.7473 28 12.5278 28 14.3843C28 16.2408 27.2625 18.0213 25.9497 19.334C24.637 20.6468 22.8565 21.3843 21 21.3843C19.1435 21.3843 17.363 20.6468 16.0503 19.334C14.7375 18.0213 14 16.2408 14 14.3843C14 12.5278 14.7375 10.7473 16.0503 9.43453C17.363 8.12177 19.1435 7.38428 21 7.38428ZM21 24.8843C28.735 24.8843 35 28.0168 35 31.8843V35.3843H7V31.8843C7 28.0168 13.265 24.8843 21 24.8843Z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl dark:text-[color:var(--color-dark)]">
                Open an Account
              </h3>
              <p className="text-base font-semibold text-[color:var(--color-dark-4)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-12 mx-auto max-w-[350px] text-center group wow fadeInUp">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-5 rounded-3xl bg-[var(--primary)]/5 transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  className="fill-[var(--primary)] group-hover:fill-white transition-colors duration-300">
                  <path d="M13.825 37.9568C10.5 35.0518 9.3625 30.4318 10.815 26.3543L14.5425 15.9768C14.9275 14.9093 16.38 14.7693 16.9575 15.7493L17.5 16.7118C17.92 17.3943 18.0075 18.2343 17.745 18.9868L16.03 23.7818L16.7825 24.4468L27.2125 12.6343C27.825 11.9343 28.875 11.8643 29.5925 12.4768C30.275 13.0893 30.345 14.1568 29.75 14.8393L21.9625 23.6418L22.9775 24.5343L32.515 13.7193C33.1275 13.0193 34.195 12.9493 34.8775 13.5618C35.5775 14.1743 35.6475 15.2593 35 15.9418L25.48 26.7568L26.495 27.6493L34.7025 18.3393C35.315 17.6393 36.3825 17.5693 37.065 18.1818C37.7475 18.7943 37.835 19.8618 37.2225 20.5093L29.015 29.8543L30.0125 30.7468L35.56 24.4643C36.1725 23.7643 37.24 23.6943 37.94 24.3068C38.64 24.9193 38.6925 25.9868 38.08 26.6343L28.98 36.9943C25.06 41.4568 18.27 41.8768 13.825 37.9568Z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl dark:text-[color:var(--color-dark)]">
                Enjoy our App
              </h3>
              <p className="text-base font-semibold text-[color:var(--color-dark-4)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" className="pt-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 py-4 mx-auto px-4">
        <div className="flex justify-center -mx-4 ">
          <div className="w-full px-4 ">
            <div className="max-w-[510px] mx-auto text-center mb-[70px]">
              <h2 className="mb-5 text-3xl font-extrabold text-[color:var(--color-dark)] sm:text-4xl">
                Our Recent Awards
              </h2>
              <p className="text-base font-semibold text-[color:var(--color-dark-4)]">
                There are many variations of passages of Lorem Ipsum available but the
                majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Box 1 */}
          <div className="w-full px-4 md:w-1/2 xl:w-1/3 mb-8">
            <div className="bg-white p-10 rounded-[20px] shadow-2xl h-full">
              <div className="flex items-center mb-6">
                <span className="pr-[10px]">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-violet-500">
                    <circle cx="16" cy="16" r="16" fill="currentColor"></circle>
                    <path d="M24 14.0968L18.248 13.5747L16 8L13.752 13.5747L8 14.0968L12.36 18.08L11.056 24L16 20.8589L20.944 24L19.632 18.08L24 14.0968Z" fill="white"></path>
                  </svg>
                </span>
                <span className="text-lg font-bold text-[color:var(--color-dark)]">4.9 Rating</span>
              </div>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  <img src="/images/person-1.png" width={38} height={38} alt="person" className="rounded-full border-2 border-white" />
                  <img src="/images/person-2.png" width={38} height={38} alt="person" className="rounded-full border-2 border-white -ml-3" />
                  <img src="/images/person-3.png" width={38} height={38} alt="person" className="rounded-full border-2 border-white -ml-3" />
                </div>
                <span className="pl-4 text-base font-semibold text-[color:var(--color-dark)]">
                  +195K raters
                </span>
              </div>
              <p className="text-base text-[color:var(--color-dark-4)] mb-9">
                Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.
              </p>
              <a href="#" className="inline-flex items-center text-base font-bold text-[var(--primary)] pt-1 border-b-2 border-transparent hover:border-[var(--primary)]">
                Rate Our Application
                <span className="pl-2">
                  <svg width="28" height="28" viewBox="0 0 28 28" className="fill-current">
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full px-4 md:w-1/2 xl:w-1/3 mb-8">
            <div className="bg-white p-10 rounded-[20px] shadow-2xl h-full">
              <div className="flex items-center mb-6">
                <span className="pr-[10px]">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-violet-500">
                    <circle cx="16" cy="16" r="16" fill="currentColor"></circle>
                    <path d="M19.3333 10.6666V9.33325H12.6667V10.6666H9.33334V15.3333C9.33334 16.0666 9.93334 16.6666 10.6667 16.6666H12.7333C13 17.9733 14.0267 18.9999 15.3333 19.2666V20.7199C13.3333 21.0266 13.3333 22.6666 13.3333 22.6666H18.6667C18.6667 22.6666 18.6667 21.0266 16.6667 20.7199V19.2666C17.9733 18.9999 19 17.9733 19.2667 16.6666H21.3333C22.0667 16.6666 22.6667 16.0666 22.6667 15.3333V10.6666H19.3333Z" fill="white"></path>
                  </svg>
                </span>
                <span className="text-lg font-bold text-[color:var(--color-dark)]">Awwwards</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[color:var(--color-dark)]">
                  Best of trendy design in <span className="text-primary">2024</span> on Awwwards
                </h3>
              </div>
              <p className="text-base text-[color:var(--color-dark-4)] mb-9">
                Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.
              </p>
              <a href="#" className="inline-flex items-center text-base font-bold text-[var(--primary)] pt-1 border-b-2 border-transparent hover:border-[var(--primary)]">
                Go to Awards
                <span className="pl-2">
                  <svg width="28" height="28" viewBox="0 0 28 28" className="fill-current">
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full px-4 md:w-1/2 xl:w-1/3 mb-8">
            <div className="bg-white p-10 rounded-[20px] shadow-2xl h-full">
              <div className="flex items-center mb-6">
                <img src="/images/creedally-blue.svg" alt="logo" width={150} height={30} />
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[color:var(--color-dark)]">
                  Appwind is the best app for online payments.
                </h3>
              </div>
              <p className="text-base text-[color:var(--color-dark-4)] mb-9">
                Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.
              </p>
              <a href="#" className="inline-flex items-center text-base font-bold text-[var(--primary)] pt-1 border-b-2 border-transparent hover:border-[var(--primary)]">
                Know More
                <span className="pl-2">
                  <svg width="28" height="28" viewBox="0 0 28 28" className="fill-current">
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

            <footer className="bg-white border-t border-gray-200 text-gray-600 text-sm">
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




