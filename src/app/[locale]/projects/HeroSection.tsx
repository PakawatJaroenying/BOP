'use client'
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function HeroSection() {
	const t = useTranslations();
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0 },
				show: { opacity: 1, transition: { duration: 1 } },
			}}
			initial="hidden"
			animate="show"
			className="relative bg-blue-900 text-white py-20"
		>
			<div className="absolute inset-0 overflow-hidden">
				<Image
					src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="Ocean background"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					quality={100}
				/>
				<div className="absolute inset-0 bg-black/50"></div>
			</div>
			<div className="relative container mx-auto px-4 my-20">
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 20 },
						show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
					}}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto text-center prose prose-sm lg:prose-xl prose-headings:text-white"
				>
					<motion.h1
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
						}}
						className="text-4xl md:text-5xl font-bold headline"
					>
						{t("project.ourProjects")}
					</motion.h1>
					<motion.h4
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
						}}
						className="text-blue-200"
					>
						{t("project.innovative")}
					</motion.h4>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default HeroSection;
