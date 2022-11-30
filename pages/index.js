import Head from "next/head";
import SwiperVertical from "../components/SwiperVertical";

export default function Home() {
	return (
		<div className="w-screen h-screen ">
			<Head>
				<title>Ruslan Portfolio</title>

				<link rel="icon" href="/panda.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<SwiperVertical />
		</div>
	);
}
