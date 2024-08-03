import React from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
// import Services from './components/Services'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			{/* <Services /> */}
			<Work />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
