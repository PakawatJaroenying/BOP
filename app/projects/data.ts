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
			name: "Green Tide Initiative",
			description:
				language === Language.EN
					? `
                Blue Ocean Plastic Recycling is proud to collaborate with the Plastic Smart Cities initiative by WWF in the Surat Thani and Koh Samui regions. This global program aims to address plastic pollution by fostering innovative, scalable solutions for waste management in urban and coastal areas.
                In partnership with Ranong Recycle Social Enterprise (RRE), the initiative enhances local waste management infrastructure by expanding the network of community waste banks and upgrading Material Recovery Facilities (MRFs) to process more plastic waste efficiently. The program also emphasizes education by introducing plastic reduction initiatives at schools, equipping the next generation with the knowledge and tools to drive sustainable change.
                This effort aligns with the broader mission of the Plastic Smart Cities program, which works with cities worldwide to reduce plastic leakage into nature and promote sustainable practices through community engagement and innovative strategies.
            `
					: `
                บริษัท บลู โอเชียน พลาสติกรีไซคลิ่ง จำกัด (BOP) ภูมิใจที่ได้ร่วมมือกับองค์กร WWF ในพื้นที่สุราษฎร์ธานีและเกาะสมุย โดยโครงการระดับโลกนี้มีเป้าหมายในการแก้ไขปัญหามลพิษจากพลาสติกด้วยการส่งเสริมวิธีการจัดการขยะที่เป็นนวัตกรรมและขยายผลได้ในเขตเมืองและพื้นที่ชายฝั่ง
                ด้วยความร่วมมือกับวิสาหกิจชุมชนเพื่อสิ่งแวดล้อมระนองรีไซเคิล (RRE) โครงการนี้ได้พัฒนาระบบการจัดการขยะในท้องถิ่นโดยขยายเครือข่ายธนาคารขยะชุมชน และปรับปรุงศูนย์คัดแยกวัสดุ (Material Recovery Facilities - MRFs) ให้สามารถจัดการขยะพลาสติกได้อย่างมีประสิทธิภาพมากขึ้น นอกจากนี้ โครงการยังมุ่งเน้นการให้ความรู้ผ่านการริเริ่มโครงการลดการใช้พลาสติกในโรงเรียน เพื่อสร้างความรู้และทักษะให้กับเยาวชนในการขับเคลื่อนการเปลี่ยนแปลงอย่างยั่งยืน
                ความพยายามนี้สอดคล้องกับพันธกิจที่กว้างขึ้นขององค์กร WWF ซึ่งร่วมมือกับเมืองต่างๆ ทั่วโลกเพื่อลดการรั่วไหลของพลาสติกสู่ธรรมชาติ และส่งเสริมแนวปฏิบัติที่ยั่งยืนผ่านการมีส่วนร่วมของชุมชนและกลยุทธ์นวัตกรรม
            `,
			image:
				"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vY2t1cHxlbnwwfHx8fDE2ODQ4NzY3MjA&ixlib=rb-1.2.1&q=80&w=400",
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
			image:
				"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vY2t1cHxlbnwwfHx8fDE2ODQ4NzY3MjA&ixlib=rb-1.2.1&q=80&w=400",
		},
	];

	return { projects };
}
