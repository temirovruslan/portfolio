import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tipster = () => {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center px-8">
			<h2 className="text-2xl md:text-4xl font-semibold mb-12 ">
				Website in NextJS
			</h2>
			<div className="relative mb-8 w-[280px] h-[170px] sm:w-[320px] sm:h-[200px] md:w-[380px] md:h-[250px] lg:w-[500px] lg:h-[320px]">
				<Image src="/tipster.webp" layout="fill" alt="tip" />
			</div>
			<p className="text-base md:text-lg  lg:text-2xl w-3/5  mb-8">
				It is a website that i created for the company i work in.In this
				project i used sidebar, swiper-slider and other reusable
				components. Website is totally responsive. There can be some
				bags, still working on it.
			</p>

			<Link href="http://phare-official-web.s3-website.eu-central-1.amazonaws.com/">
				<button className=" transition duration-150 ease-out hover:ease-in opacity-75 text-sm py-1 px-6 rounded-full outline outline-2  outline-offset-2 lg:text-base hover:opacity-100 ">
					Visit
				</button>
			</Link>
		</div>
	);
};

export default Tipster;
