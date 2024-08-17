import React from "react";
import user_image from "../assets/user-image.gif";
import code_icon from "../assets/code-icon.png";
import code_icon_dark from "../assets/code-icon-dark.png";
import edu_icon from "../assets/edu-icon.png";
import edu_icon_dark from "../assets/edu-icon-dark.png";
import project_icon from "../assets/project-icon.png";
import project_icon_dark from "../assets/project-icon-dark.png";
import purr_cat from "../assets/cat-purr.gif";
import vscode from "../assets/vscode.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import react_icon from "../assets/react.png";
import bootsrap_icon from "../assets/bootstrap.png";
import html_icon from "../assets/html.png";
import css_icon from "../assets/css.png";
import js_icon from "../assets/javascript.png";
import mysql_icon from "../assets/mysql.png";
import python_icon from "../assets/python.png";
import cpp_icon from "../assets/cpp.png";
import tailwind_icon from "../assets/tailwind.png";

const About = () => {
	return (
		<div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
			{/* Decorative image of a cat in a box */}
			<h4 className="text-center mb-2 text-lg font-Ovo">
				<div className="flex w-full flex-col lg:flex-row items-center">
					<div className="mx-auto relative">
						<img
							src={purr_cat}
							alt="Cat in a Box"
							className="w-16 sm:w-20 rounded-3xl max-w-none"
						/>
					</div>
				</div>
			</h4>

			{/* Main title */}
			<h2 className="text-center text-5xl font-Ovo">About Me</h2>

			{/* Brief introduction paragraph */}
			<p className=" max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-justify">
				I'm a Front Developer with a passion for creating engaging web
				experiences. With a solid foundation in HTML, CSS, and JavaScript, I'm
				eager to tackle new challenges and contribute to innovative projects.
				Committed to continuous learning and growth, I’m excited about evolving
				as a developer.
			</p>

			{/* Section with user image and details */}
			<div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
				{/* User image */}
				<div className="max-w-max mx-auto relative">
					<img
						src={user_image}
						alt=""
						className="w-64 sm:w-80 rounded-3xl max-w-none"
					/>
				</div>
				<div className="flex-1">
					{/* List of key areas with icons */}
					<ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
						<li
							className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                "
						>
							{/* Icon and title for Languages */}
							<img src={code_icon} alt="" className="w-7 mt-3 dark:hidden" />
							<img
								src={code_icon_dark}
								alt=""
								className="w-7 mt-3 hidden dark:block"
							/>

							<h3 className="my-4 font-semibold text-gray-700 dark:text-white">
								Languages
							</h3>
							<p className="text-gray-600 text-sm dark:text-white/80">
								HTML, CSS, JavaScript, React Js, SQL, C++, Python.{" "}
							</p>
						</li>
						<li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
							{/* Icon and title for Education */}
							<img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden" />
							<img
								src={edu_icon_dark}
								alt=""
								className="w-7 mt-3 hidden dark:block"
							/>

							<h3 className="my-4 font-semibold text-gray-700 dark:text-white">
								Education
							</h3>
							<p className="text-gray-600 text-sm dark:text-white/80">
								Master of Computer Application (MCA){" "}
							</p>
						</li>
						<li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
							{/* Icon and title for Projects */}
							<img src={project_icon} alt="" className="w-7 mt-3 dark:hidden" />
							<img
								src={project_icon_dark}
								alt=""
								className="w-7 mt-3 hidden dark:block"
							/>

							<h3 className="my-4 font-semibold text-gray-700 dark:text-white">
								Projects
							</h3>
							<p className="text-gray-600 text-sm dark:text-white/80">
								I have developed a range of projects that are live and
								accessible via the link in the section below.{" "}
							</p>
						</li>
					</ul>

					{/* Skills section heading */}
					<h4 className="my-6 text-xl sm:text-2xl lg:text-3xl text-gray-700 font-Ovo dark:text-white/80">
						Skills:
					</h4>

					{/* List of skill icons */}
					<ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 mt-4">
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img src={html_icon} alt="HTML" className="w-6 sm:w-8 lg:w-10" />
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img src={css_icon} alt="CSS" className="w-6 sm:w-8 lg:w-10" />
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img
								src={js_icon}
								alt="JavaScript"
								className="w-6 sm:w-8 lg:w-10"
							/>
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img
								src={react_icon}
								alt="React"
								className="w-6 sm:w-8 lg:w-10"
							/>
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img
								src={tailwind_icon}
								alt="Tailwind CSS"
								className="w-6 sm:w-8 lg:w-10"
							/>
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img
								src={bootsrap_icon}
								alt="Bootstrap"
								className="w-6 sm:w-8 lg:w-10"
							/>
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img
								src={mysql_icon}
								alt="MySQL"
								className="w-6 sm:w-8 lg:w-10"
							/>
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img
								src={python_icon}
								alt="Python"
								className="w-6 sm:w-8 lg:w-10"
							/>
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img src={cpp_icon} alt="C++" className="w-6 sm:w-8 lg:w-10" />
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img src={git} alt="Git" className="w-6 sm:w-8 lg:w-10" />
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img src={vscode} alt="VS Code" className="w-6 sm:w-8 lg:w-10" />
						</li>
						<li className="flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
							<img
								src={firebase}
								alt="Firebase"
								className="w-6 sm:w-8 lg:w-10"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
