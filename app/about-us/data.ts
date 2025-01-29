export interface TeamMember {
	name: string;
	nickname: string;
	position: string;
	description: string;
	image: string;
}

export function useData() {
	const teamMembers = [
		{
			name: "Panipol Apichitsakul",
			nickname: "Dan",
			position: "Project Lead",
			description: `Dan currently leads RRE’s and BOP’s projects in Surat Thani and Koh Samui, focusing on the collection and reprocessing of low-value plastic in his hometown of Koh Samui and its surrounding areas. Under his leadership, RRE has scaled up the production of locally made eco-concrete bricks and other recycled, environmentally friendly products, collaborating with local recyclers to promote more sustainable and environmentally conscious island living in the Thai Gulf. Looking ahead, Dan aims to incorporate advanced technology, enhance health and safety measures, and strengthen leakage control in waste management across local, operational, and corporate levels in upcoming RRE and BOP projects.`,
			image: "/Dan.jpg",
		},
		{
			name: "Sirawan Kuanwinit",
			nickname: "Due",
			position:
				"Head of Business Development/Business Administration and Support",
			description: `Building on her previous experience as an Audit Assistant Manager at one of Thailand’s Big Four audit firms and her role in managing her family’s retail business, she brings a wealth of expertise to her work. She applies her skills to establish and continually enhance internal controls while overseeing BOP/RRE’s accounting processes and workflow, from inception to completion. Her responsibilities include organizing and supervising administrative tasks, resolving administrative and tax-related issues, and maintaining follow-ups with BOP/RRE’s partners. She plays a pivotal role in ensuring that all financial objectives of the project align with WWF Thailand’s framework and meet the standards of other national and international organizations. Driven by a passion for self-improvement, she is currently pursuing online courses in accounting and finance, aiming to apply her newfound knowledge to financial reporting and other corporate needs for BOP/RRE and its partners. A proud Ranong native, she is also a skilled archer and an avid baker.`,
			image: "/Due.jpg",
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
			image: "/Pooh.jpg",
		},
	];

	return { teamMembers };
}
