'use client'
import React from "react";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// Variants สำหรับ Footer (Fade-in เมื่อ Scroll ลงมา)
const footerVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

// Variants สำหรับแต่ละคอลัมน์ (เลื่อนขึ้น + Fade-in)
const columnVariants = {
	hidden: { opacity: 0, y: 30 },
	show: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: index * 0.2 },
	}),
};

function Footer() {
	const t = useTranslations('footer');

	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="bg-blue-900 text-white py-12"
		>
			<div className="container mx-auto">
				<div className="grid md:grid-cols-4 gap-8">
					{/* About */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						custom={0}
					>
						<h3 className="text-xl font-bold mb-4">{t("about.title")}</h3>
						<p className="text-blue-200">{t("about.description")}</p>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						custom={1}
					>
						<h3 className="text-xl font-bold mb-4">{t("quickLinks.title")}</h3>
						<ul className="space-y-2">
							{["projects", "volunteer", "map"].map((link, i) => (
								<li key={i}>
									<a href="#" className="text-blue-200 hover:text-white">
										{t(`quickLinks.${link}`)}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						custom={2}
					>
						<h3 className="text-xl font-bold mb-4">{t("contact")}</h3>
						<ul className="space-y-2">
							{["Facebook", "Twitter", "Instagram"].map((platform, i) => (
								<li key={i}>
									<a href="#" className="text-blue-200 hover:text-white">
										{platform}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Share */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						custom={3}
					>
						<h3 className="text-xl font-bold mb-4">{t("share.title")}</h3>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								variant="link"
								className="text-white border-white hover:bg-white/10 !text-start justify-start"
								onClick={() => {
									// คัดลอก URL และแชร์
									navigator.clipboard
										.writeText(window.location.href)
										.then(() => {
											alert(t("share.copied"));
										})
										.catch((err) => {
											console.error("Failed to copy: ", err);
										});
								}}
							>
								<Share2 className="mr-2 h-4 w-4" /> {t("share.button")}
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
