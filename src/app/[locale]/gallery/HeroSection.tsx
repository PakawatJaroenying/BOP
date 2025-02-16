"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
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
					src="https://images.unsplash.com/photo-1605429523419-d828acb941d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
						{t("gallery.title")}
					</motion.h1>
					<motion.h4
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
						}}
						className="text-blue-200"
					>
						{t("gallery.subtitle")}
					</motion.h4>
				</motion.div>
			</div>
		</motion.div>
	);
}
