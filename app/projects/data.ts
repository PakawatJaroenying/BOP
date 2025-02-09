import { Language, useLanguage } from "@/context/LanguageProvider";

export interface Project {
	name: string;
	description: string;
	image: string;
}
export function useData() {
	const { language } = useLanguage();

	const projects = [
		{
			name: "Plastic Smart Cities by the WWF",
			description:
				language === Language.EN
					? `
                Blue Ocean Plastic Recycling (BOP) is proud to collaborate with Ranong Recycle Social Enterprise (RRE) in enhancing local waste management infrastructure in Surat Thani and Koh Samui. As part of these efforts, BOP and RRE work together to expand the network of community waste banks and improve Material Recovery Facilities (MRFs) to process plastic waste more efficiently.
				These initiatives contribute to the broader goals of the Plastic Smart Cities initiative by WWF, a global program that supports scalable waste management solutions in urban and coastal areas. While BOP is not a direct partner of WWF, our work with RRE aligns with the initiative’s mission to reduce plastic leakage into nature through innovation, education, and community engagement.
				Through this collaboration, we also support educational programs focused on plastic reduction in schools, empowering the next generation with knowledge and tools to drive sustainable change.
            `
					: `
                บริษัท บลู โอเชียน พลาสติกรีไซคลิ่ง จำกัด (BOP) มีความภาคภูมิใจที่ได้ร่วมมือกับ วิสาหกิจชุมชนเพื่อ สิ่งแวดล้อมระนองรีไซเคิล (RRE) ในการพัฒนาระบบการจัดการขยะในพื้นที่สุราษฎร์ธานีและเกาะสมุยโดย ร่วมกันขยายเครือข่ายธนาคารขยะชุมชนและปรับปรุงศูนย์คัดแยกวัสดุ (MRFs) เพื่อเพิ่มประสิทธิภาพการจัด การขยะพลาสติก
				ความร่วมมือนี้สอดคล้องกับเป้าหมายของโครงการ Plastic Smart Cities โดย WWF ซึ่งเป็นโครงการ ระดับโลกที่สนับสนุนแนวทางการจัดการขยะ ที่สามารถขยายผลได้ในเขตเมืองและพื้นที่ชายฝั่ง แม้ว่า BOP จะไม่ได้เป็นพันธมิตรโดยตรง แต่โครงการที่เราดำเนินการร่วมกับ RRE นั้นมีส่วนช่วยผลักดันเป้าหมายของ โครงการนี้ในการลดการรั่วไหลของขยะพลาสติกสู่สิ่งแวดล้อมผ่านนวัตกรรม การศึกษา และการมีส่วน ร่วม  ของชุมชน
				นอกจากนี้ เรายังสนับสนุนโครงการให้ความรู้ด้านการลดขยะพลาสติกในโรงเรียน เพื่อเสริมสร้างความรู้ และทักษะให้กับเยาวชนในการขับเคลื่อนการเปลี่ยนแปลงอย่างยั่งยืน
            `,
			images: [
				"/projects/Project1-PlasticSmart/1.jpg",
				"/projects/Project1-PlasticSmart/2.jpg",
				"/projects/Project1-PlasticSmart/3.jpg",
				"/projects/Project1-PlasticSmart/4.jpg",
			],
		},
		{
			name: "EcoTourism Smart Waste",
			description:
				language === Language.EN
					? `
                Blue Ocean Plastic Recycle is proud to partner with UNDP Indonesia to develop a multi-faceted waste management model tailored to the tourism sector in Koh Samui. This innovative approach addresses the often-overlooked role of tourism in driving waste and environmental challenges. Scalable to similar locations, the project introduces a digital platform enabling tourists and businesses to earn rewards for eco-friendly actions. Additionally, it empowers local youth through capacity-building programs, transforming them into leaders in beach cleaning and sustainability efforts, seamlessly connecting all aspects of the initiative.
            `
					: `
                	บริษัท บลู โอเชียน พลาสติกรีไซคลิ่ง จำกัด (BOP) ภูมิใจที่ได้ร่วมมือกับ UNDP อินโดนีเซียในการพัฒนารูปแบบการจัดการขยะหลายมิติที่ออกแบบเฉพาะสำหรับภาคการท่องเที่ยวในเกาะสมุย แนวทางนวัตกรรมนี้มุ่งจัดการบทบาทของการท่องเที่ยวที่มักถูกมองข้ามในปัญหาขยะและสิ่งแวดล้อม โครงการนี้สามารถขยายผลไปยังสถานที่คล้ายกันได้ โดยนำเสนอแพลตฟอร์มดิจิทัลที่ช่วยให้นักท่องเที่ยวและธุรกิจได้รับรางวัลจากการดำเนินการที่เป็นมิตรต่อสิ่งแวดล้อม นอกจากนี้ยังเสริมสร้างศักยภาพเยาวชนในท้องถิ่นผ่านโปรแกรมพัฒนาทักษะ เพื่อเปลี่ยนพวกเขาให้เป็นผู้นำในด้านการทำความสะอาดชายหาดและความยั่งยืน เชื่อมโยงทุกแง่มุมของโครงการอย่างลงตัว
            `,
			images: [
				"/projects/Project2-UNDP/1.jpg",
				"/projects/Project2-UNDP/2.jpg",
				"/projects/Project2-UNDP/3.jpg",
				"/projects/Project2-UNDP/4.jpg",
				"/projects/Project2-UNDP/5.jpg",
				"/projects/Project2-UNDP/6.jpg",
			],
		},
	];

	return { projects };
}
