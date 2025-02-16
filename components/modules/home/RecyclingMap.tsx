"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";

// Variants สำหรับ Section
const sectionVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

// Variants สำหรับหัวข้อ (เลื่อนลงมา + Fade-in)
const titleVariants = {
	hidden: { opacity: 0, y: -30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Variants สำหรับแผนที่ (เลื่อนขึ้น + Shadow เพิ่ม)
const mapVariants = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

function RecyclingMap() {
	const t = useTranslations();
	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="py-5 md:py-20 bg-teal-50"
		>
			<div className="container mx-auto">
				{/* หัวข้อ */}
				<motion.h2
					variants={titleVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-6 md:mb-16 text-blue-900 headline"
				>
					{t("map.title")}
				</motion.h2>

				{/* Google Maps Embed */}
				<motion.div
					variants={mapVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="bg-white rounded-lg shadow-xl p-4 transition-shadow hover:shadow-2xl"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125922.81180473424!2d100.00141249999999!3d9.50108695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054f1501c66266f%3A0xedd55abd3d7d8330!2z4Lit4Liz4LmA4Lig4Lit4LmA4LiB4Liy4Liw4Liq4Lih4Li44Lii!5e0!3m2!1sth!2sth!4v1739444921579!5m2!1sth!2sth"
						width="600"
						height="450"
						style={{ border: 0 }}
						className="w-full rounded-lg"
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</motion.div>
			</div>
		</motion.section>
	);
}

export default RecyclingMap;
