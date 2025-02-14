"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { RecycleIcon, TurtleIcon, Hourglass } from "lucide-react";
import Counter from "@/components/modules/Counter";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// Animation สำหรับ Section (Fade-in เมื่อ Scroll ถึง)
const sectionVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

// Animation สำหรับการ์ดแต่ละใบ (เลื่อนขึ้น + Fade-in)
const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	show: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: index * 0.2 },
	}),
};

export default function ImpactStatistics() {
	const t = useTranslations();

	const stats = [
		{
			icon: <RecycleIcon />,
			value: 8,
			unit: "M",
			text: t("impact.stats.plastic"),
		},
		{
			icon: <TurtleIcon />,
			value: 700,
			unit: "",
			text: t("impact.stats.species"),
		},
		{
			icon: <Hourglass />,
			value: 400,
			unit: "",
			text: t("impact.stats.years"),
		},
	];

	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }} // แสดงเมื่อ Scroll ลงมาประมาณ 20%
			className="py-20 bg-gradient-to-b from-blue-50 to-white"
		>
			<div className="container mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-8 text-blue-900 headline"
				>
					{t("impact.title")}
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-8">
					{stats.map((item, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							custom={index}
						>
							<Card
								key={index}
								className="h-full p-6 text-center bg-white shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded-xl flex flex-col items-center"
							>
								<div className="w-20 h-20 flex items-center justify-center rounded-full bg-teal-100 shadow-md hover:shadow-lg transition-all">
									{React.cloneElement(item.icon, {
										className: "h-12 w-12 text-teal-600",
									})}
								</div>
								<div className="text-6xl font-extrabold text-teal-500 flex items-center justify-center headline mt-4">
									{/* <Counter
										end={item.value}
										duration={0}
									/> */}
									{item.value}
									<span className="ml-1 text-4xl">{item.unit}</span>
								</div>
								<p className="text-gray-700 mt-3 text-lg text-center">
									{item.text}
								</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
