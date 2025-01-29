import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google"; // นำเข้า Prompt font
import Navbar from "../components/modules/Navbar";
import { LanguageProvider } from "@/context/LanguageProvider";
import { ChakraProvider } from "@chakra-ui/react";

// กำหนดการตั้งค่า ฟอนต์ Prompt
const prompt = Prompt({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // เลือกน้ำหนักของฟอนต์ที่ต้องการ
	display: "swap",
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
			<body className={prompt.className}>
				{" "}
				{/* ใช้ฟอนต์ Prompt */}
				<ChakraProvider value={}>
					<LanguageProvider>
						<Navbar />
						{children}
					</LanguageProvider>
				</ChakraProvider>
			</body>
		</html>
	);
}
