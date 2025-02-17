"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function ContentSection() {
	const t = useTranslations();

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="container mx-auto py-16 px-4"
		>
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.5 }}
				className="text-4xl font-bold text-blue-900 mb-8"
			>
				{t("resources.title")}
			</motion.h1>

			<Card className="bg-gradient-to-br from-blue-50 to-teal-50 w-fit max-w-lg pb-4 ">
				<div className="relative    mb-6 rounded-md rounded-b-none shadow-md w-full h-52  md:h-80 mx-auto overflow-hidden">
					<Image
						fill
						src="/resource/1.jpg"
						alt="ภาพที่เกี่ยวข้องกับโครงการสถานีจัดการขยะของ UNDP ABIC"
						className="hover:scale-105 transform transition-transform duration-300"
					/>
				</div>
				<div className="flex flex-col gap-3  px-4 lg:px-8  ">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="text-2xl font-bold text-blue-900 "
					>
						{t("resources.undp.title")}
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="text-lg text-gray-700 prose text-justify"
					>
						{t("resources.undp.description")}
					</motion.p>

					<motion.a
						href="/resource/Guideline for Hotels & Businesses to Join the UNDP ABIC Waste Station Initiative.pdf"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.99 }}
						className="max-w-full flex underline-offset items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md shadow-md w-fit prose prose-sm"
					>
						<FileText className="mr-2 w-10 h-10 md:w-12 md:h-12" />
						{t("resources.undp.downloadButton")}
					</motion.a>
				</div>
			</Card>
		</motion.div>
	);
}

export default ContentSection;
