import React from "react";
// import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";
import cat_with_girl from "../assets/cat-with-girl.gif";
import { FiExternalLink } from "react-icons/fi";
import captionsImg from "../assets/quick-captions.png";
import portfolioImg from "../assets/portfolio-bg.png";
import geminiImg from "../assets/gemini-bg.png";
import sushiImg from "../assets/sushi-bg.png";

const Work = () => {
	return (
		<div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
			{/* Decorative image at the top of the section */}
			<h4 className="text-center  text-lg ">
				<div className="flex w-full flex-col lg:flex-row items-center">
					<div className="mx-auto relative">
						<img
							src={cat_with_girl}
							alt="Cat with Girl"
							className="w-20 sm:w-28 rounded-3xl max-w-none"
						/>
					</div>
				</div>
			</h4>

			{/* Main title for the projects section */}
			<h2 className="text-center text-5xl font-Ovo">My Projects</h2>

			{/* Introduction paragraph about the portfolio */}
			<p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
				Explore my portfolio to see a variety of projects that highlight my
				expertise in front-end development and my eye for detail.
			</p>
			{/* Grid layout for displaying project cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 px-5 font-headline">
				{/* Project card: Captions Generator */}
				<div
					className="relative group bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 h-56"
					style={{ backgroundImage: `url(${captionsImg})` }}
				>
					<div className="absolute inset-0 bg-black/60 rounded-lg"></div>{" "}
					{/* Overlay */}
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<h2 className="text-white text-lg font-semibold mb-1">
							Captions Generator
						</h2>
						<p className="text-gray-300 text-sm mb-4">Website</p>
						<a
							href="https://quick-captions-generator.vercel.app/"
							className="flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg group-hover:from-pink-600 group-hover:to-red-600 transition"
						>
							<span>Visit Site</span>
							<FiExternalLink className="w-4 h-4" />
						</a>
					</div>
				</div>

				{/* Project card: Personal Portfolio */}
				<div
					className="relative group bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 h-56"
					style={{ backgroundImage: `url(${portfolioImg})` }}
				>
					<div className="absolute inset-0 bg-black/60 rounded-lg"></div>
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<h2 className="text-white text-lg font-semibold mb-1">
							Personal Portfolio
						</h2>
						<p className="text-gray-300 text-sm mb-4">Website</p>
						<a
							href="https://vipulkatwal-portfolio.vercel.app/"
							className="flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg group-hover:from-pink-600 group-hover:to-red-600 transition"
						>
							<span>Visit Site</span>
							<FiExternalLink className="w-4 h-4" />
						</a>
					</div>
				</div>

				{/* Project card: Google Gemini's Clone */}
				<div
					className="relative group bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 h-56"
					style={{ backgroundImage: `url(${geminiImg})` }}
				>
					<div className="absolute inset-0 bg-black/60 rounded-lg"></div>
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<h2 className="text-white text-lg font-semibold mb-1">
							Google Gemini's Clone
						</h2>
						<p className="text-gray-300 text-sm mb-4">Website</p>
						<a
							href="https://google-gemini-clone-seven.vercel.app/"
							className="flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg group-hover:from-pink-600 group-hover:to-red-600 transition"
						>
							<span>Visit Site</span>
							<FiExternalLink className="w-4 h-4" />
						</a>
					</div>
				</div>

				{/* Project card: Japanese Themed Restaurant */}
				<div
					className="relative group bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 h-56"
					style={{ backgroundImage: `url(${sushiImg})` }}
				>
					<div className="absolute inset-0 bg-black/60 rounded-lg"></div>
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<h2 className="text-white text-lg font-semibold mb-1">
							Japanese Themed Restaurant
						</h2>
						<p className="text-gray-300 text-sm mb-4">Website</p>
						<a
							href="https://zen-sushi-sable.vercel.app/"
							className="flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg group-hover:from-pink-600 group-hover:to-red-600 transition"
						>
							<span>Visit Site</span>
							<FiExternalLink className="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
			{/* Button to show more projects */}
			<a
				href="#"
				className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover"
			>
				Show more
				<img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
				<img
					src={right_arrow_blod_dark}
					alt=""
					className="w-4 hidden dark:block"
				/>
			</a>
		</div>
	);
};

export default Work;
