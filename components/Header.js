import Image from "next/image";
import Link from "next/link";



import React from "react";

const Header = () => {

	return (
		<div className="">
			<div className=" container my-0 mx-auto py-4 px-4 ">
				<div className="flex items-center justify-between">
					<Link href="https://github.com/temirovruslan/github-decoration#readme">
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
