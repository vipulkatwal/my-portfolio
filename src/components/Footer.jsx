/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import mail_icon from "../assets/mail_icon.png";
import mail_icon_dark from "../assets/mail_icon_dark.png";
import cat_in_box from "../assets/cat-in-box.gif";

const Footer = () => {
	return (
		<div className="mt-20">
			{/* Logo and email section */}
			<div className="text-center">
				{/* Light mode logo */}
				<img src={logo} alt="Logo" className="w-36 mx-auto mb-2 dark:hidden" />
				{/* Dark mode logo */}
				<img
					src={logo_dark}
					alt="Dark Mode Logo"
					className="w-36 mx-auto mb-2 hidden dark:block"
				/>

				{/* Email section with icons */}
				<div className="w-max flex items-center gap-2 mx-auto">
					{/* Light mode mail icon */}
					<img src={mail_icon} alt="Mail Icon" className="w-6 dark:hidden" />
					{/* Dark mode mail icon */}
					<img
						src={mail_icon_dark}
						alt="Dark Mode Mail Icon"
						className="w-6 hidden dark:block"
					/>
					vipulkatwal17@gmail.com
				</div>
			</div>
			{/* Footer section with copyright and signature */}
			<footer className="text-center sm:flex sm:items-center sm:justify-between border-t border-gray-400 mx-4 sm:mx-[10%] mt-12 py-4">
				{/* Left side of the footer */}
				<div className="w-full sm:w-1/3 sm:text-left">
					<p>© 2024 All rights reserved.</p>
				</div>
				{/* Center section with decorative image */}
				<div className="w-full flex items-center justify-center sm:w-1/3 my-4 sm:my-0">
					<img
						src={cat_in_box}
						alt="Cat in a Box"
						className="w-16 sm:w-20 rounded-3xl max-w-none"
					/>
				</div>
				{/* Right side of the footer */}
				<div className="w-full sm:w-1/3 sm:text-right">
					<p className="whitespace-nowrap">Made with ❤ by Vipul Katwal</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
