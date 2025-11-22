import React from "react";

//include images into your bundle
import Footer from "./Footer";
import Semaforo from "./Semaforo";
import Navbar from "./Navbar";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Semaforo />
			<Footer />
		</div>
	);
};

export default Home;