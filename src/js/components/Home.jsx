import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer";
import Semaforo from "./Semaforo";

//create your first component
const Home = () => {
	return (
		<div className="text-center">

		<Semaforo />	
          




		  <Footer />
		</div>
	);
};

export default Home;