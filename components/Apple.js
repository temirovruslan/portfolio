import Image from "next/image";
import Link from "next/link";
import React from "react";

const Apple = () => {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center px-8">
			<h2 className="text-2xl md:text-4xl font-semibold mb-8 ">
				Website on NextJs
			</h2>
			<div className="relative mb-8 w-[280px] h-[170px] sm:w-[320px] sm:h-[200px] md:w-[380px] md:h-[250px] lg:w-[500px] lg:h-[320px]">
				<Image src="/apple.webp" layout="fill" alt="apple" />
			</div>
			<p className="text-sm md:text-base lg:text-lg w-3/5  mb-8">
				Made an apple-clone website fully responsive, where you can
				purchase apple devices throw Stripe API. Stored date in Sanity.
				Used Redux-Toolkit for state management
			</p>

			<Link href="https://apple-clone-gray.vercel.app/">
				<button className=" transition duration-150 ease-out hover:ease-in opacity-75 text-sm py-1 px-6 rounded-full outline outline-2  outline-offset-2 lg:text-base hover:opacity-100">
					Visit
				</button>
			</Link>
		</div>
	);
};

export default Apple;

// return <div></div>;
