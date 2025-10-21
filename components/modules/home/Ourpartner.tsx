import React from "react";

const partners = [
	{ name: "Tide Ocean Fabric", src: "/partner/1.tideoceanfabric_logo.jpg" },
	{ name: "RRE", src: "/partner/2.RRE Logo.png" },
	{ name: "JO", src: "/partner/3.Logo-JO.png" },
	{ name: "Second Life", src: "/partner/4. Second-Life.png" },
	{ name: "E2C", src: "/partner/5. E2C-Logo.jpg" },
	{ name: "MTEC", src: "/partner/6. MTEC Logo 2logo28aug.png" },
	{ name: "Veolia", src: "/partner/7. Veolia Logo 282781_1719906029440.webp" },
	{ name: "Second Muse", src: "/partner/8. Second Muse Logo.png" },
	{ name: "UNDP", src: "/partner/9.UNDP_logo.svg.png" },
];

function OurPartners() {
	return (
		<div className="py-8 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-xl shadow-lg border border-gray-100">
			<h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
				Our Partners
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
				{partners.map((partner) => (
					<div
						key={partner.name}
						className="flex flex-col items-center bg-white/70 rounded-lg p-3 shadow"
					>
						<img
							src={partner.src}
							alt={partner.name}
							className="h-20 w-auto object-contain mb-2 drop-shadow"
						/>
						{/* <span className="text-sm text-center">{partner.name}</span> */}
					</div>
				))}
			</div>
		</div>
	);
}

export default OurPartners;
