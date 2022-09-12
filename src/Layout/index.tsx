import { ReactNode } from "react";
import { Footer, NavBar } from "../components";
import Head from "next/head";
interface Ilayout {
	children: ReactNode;
}
export function Layout({ children }: Ilayout) {
	return (
		<>
			<Head>
				<link rel="shortchut icon" href="/images/favicon.ico" />
				<title>PokeNext</title>
			</Head>
			<NavBar />
			<main className="main-container">{children}</main>
			<Footer />
		</>
	);
}
