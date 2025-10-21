"use client";

import { Waves } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MissionStatement() {
	const t = useTranslations();

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 30 },
				show: {
					opacity: 1,
					y: 0,
					transition: { duration: 1, ease: "easeOut" },
				},
			}}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="py-16 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.6 },
						}}
						viewport={{ once: true }}
					>
						<Waves className="w-12 h-12 text-blue-600 mx-auto mb-6" />
					</motion.div>
					<motion.h2
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
						}}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="text-3xl font-bold text-gray-900 mb-6"
					>
						{t("about.ourMission")}
					</motion.h2>
					<motion.article
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
						}}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="text-gray-600 text-left prose prose-sm lg:prose-lg mx-auto"
					>
						<ul className="list-disc pl-6 space-y-2">
							{t.raw("about.mission").map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</motion.article>
				</div>
			</div>
		</motion.div>
	);
}
