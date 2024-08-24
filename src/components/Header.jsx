import React from "react";
import profile_img from "../assets/profile-img.jpg";
// import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import linkedin_icon from "../assets/linkedin.png";
import github_icon from "../assets/github.png";
import twitter_icon from "../assets/twitter.png";
import googy_dog from "../assets/goofy-bald-dog.gif";

const Header = () => {
	return (
		<div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
			{/* Profile image and a small decorative image */}
			<div className="relative">
				<img src={profile_img} alt="" className="rounded-full w-32" />
				<img
					src={googy_dog}
					alt="small"
					className="absolute bottom-0 right-0 w-10 h-10 rounded-full border-1 border-transparent"
				/>
			</div>

			{/* Greeting with an image of a hand icon */}
			<h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 text-center">
				Hi! I'm Vipul Katwal{" "}
				<img src="./assets/hand-icon.png" alt="" className="w-6" />
			</h3>

			{/* Social media links */}
			<ul className="flex items-center gap-2 justify-center mt-4 sm:mt-0">
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/vipulkatwal"
					>
						<div className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10">
							<img
								src={linkedin_icon}
								alt="linkedin"
								className="w-full h-full rounded-full"
							/>
						</div>
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/vipulkatwal"
					>
						<div className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10">
							<img
								src={github_icon}
								alt="github"
								className="w-full h-full rounded-full"
							/>
						</div>
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://x.com/vipulkatwal"
					>
						<div className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10">
							<img
								src={twitter_icon}
								alt="twitter"
								className="w-full h-full rounded-full"
							/>
						</div>
					</a>
				</li>
			</ul>

			{/* Main headline */}
			<h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
				frontend web developer.
			</h1>

			{/* Short description */}
			<p className="max-w-2xl mx-auto  text-center">
				I am eager to apply my knowledge and enthusiasm to contribute to
				innovative projects and grow as a developer.
			</p>

			<div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
				{/* Contact button (commented out) */}
				{/* <a
					href="#contact"
					className="px-10 py-3 border border-gray-500 flex items-center gap-2 bg-white dark:text-black"
				>
					Contact Me <img src={right_arrow_white} alt="" className="w-4" />
				</a> */}

				{/* Button to download CV */}
				<a
					href="https://drive.google.com/file/d/1lJJ95REdUoziPfTRvHPtB-k9q8KWI-XE/view?usp=sharing"
					download
					className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent target=_blank"
				>
					Download CV <img src={download_icon} alt="" className="w-4" />
				</a>
			</div>
		</div>
	);
};

export default Header;
