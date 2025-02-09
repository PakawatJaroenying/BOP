"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Recycle, Share2, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { dictionary } from "@/lib/dictionary";
import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Counter from "@/components/modules/Counter";
import { useData } from "./projects/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
	const [email, setEmail] = useState("");
	const { language } = useLanguage();
	const t = dictionary[language as keyof typeof dictionary];
	const projects = useData().projects;

	return (
		<main className="min-h-screen">
			{/* Hero Section */}
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
					<h1 className="text-5xl md:text-7xl font-extrabold text-white headline animate-fadeIn">
						{t.hero.title}
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mt-6 body animate-fadeIn">
						{t.hero.subtitle}
					</p>
					<Button className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg">
						{t.hero.cta} <ArrowRight className="ml-2" />
					</Button>
				</div>
			</section>

			{/* Impact Statistics */}
			<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-8 text-blue-900 headline">
						{t.impact.title}
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: "/plastic-icon.svg",
								value: 8,
								unit: "M",
								text: t.impact.stats.plastic,
							},
							{
								icon: "/species-icon.svg",
								value: 700,
								unit: "",
								text: t.impact.stats.species,
							},
							{
								icon: "/years-icon.svg",
								value: 400,
								unit: "",
								text: t.impact.stats.years,
							},
						].map((item, index) => (
							<Card
								key={index}
								className="p-6 text-center bg-white shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded-xl flex flex-col items-center"
							>
								<Image
									src={item.icon}
									alt="Impact Icon"
									width={60}
									height={60}
									className="mb-4"
								/>
								<div className="text-6xl font-extrabold text-teal-500 flex items-center justify-center headline">
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

			{/* Projects Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-blue-900 headline">
						{t.projects.title}
					</h2>
					<div className="grid lg:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<div
								key={index}
								className="bg-white p-6 shadow-xl rounded-xl"
							>
								{/* Project Name */}
								<h3 className="text-2xl font-semibold text-gray-800 mb-4">
									{project.name}
								</h3>

								{/* Swiper for Images */}
								<Swiper
									modules={[Navigation, Pagination, Autoplay]}
									spaceBetween={10}
									slidesPerView={1}
									navigation
									pagination={{ clickable: true }}
									className="rounded-lg overflow-hidden h-96"
									autoplay={{ delay: 5000 }}
								>
									{project.images.map((image, i) => (
										<SwiperSlide
											key={i}
											className="relative w-full h-96"
										>
											<Image
												src={image}
												alt={`Project ${index + 1} Image ${i + 1}`}
												fill
												className="object-cover rounded-lg"
											/>
										</SwiperSlide>
									))}
								</Swiper>

								{/* Description */}
								<p className="text-gray-700 mt-4 line-clamp-5 text-justify body">
									{project.description}
								</p>
								<div className="w-full flex justify-end">
									<Button
										size="sm"
										className="mt-4 bg-teal-600 hover:bg-teal-700 text-end "
									>
										Read More
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Recycling Map */}
			<section className="py-20 bg-teal-50">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-blue-900 headline">
						{t.map.title}
					</h2>
					<div className="bg-white rounded-lg shadow-xl p-4">
						<div className="aspect-video relative">
							<div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
								<MapPin className="h-16 w-16 text-teal-600" />
								<p className="text-gray-600 body">{t.map.description}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Tips Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-blue-900 headline">
						{t.tips.title}
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{t.tips.list.map((tip, index) => (
							<Card
								key={index}
								className="p-6"
							>
								<Recycle className="h-12 w-12 text-teal-600 mb-4" />
								<h3 className="text-xl font-bold mb-2 headline">{tip.title}</h3>
								<p className="text-gray-600 body">{tip.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Volunteer Registration */}
			<section className="py-20 bg-gradient-to-b from-blue-900 to-teal-900 text-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-8 headline">
						{t.volunteer.title}
					</h2>
					<p className="text-xl mb-8 body">{t.volunteer.description}</p>
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
