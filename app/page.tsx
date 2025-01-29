"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Recycle, Share2, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { dictionary } from "@/lib/dictionary";
import { useLanguage } from "@/context/LanguageProvider";

export default function Home() {
	const [email, setEmail] = useState("");
	const { language } = useLanguage();
	const t = dictionary[language as keyof typeof dictionary];

	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center">
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 to-blue-900/70" />
				</div>
				<div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
					<h1 className="text-5xl md:text-7xl font-bold mb-6">
						{t.hero.title}
					</h1>
					<p className="text-xl md:text-2xl mb-8">{t.hero.subtitle}</p>
					<Button
						size="lg"
						className="bg-teal-600 hover:bg-teal-700"
					>
						{t.hero.cta} <ArrowRight className="ml-2" />
					</Button>
				</div>
			</section>

			{/* Impact Statistics */}
			<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
						{t.impact.title}
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-5xl font-bold text-teal-600 mb-4">8M</div>
							<p className="text-gray-600">{t.impact.stats.plastic}</p>
						</Card>
						<Card className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-5xl font-bold text-teal-600 mb-4">700</div>
							<p className="text-gray-600">{t.impact.stats.species}</p>
						</Card>
						<Card className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
							<div className="text-5xl font-bold text-teal-600 mb-4">400</div>
							<p className="text-gray-600">{t.impact.stats.years}</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
						{t.projects.title}
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{t.projects.list.map((project, index) => (
							<Card
								key={index}
								className="overflow-hidden"
							>
								<div className="h-48 relative">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-gray-600 mb-4">{project.description}</p>
									<Button
										variant="outline"
										className="w-full"
									>
										<Calendar className="mr-2 h-4 w-4" /> {project.viewSchedule}
									</Button>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Recycling Map */}
			<section className="py-20 bg-teal-50">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
						{t.map.title}
					</h2>
					<div className="bg-white rounded-lg shadow-xl p-4">
						<div className="aspect-video relative">
							<div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
								<MapPin className="h-16 w-16 text-teal-600" />
								<p className="text-gray-600">{t.map.description}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Tips Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
						{t.tips.title}
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{t.tips.list.map((tip, index) => (
							<Card
								key={index}
								className="p-6"
							>
								<Recycle className="h-12 w-12 text-teal-600 mb-4" />
								<h3 className="text-xl font-bold mb-2">{tip.title}</h3>
								<p className="text-gray-600">{tip.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Volunteer Registration */}
			<section className="py-20 bg-gradient-to-b from-blue-900 to-teal-900 text-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-8">{t.volunteer.title}</h2>
					<p className="text-xl mb-8">{t.volunteer.description}</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<input
							type="email"
							placeholder={t.volunteer.emailPlaceholder}
							className="px-6 py-3 rounded-lg text-gray-900"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Button
							size="lg"
							className="bg-teal-600 hover:bg-teal-700"
						>
							{t.volunteer.register}
						</Button>
					</div>
				</div>
			</section>

			
		</main>
	);
}
