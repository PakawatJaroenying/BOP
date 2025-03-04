"use client";
import React from "react";
import { Button } from "../ui/button";
import {
	Share2,
	Info,
	Phone,
	Facebook,
	Twitter,
	Instagram,
	Link,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link as LinkNext } from "@/src/i18n/routing";
import Image from "next/image";
const footerVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

const columnVariants = {
	hidden: { opacity: 0, y: 30 },
	show: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: index * 0.2 },
	}),
};

function Footer() {
	const t = useTranslations("footer");

	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="bg-blue-900 text-white py-12 px-4 md:px-0"
		>
			<div className="container mx-auto">
				<div className="grid md:grid-cols-3 gap-8   pt-8 ">
					{/* About */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						custom={0}
					>
						<div className="flex items-center gap-2 mb-4 justify-center">
							<Info className="w-5 h-5" />
							<h3 className="text-xl font-bold">{t("about.title")}</h3>
							<Image
								src={"/logo-removebg-preview.png"}
								alt="BOP"
								width={30}
								height={30}
							/>
						</div>
						<div className="text-center mb-4">
							<h2 className="text-md font-bold text-white mb-2">
								Blue Ocean Plastic Recycling CO., LTD.
							</h2>
							<p className="text-sm text-teal-600 font-semibold tracking-wide">
								INNOVATING SUSTAINABILITY
							</p>
							<p className="text-blue-200 text-sm mt-2">
								Transforming waste into opportunity through ethical recycling,
								sustainability, and circular economy solutions. ♻🌍
							</p>
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						custom={1}
					>
						<div className="flex items-center gap-2 mb-4 justify-center">
							<Link className="w-5 h-5" />
							<h3 className="text-xl font-bold">{t("quickLinks.title")}</h3>
						</div>
						<ul className="space-y-2">
							{[
								{ name: "Home", link: "/" },
								{
									name: "About",
									link: "/about-us",
								},
								{ name: "Projects", link: "/projects" },
								{
									name: "Resources",
									link: "/resource",
								},
								{
									name: "Gallery",
									link: "/gallery",
								},
								{
									name: "Contact",
									link: "/contact",
								},
							].map((link, i) => (
								<li
									key={i}
									className="text-center"
								>
									<LinkNext
										href={link.link}
										className="text-blue-200 hover:text-white transition duration-200  "
									>
										{t(`quickLinks.${link.name}`)}
									</LinkNext>
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
						<div className="flex items-center gap-2 mb-4 justify-center	">
							<Phone className="w-5 h-5" />
							<h3 className="text-xl font-bold">{t("contact")}</h3>
						</div>
						<ul className="space-y-2">
							{[
								{
									name: "Facebook",
									icon: <Facebook className="w-4 h-4 inline" />,
									link: "https://www.facebook.com/Thesustainabilityjourneysamui",
								},

								{
									name: "Instagram",
									icon: <Instagram className="w-4 h-4 inline" />,
									link: "https://www.instagram.com/bop.thailand/",
								},
							].map((platform, i) => (
								<li key={i}>
									<a
										href={platform.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-blue-200 hover:text-white transition duration-200 justify-center"
									>
										{platform.icon} {platform.name}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</motion.footer>
	);
}

export default Footer;
