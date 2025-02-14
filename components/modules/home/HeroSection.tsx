"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Variants สำหรับ Fade-in แต่ละองค์ประกอบ
const fadeInUp = (delay = 0) => ({
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay } },
});

export default function HeroSection() {
	const t = useTranslations();
	return (
		<motion.section
			initial="initial"
			animate="animate"
			className="relative h-screen flex items-center justify-center text-center overflow-hidden"
		>
			{/* Background Image ที่มี Motion */}
			<motion.div
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }}
				className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{/* Overlay Gradient */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }}
					className="absolute inset-0 bg-gradient-to-b from-teal-900/70 to-blue-900/70"
				/>
			</motion.div>

			{/* Content ที่ Fade-in ตามลำดับ */}
			<motion.div
				initial="initial"
				animate="animate"
				className="relative z-10 max-w-3xl mx-auto px-4 prose prose-sm md:prose-xl prose-invert prose-headings:text-white prose-a:text-blue-400"
			>
				<motion.h1 variants={fadeInUp(0.3)}>{t("hero.title")}</motion.h1>
				<motion.h3 variants={fadeInUp(0.6)}>{t("hero.subtitle")}</motion.h3>

				{/* Button มี Motion & Hover Effect */}
				<motion.div variants={fadeInUp(0.9)}>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button className="mt-5 lg:mt-10 text-sm md:text-lg bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-lg">
							{t("hero.cta")} <ArrowRight className="ml-2" />
						</Button>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
