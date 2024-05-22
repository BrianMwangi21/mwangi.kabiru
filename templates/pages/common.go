package pages

type Experince struct {
	Company     string
	CompanyLink string
	Title       string
	Description string
	Duration    string
}

var EXPERIENCES = []Experince{
	{Company: "Sourcefabric z.ú", CompanyLink: "https://www.sourcefabric.org/", Title: "Full Stack Developer", Description: "Working on Live Blog, a product of SourceFabric, which is an open source platform that allows coverage of live events and breaking news with a curated timeline including text, images, audio and video from reporters and social media channels.", Duration: "Nov 2023 - Present"},
	{Company: "Atlys", CompanyLink: "https://www.atlys.com/", Title: "Frontend Developer", Description: "Improved Atlys UI/UX for both web and mobile platforms for the B2C product, resulting in increased user satisfaction and engagement. Helped migrate the integral blog section to Prismic CMS and optimized for SEO and speed.", Duration: "Sep 2022 - Oct 2023"},
	{Company: "Azenia Technology", CompanyLink: "https://azenia.com/", Title: "Full Stack Developer", Description: "Improved in-house bank management UI system as well as building robust APIs using Spring Boot for customer loan application process.", Duration: "Oct 2021 - Jan 2023"},
	{Company: "Digital Vision EA", CompanyLink: "https://digitalvisionea.com/", Title: "Full Stack Developer", Description: "Enhanced user experience and accelerates web application responsiveness for our clients and users using the Chamasoft web application.", Duration: "Nov 2020 - Oct 2021"},
}
