import React from "react";
import Header from "./Header";

const Greeting = () => {
	return (
		<>
			<Header />
			<div className="w-screen h-screen flex justify-center items-center mt-[-70px]">
				<div>
					<h1 className="flex justify-center items-center mb-4 text-5xl font-semibold md:6x1	 lg:text-8xl	font-serif">
						Welcome
					</h1>
					<p className="flex justify-center items-center text-xl md:text-2xl	lg:text-3xl">
						Here are my latest works
					</p>
				</div>
			</div>
		</>
	);
};

export default Greeting;
