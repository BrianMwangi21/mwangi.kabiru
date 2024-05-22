package pages

type Experince struct {
	Company     string
	CompanyLink string
	Title       string
	Description string
	Duration    string
}

type Project struct {
	Name        string
	Link        string
	Description string
}

var EXPERIENCES = []Experince{
	{Company: "Sourcefabric z.ú", CompanyLink: "https://www.sourcefabric.org/", Title: "Full Stack Developer", Description: "Working on Live Blog, a product of SourceFabric, which is an open source platform that allows coverage of live events and breaking news with a curated timeline including text, images, audio and video from reporters and social media channels.", Duration: "Nov 2023 - Present"},
	{Company: "Atlys", CompanyLink: "https://www.atlys.com/", Title: "Frontend Developer", Description: "Improved Atlys UI/UX for both web and mobile platforms for the B2C product, resulting in increased user satisfaction and engagement. Helped migrate the integral blog section to Prismic CMS and optimized for SEO and speed.", Duration: "Sep 2022 - Oct 2023"},
	{Company: "Azenia Technology", CompanyLink: "https://azenia.com/", Title: "Full Stack Developer", Description: "Improved in-house bank management UI system as well as building robust APIs using Spring Boot for customer loan application process.", Duration: "Oct 2021 - Jan 2023"},
	{Company: "Digital Vision EA", CompanyLink: "https://digitalvisionea.com/", Title: "Full Stack Developer", Description: "Enhanced user experience and accelerates web application responsiveness for our clients and users using the Chamasoft web application.", Duration: "Nov 2020 - Oct 2021"},
}

var PROJECTS = []Project{
	{Name: "anti-discover", Link: "https://anti-discover.fly.dev/", Description: "Sometimes, Discover Weekly gets boring. Get some suggestions that you would never think of!"},
	{Name: "mwangi.kabiru", Link: "https://anti-discover.fly.dev/", Description: "We all need a beautiful portfolio, right ? And in HTML and Templ, right ? I mean, look at this minimalist one."},
	{Name: "thoughts.io", Link: "https://thoughts-io.vercel.app/", Description: "If your mind gets clouded and cluttered, sometimes you just want to see the thoughts float away."},
	{Name: "orders-of-peaky", Link: "https://github.com/BrianMwangi21/order-of-peaky", Description: "Get the orderbook details from Binance on your CLI and keep a synchronized local orderbook."},
	{Name: "calorie-counter", Link: "https://github.com/BrianMwangi21/calorie-counter", Description: "If AI content is harmful calories, we are about to be a generation of obese folks. Can you keep count ?"},
}

var LINGOS = []string{
	"/static/images/go.svg",
	"/static/images/python.svg",
	"/static/images/ts.svg",
	"/static/images/next.svg",
	"/static/images/java.svg",
	"/static/images/htmx.svg",
	"/static/images/neovim.svg",
}
