"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Facebook,
	FileText,
	Instagram,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";

function ContentSection() {
	const t = useTranslations();

	return (
		<section className="py-20">
			<div className="max-w-4xl mx-auto px-4">
				<Card className="p-8 md:p-12 bg-white shadow-xl">
					<div className="text-center mb-12">
						<motion.img
							src="/logoCompany.png"
							alt="Blue Ocean Plastic Recycling Logo"
							className="mx-auto mb-6 w-80"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						/>

						<h2 className="text-3xl font-bold text-blue-900 mb-2">
							Blue Ocean Plastic Recycling CO., LTD.
						</h2>
						<p className="text-lg text-teal-600 font-semibold tracking-wide">
							INNOVATING SUSTAINABILITY
						</p>
					</div>

					<div className="space-y-8">
						<div className="flex items-start gap-4">
							<div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
								<MapPin className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									{t("contact.address.title")}
								</h3>
								<p className="text-gray-600">
									221/11 Moo2, Bang Rin, Muang Ranong,
									<br />
									Ranong, Thailand, 85000
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
								<Mail className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									{t("contact.email.title")}
								</h3>
								<a
									href="mailto:bop.thailand2021@gmail.com"
									className="text-blue-600 hover:text-blue-700"
								>
									bop.thailand2021@gmail.com
								</a>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
								<Phone className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									{t("contact.phone.title")}
								</h3>
								<a
									href="tel:+66947075652"
									className="text-blue-600 hover:text-blue-700"
								>
									+66 (0) 94 707 5652
								</a>
								<p className="text-sm text-gray-500 mt-1">
									{t("contact.phone.subtitle")}
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
								<Facebook className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Facebook
								</h3>

								<a
									href="https://www.facebook.com/Thesustainabilityjourneysamui"
									className="text-blue-600 hover:text-blue-700"
								>
									Facebook
								</a>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
								<Instagram className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-1">
									Instagram
								</h3>

								<a
									href="https://www.instagram.com/bop.thailand/"
									className="text-blue-600 hover:text-blue-700"
								>
									Instagram
								</a>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
}

export default ContentSection;
