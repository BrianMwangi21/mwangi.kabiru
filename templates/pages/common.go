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
	{Name: "anti-charts", Link: "https://github.com/BrianMwangi21/anti-charts", Description: "Get the info for different crypto pairs from binance and perform analysis on it. You can also optionally make trades on Alpaca."},
	{Name: "mwangi.kabiru", Link: "https://mwangikabiru.fly.dev/", Description: "We all need a beautiful portfolio, right ? And in HTMX and Templ, right ? I mean, look at this minimalist one."},
	{Name: "thoughts.io", Link: "https://thoughts-io.vercel.app/", Description: "If your mind gets clouded and cluttered, sometimes you just want to see the thoughts float away."},
	{Name: "drawless", Link: "https://drawless.fly.dev/", Description: "Play a new chess variant where you can insert random pieces to keep it going"},
	{Name: "orders-of-peaky", Link: "https://github.com/BrianMwangi21/order-of-peaky", Description: "Get the orderbook details from Binance on your CLI and keep a synchronized local orderbook."},
	{Name: "calorie-counter", Link: "https://github.com/BrianMwangi21/calorie-counter", Description: "If AI content is harmful calories, we are about to be a generation of obese folks. Can you keep count ?"},
	{Name: "elimu.dev", Link: "https://elimu.dev", Description: "Your premier education support tool. Empowering both teachers and learners."},
	{Name: "raas", Link: "https://github.com/BrianMwangi21/raas", Description: "Romance as a Service. Your very own open-source wingman!"},
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

var QUOTES = []string{
	"Do not outsource personal decisions",
	"Remember when you pray, there's two people listening on the end of the line. And you'll know who answers",
	"At the end of the day, the day's gone end",
	"What happens to a dream deferred ?",
	"That which gets measured, gets managed",
	"If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagine, he will meet with a success unexpected in common hours",
	"When you are overexposed to media, you are paralyzed by choice and never feel fulfilled",
	"Twitter in a nutshell. No context, all lower caps, post and ghost",
	"We are all large language learning models",
	"Don't make pawn to A4 moves",
	"It's not always speedboats and supermodels",
	"You can't afford to butter the wrong bread",
	"Always strive to arrive earlier. I mean, you get the best seats",
	"Are you doin' this work to facilitate growth or to become famous ?  Which is more important? Getting or letting go?",
	"Try not to be as useless as summer fires and winter fans",
	"Not everything is about going from the outhouse to the penthouse",
	"The best morning routine is the one that allows you to get the highest amount of productive hours of work in",
	"Consume and produce until you produce what you are consuming",
	"With alot in life, we see the possibilities, and not the context",
	"The best way to get a good answer on the Internet is not to ask a good question",
	"Discipline is freedom",
	"The cold water doesn't get warmer if you jump late",
	"Life is not about waiting for the storm to pass, but learning to dance in the rain",
	"Once you assume a creator and a plan, it makes us a cruel experiment whereby we are created sick and commanded to be well",
	"My cup already runneth over. I just need to tap in",
	"Do not be too thirsty that you drink from any cup they present you",
	"You only the shit till you get flushed, so clog it up",
	"Refrain from having a champagne taste on a beer budget",
	"Only when the tide recedes will you know who was swimming without the shorts on",
	"Don't be the broke one in the rooms that matter",
	"The best way to beat AI is to stop speaking or using English",
	"Playing monopoly with old/oil/new money is the best",
	"Imagine meeting your girls friends and she's the Michelle of the group",
	"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God - Philippians 4:6",
	"Men did greater things when it was harder to see boobs",
	"Wine is bottled poetry",
	"When God gives you the vision, be assured he'll sort the provision",
	"Some people's packet loss is amazing. The message just doesn't get through",
	"A wise man once told me luck isn’t some mystical energy that dances around the universe randomly bestowing people with satisfaction and joy. You create your own luck",
	"If you've never swam in an ocean then ofcourse a pool seems deep",
	"See the thing with first class, it's still commercial",
	"What you seek is seeking you",
	"If you wish to be rich, do not add to your money. But subtract from your desire. Crazy, right ?",
	"Never borrow grief from the future",
	"One should have the guts of Marriane Bachmeier",
	"Energy is honest. I feel you way before I hear you",
	"Continue passing the baton to yourself",
	"If you can't feel love in your simplest form infront of another person, then it is all performative",
	"Never be afraid to kill side projects. I mean, killedbygoogle exists, right?",
	"The good news is, you had a dream. The bad news is, it was onboard a Boeing",
}
