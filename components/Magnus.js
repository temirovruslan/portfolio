import Image from "next/image";
import Link from "next/link";
import React from "react";

const Todo = () => {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center px-8">
			<h2 className="text-2xl md:text-4xl font-semibold mb-12 ">
				Platform
			</h2>
			<div className="relative mb-8 w-[280px] h-[170px] sm:w-[320px] sm:h-[200px] md:w-[380px] md:h-[250px] lg:w-[500px] lg:h-[320px]">
				<Image src="/magnus.webp" layout="fill" alt="apple" />
			</div>
			<p className="text-base md:text-lg  lg:text-2xl w-3/5  mb-8">
				Our company began a new project from the beginning, and i build
				the platform from scratch as the only frontend developer. In
				this project, I learned how to fetch real-time data from the
				backend using server-sent events and connect it to individual
				users by their IDs. I also created charts using the Ant Charts
				library, and these charts would update as time passed. To build
				the UI, I used components from the Ant Design library and
				customized them to fit our requirements. Practicing Redux
				Toolkit for performing CRUD operations. We developed a weather
				app that fetched forecast data for specific locations and saved
				user's action history in their browser's storage. Additionally,
				I implemented sorting and filtering functionality. Worked with
				the Google Maps API to track user locations and movements. I
				worked together with designers and backend developers to improve
				the platform's features and capabilities. Platform was build
				using TypeScript.
			</p>

			<Link href="https://crud-react-js.vercel.app/">
				<button className=" transition duration-150 ease-out hover:ease-in opacity-75 text-sm py-1 px-6 rounded-full outline outline-2  outline-offset-2 lg:text-base hover:opacity-100 ">
					Visit
				</button>
			</Link>
		</div>
	);
};

export default Todo;

// return <div></div>;
