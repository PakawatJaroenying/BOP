"use client";

import { Menu, Waves } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LanguageToggle from "./LanguageToggle";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { motion } from "framer-motion";

// Variants สำหรับ Navbar (Fade-in เมื่อโหลดหน้าเว็บ)
const navVariants = {
	hidden: { opacity: 0, y: -20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Variants สำหรับ Nav Links (Fade-in ทีละตัว)
const linkVariants = {
	hidden: { opacity: 0, y: 10 },
	show: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: index * 0.1 },
	}),
};

// Variants สำหรับ Mobile Menu (เลื่อนจากขวาเข้ามา)
const mobileMenuVariants = {
	hidden: { opacity: 0, x: 50 },
	show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const t = useTranslations();
	const locale = useLocale();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navLinks = [
		{ href: `/about-us`, label: t("nav.about") },
		{ href: `/projects`, label: t("nav.projects") },
		{ href: `/#`, label: t("nav.getInvolved") },
		{ href: `/#`, label: t("nav.resources") },
		{ href: `/#`, label: t("nav.contact") },
	];

	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			animate="show"
			className={`fixed w-full z-50 transition-colors duration-500 body ${
				scrolled ? "bg-teal-500 shadow-lg" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					{/* LOGO */}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
					>
						<Link href="/" className="flex items-center headline">
							<Waves
								className={`h-8 w-8 transition-colors duration-500 ${
									scrolled ? "text-black" : "text-white"
								}`}
							/>
							<span
								className={`ml-2 font-bold text-xl transition-colors duration-500 ${
									scrolled ? "text-black" : "text-white"
								}`}
							>
								BOP
							</span>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<motion.div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link, index) => (
							<motion.div
								key={link.label}
								variants={linkVariants}
								initial="hidden"
								animate="show"
								custom={index}
							>
								<Link
									href={link.href}
									className={`transition-colors duration-500 ${
										scrolled
											? "text-black hover:text-blue-600"
											: "text-white hover:text-blue-200"
									}`}
								>
									{link.label}
								</Link>
							</motion.div>
						))}
						<LanguageToggle />
					</motion.div>

					{/* Mobile Navigation */}
					<div className="md:hidden flex items-center gap-4">
						<LanguageToggle />
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<button
									className={`p-2 transition-colors duration-500 ${
										scrolled ? "text-black" : "text-white"
									}`}
								>
									<Menu className="h-6 w-6" />
								</button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] sm:w-[400px]"
							>
								<motion.div
									variants={mobileMenuVariants}
									initial="hidden"
									animate="show"
									className="flex flex-col gap-4 mt-8"
								>
									{navLinks.map((link) => (
										<Link
											key={link.label}
											href={link.href}
											className="text-lg font-medium hover:text-blue-600 transition-colors"
											onClick={() => setIsOpen(false)}
										>
											{link.label}
										</Link>
									))}
								</motion.div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}
