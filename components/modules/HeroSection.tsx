"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
	const t = useTranslations();
	return (
		<section className="relative h-screen flex items-center justify-center text-center">
			<div
				className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 to-blue-900/70" />
			</div>

			<div className="relative z-10 max-w-3xl mx-auto px-4">
				<h1 className="text-5xl md:text-7xl font-extrabold text-white body animate-fadeIn">
					{t("hero.title")}
				</h1>
				<h2 className="text-xl md:text-2xl text-gray-300 mt-6 body animate-fadeIn">
					{t("hero.subtitle")}
				</h2>
				<Button className="body mt-6 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg">
					{t("hero.cta")} <ArrowRight className="ml-2" />
				</Button>
			</div>
		</section>
	);
}
