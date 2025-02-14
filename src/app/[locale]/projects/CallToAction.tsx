"use client";

import React from "react";
import { Waves } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// Variants สำหรับ Section (Fade-in + เลื่อนขึ้น)
const sectionVariants = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Variants สำหรับ Icon Waves
const waveVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// Variants สำหรับข้อความ (Fade-in + เลื่อนขึ้น)
const textVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CallToAction = () => {
	const t = useTranslations();

	return (
		<motion.div
			variants={sectionVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="bg-blue-900/80 text-white py-16"
		>
			<div className="container mx-auto px-4 text-center">
				<motion.div
					variants={waveVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<Waves className="w-12 h-12 mx-auto mb-6 text-blue-400" />
				</motion.div>

				<motion.h2
					variants={textVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-3xl font-bold mb-4 headline"
				>
					{t("project.cta")}
				</motion.h2>

				<motion.p
					variants={textVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto body"
				>
					{t("project.ctaDescription")}
				</motion.p>

				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
				>
					{t("project.ctaBtn")}
				</motion.button>
			</div>
		</motion.div>
	);
};

export default CallToAction;
