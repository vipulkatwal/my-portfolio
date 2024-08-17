import React, { useEffect, useState } from "react";
import right_arrow_white from "../assets/right-arrow-white.png";
import lazy_cat from "../assets/lazy-cat.gif";

const Contact = () => {
	// State to manage the result message after form submission
	const [result, setResult] = useState("");

	// Handle form submission
	const onSubmit = async (event) => {
		event.preventDefault(); // Prevent the default form submission behavior

		// Get the hCaptcha response value
		const hCaptcha = event.target.querySelector(
			"textarea[name=h-captcha-response]"
		).value;

		// Check if the hCaptcha field is filled
		if (!hCaptcha) {
			setResult("Please fill out captcha field"); // Set error message
			return;
		}

		setResult("Sending...."); // Indicate that the form is being submitted
		const formData = new FormData(event.target);

		// Append the Web3 Forms access key
		formData.append("access_key", "8d5b0f10-5fa8-49db-adf3-4f319414c612");

		// Submit the form data to the Web3 Forms API
		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		}).then((res) => res.json());

		// Handle the API response
		if (res.success) {
			setResult(res.message); // Display success message
			event.target.reset(); // Reset the form after successful submission
		} else {
			setResult(res.message); // Display error message
		}
	};

	// Function to load the hCaptcha script
	function CaptchaLoader() {
		const captchadiv = document.querySelectorAll('[data-captcha="true"]');
		if (captchadiv.length) {
			let lang = null;
			let onload = null;
			let render = null;

			captchadiv.forEach(function (item) {
				const sitekey = item.dataset.sitekey;
				lang = item.dataset.lang;
				onload = item.dataset.onload;
				render = item.dataset.render;

				// Set a default sitekey if not provided
				if (!sitekey) {
					item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
				}
			});

			let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
			if (lang) {
				scriptSrc += `&hl=${lang}`;
			}
			if (onload) {
				scriptSrc += `&onload=${onload}`;
			}
			if (render) {
				scriptSrc += `&render=${render}`;
			}

			// Create and append the hCaptcha script to the document
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.async = true;
			script.defer = true;
			script.src = scriptSrc;
			document.body.appendChild(script);
		}
	}

	useEffect(() => {
		CaptchaLoader(); // Load the hCaptcha script when the component mounts
	}, []);

	return (
		<div
			id="contact" // Unique ID for scrolling to this section
			className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
		>
			<h4 className="text-center mb-0 text-lg font-Ovo">
				<div className="flex w-full flex-col lg:flex-row items-center">
					<div className="mx-auto relative">
						{/* Lazy cat image */}
						<img
							src={lazy_cat}
							alt="Cat in a Box"
							className="w-16 sm:w-20 rounded-3xl max-w-none"
						/>
					</div>
				</div>
			</h4>
			<h2 className="text-center text-5xl font-Ovo">Say Hello 👋</h2>
			<p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
				Whether you have a question, feedback, or just want to connect, feel
				free to reach out using the form below.
			</p>

			{/* Contact form */}
			<form onSubmit={onSubmit} className="max-w-2xl mx-auto">
				{/* Hidden input for the form subject */}
				<input
					type="hidden"
					name="subject"
					value="Vipul Katwal - New Message"
				/>

				{/* Form input fields */}
				<div className="grid grid-cols-auto gap-6 mt-10 mb-8">
					<input
						type="text"
						placeholder="Enter your name"
						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
						required
						name="name"
					/>

					<input
						type="email"
						placeholder="Enter your email"
						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
						required
						name="email"
					/>
				</div>
				<textarea
					rows="6"
					placeholder="Enter your message"
					className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
					required
					name="message"
				></textarea>

				{/* Centered hCaptcha widget */}
				<div className="flex justify-center mb-6">
					<div className="h-captcha max-w-full" data-captcha="true"></div>
				</div>

				{/* Submit button */}
				<button
					type="submit"
					className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
				>
					Submit now
					<img src={right_arrow_white} alt="Right Arrow Icon" className="w-4" />
				</button>

				{/* Display result message */}
				<p className="mt-4">{result}</p>
			</form>
		</div>
	);
};

export default Contact;
