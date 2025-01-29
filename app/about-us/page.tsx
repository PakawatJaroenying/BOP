import React from "react";

const teamMembers = [
	{
		name: "Panipol Apichitsakul",
		nickname: "Dan",
		position: "Project Lead",
		description: `Dan currently leads RRE’s and BOP’s projects in Surat Thani and Koh Samui, focusing on the collection and reprocessing of low-value plastic in his hometown of Koh Samui and its surrounding areas. Under his leadership, RRE has scaled up the production of locally made eco-concrete bricks and other recycled, environmentally friendly products, collaborating with local recyclers to promote more sustainable and environmentally conscious island living in the Thai Gulf. Looking ahead, Dan aims to incorporate advanced technology, enhance health and safety measures, and strengthen leakage control in waste management across local, operational, and corporate levels in upcoming RRE and BOP projects.`,
		image: "/Dan.png",
	},
	{
		name: "Sirawan Kuanwinit",
		nickname: "Due",
		position:
			"Head of Business Development/Business Administration and Support",
		description: `Building on her previous experience as an Audit Assistant Manager at one of Thailand’s Big Four audit firms and her role in managing her family’s retail business, she brings a wealth of expertise to her work. She applies her skills to establish and continually enhance internal controls while overseeing BOP/RRE’s accounting processes and workflow, from inception to completion. Her responsibilities include organizing and supervising administrative tasks, resolving administrative and tax-related issues, and maintaining follow-ups with BOP/RRE’s partners. She plays a pivotal role in ensuring that all financial objectives of the project align with WWF Thailand’s framework and meet the standards of other national and international organizations. Driven by a passion for self-improvement, she is currently pursuing online courses in accounting and finance, aiming to apply her newfound knowledge to financial reporting and other corporate needs for BOP/RRE and its partners. A proud Ranong native, she is also a skilled archer and an avid baker.`,
		image: "/Due.png",
	},
	{
		name: "Thanith Pakdeewanich",
		nickname: "Jan",
		position: "Senior Field Coordinator (Samui)",
		description:
			"From the start of the project, Jan helps start and foster a strong working relationship between BOP/RRE and the waste management communities of collectors and waste workers in Koh Samui and nearby islands. She has hands-on experience managing the waste bank network; and is able to connect freely and effortlessly with local waste aggregators, with an in-depth knowledge about day-to-day waste collection and transportation operations both at the waste bank and MRF levels. She is also passionate about identifying different types of plastic, educating and encouraging the communities towards better waste segregation.",
		image: "/Jan.jpg",
	},
	{
		name: "Surat Naktap",
		nickname: "Oil",
		position: "Field Coordinator (Surat Thani)",
		description:
			"With a background in construction management, Oil helps support our field team, especially the work of the field manager in MRF up-skill plans and connecting the communities to the right buyers. Based in Surat Thani, she helps widen the waste bank network of BOP/RRE in her hometown of Surat Thani. Detail-oriented, she is highly involved in data collection tasks for the projects at BOP/RRE. Her work and life motto is: “I can do it—and do it better.” In her free time, she enjoys spending quality time with her family members, which includes more than half a dozen Persian cats.",
		image: "/Oil.jpg",
	},
	{
		name: "Yada Klinsanit (Pooh)",
		nickname: "Pooh",
		position: "Part-time Education/Training Consultant (RRE and BOP)",
		description:
			"Yada or Pooh has an extensive background in education and is passionate about teaching the young (and the older!) about environmental issues through different approaches ranging from behavior changes to raising awareness about natural conservation and ecotourism. She tirelessly works with students, teachers and educators or trainers at local government-run schools and private sectors in Koh Samui and Surat Thani in reducing the use of plastic and preventing plastic leakage at a school or an organization’s level. A certified tour guide, her passion about travels makes her a world explorer in her own right.",
		image: "/Pooh.png",
	},
];

function AboutUsPage() {
	return (
		<div className="bg-blue-100 min-h-screen p-8 relative">
            {/* <iframe
                className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-10"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/l1DbMTGu70s?autoplay=1&si=9Qr9GLiX3ZbLPfXA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe> */}
			<div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 ">
				<h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
					About Us
				</h1>

				{/* Company History Section */}
				<section className="mb-12 text-center">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">
						Our Mission to Combat Plastic Waste
					</h2>
					<p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
						Since July 2022, Blue Ocean Plastic Recycling (BOP) in cooperation
						with Ranong Recycle Enterprise (RRE) and WWF Thailand has worked
						with around 20 communities along the Koh Samui’s coast lines.
						Overall, nearly 2,000 local people have joined in the community-led
						waste bank network resulting in the recovery of 200 tons of plastics
						which comprises both high-value and low-value plastic. The
						high-value goes to the manufacturers for reprocessing; the
						low-value, to the local recyclers of eco-bricks, souvenirs and many
						more. This highlights a successful model of waste management
						endeavors spearheaded by the communities on both ends of the value
						chain of recycled plastic—collection and reprocessing. The plastic
						credit/incentivisation schemes introduced by RRE to the waste bank
						network not only yields economic and social benefits for the locals,
						but its systematic approach also helps improve the transparency and
						traceability in the supply chain. All of this—while empowering and
						up-skilling local communities and entities to become an essential
						part of the value chain. a cleaner, healthier marine environment for
						future generations.
					</p>
					<img
						src="https://via.placeholder.com/800x400"
						alt="Company Overview"
						className="rounded-lg shadow-md mt-6 mx-auto"
					/>
				</section>

				{/* New Section */}
				<section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
					<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
						<div className="grid items-center grid-cols-1 md:grid-cols-2">
							<div>
								<h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
									Hey 👋 I am
									<br className="block sm:hidden" />
									Jenny Carter
								</h2>
								<p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
									Exercitation veniam consequat sunt nostrud amet.
								</p>
								<p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
									<span className="relative inline-block">
										<span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
										<span className="relative"> Have a question? </span>
									</span>
									<br className="block sm:hidden" />
									Ask me on{" "}
									<a
										href="#"
										title=""
										className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
									>
										Twitter
									</a>
								</p>
							</div>
							<div className="relative">
								<img
									className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
									src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
									alt=""
								/>
								<img
									className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
									src="/Pooh.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section>
					<h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
						Meet Our Team
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
							>
								<img
									src={member.image}
									alt={member.name}
									className="w-32 h-32 rounded-full mx-auto border-4 border-blue-200"
								/>
								<h3 className="text-xl font-bold text-blue-800 mt-4">
									{member.name}
								</h3>
								<p className="text-gray-500 font-medium">{member.position}</p>
								<p className="text-gray-600 mt-2">{member.description}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default AboutUsPage;
