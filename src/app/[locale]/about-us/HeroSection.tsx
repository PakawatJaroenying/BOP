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
					src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
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
						{t("about.ourTeam")}
					</motion.h1>
					{/* <motion.h4
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
						}}
						className="text-blue-200 mb-6"
					>
					</motion.h4> */}

					{/* Introduction Text */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-lg md:text-xl font-medium mb-8 text-white/90"
					>
						{t("about.teamIntro")}
					</motion.p>

					{/* Team Experience */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="bg-white/10 rounded-lg p-4 mt-2 shadow-md border border-white/20 text-white"
					>
						{t("about.teamExperience")}
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}
