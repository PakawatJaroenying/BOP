import Image from "next/image";
import { useTranslations } from "next-intl";

function AboutPage() {
	const t = useTranslations();
	const aboutPage = t.raw("about.aboutPage");
	return (
		<div className="container mx-auto px-4 py-12 flex flex-col gap-8">
			{aboutPage.map((section, idx) => (
				<div key={idx}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
						{section.images.map((img, i) => (
							<div
								key={img}
								className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center"
							>
								<Image
									src={img}
									alt={section.alt[i]}
									width={600}
									height={400}
									className="object-cover w-full h-64"
									priority={idx === 0}
								/>
							</div>
						))}
					</div>
					{section.credit && (
						<div className="text-center mt-2">
							<span className="text-xs text-gray-500 italic">
								{section.credit}
							</span>
						</div>
					)}
					<div className="text-center mt-4">
						<h3 className="text-xl md:text-2xl font-semibold text-blue-900">
							{section.textKey}
						</h3>
					</div>
				</div>
			))}
		</div>
	);
}

export default AboutPage;
