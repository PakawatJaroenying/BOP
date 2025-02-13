"use client";

import { Menu, Waves } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LanguageToggle from "./LanguageToggle";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const t = useTranslations();
	const locale = useLocale();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
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
		<nav
			className={`fixed w-full z-50 transition-colors duration-500 body ${
				scrolled ? "bg-teal-500" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					<Link
						href="/"
						className="flex items-center headline"
					>
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

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className={`transition-colors duration-500 ${
									scrolled
										? "text-black hover:text-blue-600"
										: "text-white hover:text-blue-200"
								}`}
							>
								{link.label}
							</Link>
						))}
						<LanguageToggle />
					</div>

					{/* Mobile Navigation */}
					<div className="md:hidden flex items-center gap-4">
						<LanguageToggle />
						<Sheet
							open={isOpen}
							onOpenChange={setIsOpen}
						>
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
								<div className="flex flex-col gap-4 mt-8">
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
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
