import { useTranslations } from "next-intl";
import React from "react";

function RecyclingMap() {
	const t = useTranslations();
	return (
		<section className="py-20 bg-teal-50">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-16 text-blue-900 headline">
					{t("map.title")}
				</h2>
				<div className="bg-white rounded-lg shadow-xl p-4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125922.81180473424!2d100.00141249999999!3d9.50108695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054f1501c66266f%3A0xedd55abd3d7d8330!2z4Lit4Liz4LmA4Lig4Lit4LmA4LiB4Liy4Liw4Liq4Lih4Li44Lii!5e0!3m2!1sth!2sth!4v1739444921579!5m2!1sth!2sth"
						width="600"
						height="450"
						style={{ border: 0 }}
						className="w-full"
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
}

export default RecyclingMap;
