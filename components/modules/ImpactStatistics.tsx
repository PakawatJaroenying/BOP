"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { RecycleIcon, TurtleIcon, Hourglass } from "lucide-react";
import Counter from "@/components/modules/Counter";
import { useTranslations } from "next-intl";

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
		<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-8 text-blue-900 headline">
					{t("impact.title")}
				</h2>

				<div className="grid md:grid-cols-3 gap-8">
					{stats.map((item, index) => (
						<Card
							key={index}
							className="p-6 text-center bg-white shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded-xl flex flex-col items-center"
						>
							<div className="w-20 h-20 flex items-center justify-center rounded-full bg-teal-100 shadow-md hover:shadow-lg transition-all">
								{React.cloneElement(item.icon, {
									className: "h-12 w-12 text-teal-600",
								})}
							</div>
							<div className="text-6xl font-extrabold text-teal-500 flex items-center justify-center headline mt-4">
								<Counter
									end={item.value}
									duration={2}
								/>
								<span className="ml-1 text-4xl">{item.unit}</span>
							</div>
							<p className="text-gray-700 mt-3 text-lg text-center">
								{item.text}
							</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
