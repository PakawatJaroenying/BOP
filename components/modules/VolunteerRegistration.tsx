'use client'
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

function VolunteerRegistration() {
	const t = useTranslations();
	const [email, setEmail] = React.useState("");

	return (
		<section className="py-20 bg-gradient-to-b from-blue-900 to-teal-900 text-white">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold mb-8 headline">
					{t("volunteer.title")}
				</h2>
				<p className="text-xl mb-8 body">{t("volunteer.description")}</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<input
						type="email"
						placeholder={t("volunteer.emailPlaceholder")}
						className="px-6 py-3 rounded-lg text-gray-900"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button
						size="lg"
						className="bg-teal-600 hover:bg-teal-700"
					>
						{t("volunteer.register")}
					</Button>
				</div>
			</div>
		</section>
	);
}

export default VolunteerRegistration;
