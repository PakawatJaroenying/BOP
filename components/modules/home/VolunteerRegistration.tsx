"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "@/src/i18n/routing";

// Variants สำหรับ Section (Fade-in เมื่อ Scroll ถึง)
const sectionVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

// Variants สำหรับหัวข้อและคำอธิบาย (เลื่อนขึ้น + Fade-in)
const titleVariants = {
	hidden: { opacity: 0, y: -30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Variants สำหรับ Input + Button (เลื่อนขึ้น + Fade-in)
const formVariants = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

function VolunteerRegistration() {
	const t = useTranslations();
	const [email, setEmail] = React.useState("");
	const router = useRouter();

	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="py-20 bg-gradient-to-b from-blue-900 to-teal-900 text-white"
		>
			<div className="max-w-4xl mx-auto px-4 text-center">
				{/* หัวข้อ */}
				<motion.h2
					variants={titleVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-4xl font-bold mb-8 headline"
				>
					{t("volunteer.title")}
				</motion.h2>

				{/* คำอธิบาย */}
				<motion.p
					variants={titleVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-xl mb-8 body"
				>
					{t("volunteer.description")}
				</motion.p>

				{/* Input & Button */}
				<motion.div
					variants={formVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
				>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button
							size="lg"
							className="bg-teal-600 hover:bg-teal-700"
							onClick={()=>{
								router.push("/contact");
							}}
						>
							{t("volunteer.register")}
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
}

export default VolunteerRegistration;
