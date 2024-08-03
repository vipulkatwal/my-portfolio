import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import header_bg_color from "../assets/header-bg-color.png";
import moon_icon from "../assets/moon_icon.png";
import sun_icon from "../assets/sun_icon.png";
import arrow_icon from "../assets/arrow-icon.png";
import arrow_icon_dark from "../assets/arrow-icon-dark.png";
import menu_black from "../assets/menu-black.png";
import menu_white from "../assets/menu-white.png";
import close_black from "../assets/close-black.png";
import close_white from "../assets/close-white.png";

const Navbar = () => {
	// References to the side menu, navigation, and navigation links
	const sideMenuRef = useRef();
	const navRef = useRef();
	const navLinkRef = useRef();

	// Function to open the side menu
	const openMenu = () => {
		sideMenuRef.current.style.transform = "translateX(-16rem)";
	};

	// Function to close the side menu
	const closeMenu = () => {
		sideMenuRef.current.style.transform = "translateX(16rem)";
	};

	// Function to toggle between light and dark themes
	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark");

		// Save the theme preference to localStorage
		if (document.documentElement.classList.contains("dark")) {
			localStorage.theme = "dark";
		} else {
			localStorage.theme = "light";
		}
	};

	useEffect(() => {
		// Add an event listener to handle scroll effects on the navbar
		window.addEventListener("scroll", () => {
			if (scrollY > 50) {
				// Add styles to the navbar when scrolled down
				navRef.current.classList.add(
					"bg-white",
					"bg-opacity-50",
					"backdrop-blur-lg",
					"shadow-sm",
					"dark:bg-darkTheme",
					"dark:shadow-white/20"
				);
				navLinkRef.current.classList.remove(
					"bg-white",
					"shadow-sm",
					"bg-opacity-50",
					"dark:border",
					"dark:border-white/50",
					"dark:bg-transparent"
				);
			} else {
				// Remove styles from the navbar when at the top
				navRef.current.classList.remove(
					"bg-white",
					"bg-opacity-50",
					"backdrop-blur-lg",
					"shadow-sm",
					"dark:bg-darkTheme",
					"dark:shadow-white/20"
				);
				navLinkRef.current.classList.add(
					"bg-white",
					"shadow-sm",
					"bg-opacity-50",
					"dark:border",
					"dark:border-white/50",
					"dark:bg-transparent"
				);
			}
		});

		// Set the initial theme based on localStorage or system preference
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	return (
		<>
			{/* Background image for the header (hidden in dark mode) */}
			<div
				className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]
    dark:hidden"
			>
				<img src={header_bg_color} alt="" className="w-full" />
			</div>

			{/* Navigation bar */}
			<nav
				ref={navRef}
				className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
			>
				{/* Logo image (light mode) */}
				<img
					src={logo}
					alt="Logo"
					className="w-28 cursor-pointer mr-14 dark:hidden"
				/>

				{/* Logo image (dark mode) */}
				<img
					src={logo_dark}
					alt="Logo"
					className="w-28 cursor-pointer mr-14 hidden dark:block"
				/>

				{/* Navigation links (visible on medium and larger screens) */}
				<ul
					ref={navLinkRef}
					className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo
        dark:border dark:border-white/50 dark:bg-transparent "
				>
					<li>
						<a href="#top">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					{/* <li><a href="#services">Services</a></li> */}
					<li>
						<a href="#work">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>

				{/* Theme toggle button and 'Let's Connect' link */}
				<div className="flex items-center gap-4">
					<button onClick={toggleTheme}>
						<img src={moon_icon} alt="" className="w-6 dark:hidden" />
						<img src={sun_icon} alt="" className="w-6 hidden dark:block" />
					</button>

					<a
						href="#contact"
						className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
					>
						Let's Connect
						<img src={arrow_icon} alt="" className="w-3 dark:hidden" />
						<img
							src={arrow_icon_dark}
							alt=""
							className="w-3 hidden dark:block"
						/>
					</a>

					{/* Mobile menu button */}
					<button className="block md:hidden ml-3" onClick={openMenu}>
						<img src={menu_black} alt="" className="w-6 dark:hidden" />
						<img src={menu_white} alt="" className="w-6 hidden dark:block" />
					</button>
				</div>
				{/* Mobile menu (hidden on medium and larger screens) */}
				<ul
					ref={sideMenuRef}
					className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
				>
					<div className="absolute right-6 top-6" onClick={closeMenu}>
						<img
							src={close_black}
							alt=""
							className="w-5 cursor-pointer dark:hidden"
						/>

						<img
							src={close_white}
							alt=""
							className="w-5 cursor-pointer hidden dark:block"
						/>
					</div>

					<li>
						<a href="#top" onClick={closeMenu}>
							Home
						</a>
					</li>
					<li>
						<a href="#about" onClick={closeMenu}>
							About
						</a>
					</li>
					{/* <li>
						<a href="#services" onClick={closeMenu}>
							Services
						</a>
					</li> */}
					<li>
						<a href="#work" onClick={closeMenu}>
							Projects
						</a>
					</li>
					<li>
						<a href="#contact" onClick={closeMenu}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
