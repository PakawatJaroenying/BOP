import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans_Thai } from "next/font/google";
import CustomFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import { getMessages } from "next-intl/server";

const helvetica = CustomFont({
	src: [
		{
			path: "../../fonts/helvetica/Helvetica.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../fonts/helvetica/Helvetica-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../fonts/helvetica/Helvetica-Oblique.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../fonts/helvetica/Helvetica-BoldOblique.ttf",
			weight: "700",
			style: "italic",
		},
	],
	display: "swap",
	variable: "--font-helvetica",
});

const thonburi = CustomFont({
	src: "../../fonts/thonburi/SOV_ThonBuri.ttf",
	display: "swap",
	variable: "--font-thonburi",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	style: ["normal", "italic"],
	variable: "--font-montserrat",
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
	subsets: ["thai"],
	weight: ["100", "300", "400", "700"],
	style: ["normal"],
	variable: "--font-ibm-plex-thai",
});

export const metadata: Metadata = {
	title: "Blue Ocean Plastic",
	description:
		"Join the global movement to preserve marine ecosystems and combat climate change",
};

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const messages = await getMessages({
		locale: locale,
	});

	return (
		<html lang={locale}>
			<head>
				<link
					rel="icon"
					href="/logoCompany.png"
					sizes="32x32"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>
			</head>
			<body
				className={`${montserrat.className} ${ibmPlexThai.className} ${helvetica.className} ${thonburi.className} ${locale}`}
			>
				<NextIntlClientProvider
					locale={locale}
					messages={messages}
				>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
