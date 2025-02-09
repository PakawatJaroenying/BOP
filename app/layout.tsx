import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/modules/Navbar";
import { LanguageProvider } from "@/context/LanguageProvider";
import Footer from "@/components/modules/Footer";
import { Montserrat, IBM_Plex_Sans_Thai } from "next/font/google";
import CustomFont from "next/font/local";

const helvetica = CustomFont({
	src: [
		{
			path: "./fonts/helvetica/Helvetica.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/helvetica/Helvetica-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/helvetica/Helvetica-Oblique.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/helvetica/Helvetica-BoldOblique.ttf",
			weight: "700",
			style: "italic",
		},
	],
	display: "swap",
});
const thonburi = CustomFont({
	src: "./fonts/thonburi/SOV_ThonBuri.ttf",
	display: "swap",
});
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "700"], // กำหนดหลาย weight
	style: ["normal", "italic"], // รองรับตัวเอียง
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
	subsets: ["thai"],
	weight: ["100", "300", "400", "700"], // ระบุน้ำหนักที่ใช้
	style: ["normal"], // ไม่มีตัวเอียงใน IBM Plex Thai
});

export const metadata: Metadata = {
	title: "Blue Ocean Plastic",
	description:
		"Join the global movement to preserve marine ecosystems and combat climate change",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
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
				className={`${montserrat.className} ${ibmPlexThai.className} ${helvetica.className} ${thonburi.className}`}
			>
				<LanguageProvider>
					<Navbar />
					{children}
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	);
}
