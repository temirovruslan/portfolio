import Image from "next/image";
import Link from "next/link";

import logo from "../public/github2.svg";

import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	return (
		<div className="">
			<div className=" container my-0 mx-auto py-4 px-4 ">
				<div className="flex items-center justify-between">
					<Link href="https://github.com/temirovruslan">
						<div className="relative w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-white  rounded-full opacity-75 hover:opacity-100 transition duration-150 ease-in-out">
							<Image
								src="/github1.svg"
								layout="fill"
								alt="github"
							/>
						</div>
					</Link>

					<Link href="https://www.linkedin.com/in/ruslantemirov/">
						<div className="relative w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-white  rounded-full opacity-75 hover:opacity-100 transition duration-150 ease-in-out cursor-pointer">
							<Image
								src="/linkedin1.svg"
								layout="fill"
								alt="icon"
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
