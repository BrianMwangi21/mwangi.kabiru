package main

import (
	"strings"
	"time"

	"github.com/BrianMwangi21/mwangi.kabiru/templates/pages"
	"github.com/a-h/templ"
)

// dispatchCommand parses a raw terminal command and returns the rendered
// result fragment (command echo + output) to be appended to the scrollback.
func dispatchCommand(raw string) templ.Component {
	trimmed := strings.TrimSpace(raw)
	if trimmed == "" {
		return templ.NopComponent
	}

	normalized := strings.ToLower(trimmed)
	head := strings.Fields(normalized)[0]

	wrap := func(out templ.Component) templ.Component {
		return pages.Result(trimmed, out)
	}

	switch {
	case normalized == "help" || normalized == "?" || normalized == "commands":
		return wrap(pages.HelpOutput())

	case normalized == "whoami" || normalized == "cat about.txt" || normalized == "cat ~/about.txt":
		return wrap(pages.WhoamiOutput())

	case normalized == "thinkstack" || normalized == "ventures" || normalized == "company" ||
		normalized == "whois thinkstack" || normalized == "ls ventures" || normalized == "ls ~/ventures":
		return wrap(pages.VenturesOutput(pages.VENTURES))

	case normalized == "experience" || normalized == "cat career.log" || normalized == "cat /var/log/career.log":
		return wrap(pages.ExperienceOutput(pages.EXPERIENCES))

	case normalized == "projects" || normalized == "ls projects" || normalized == "ls projects/" ||
		normalized == "ls ~/projects" || normalized == "ls ~/projects/":
		return wrap(pages.ProjectsOutput(pages.PROJECTS))

	case normalized == "skills" || normalized == "cat skills.txt" || normalized == "ls /usr/local/bin":
		return wrap(pages.SkillsOutput(pages.SKILLS))

	case normalized == "fortune" || normalized == "quote" || normalized == "quotes" || normalized == "cat quotes.db":
		return wrap(pages.FortuneOutput(getRandomQuote()))

	case normalized == "man kabiru" || normalized == "man mwangi":
		return wrap(pages.ManOutput())

	case normalized == "contact" || normalized == "cat contact.txt" || normalized == "socials":
		return wrap(pages.ContactOutput())

	case normalized == "ls" || normalized == "ls ~" || normalized == "ls ." || normalized == "ls -l" ||
		normalized == "ls -la" || normalized == "ls -al" || normalized == "ll" || normalized == "dir":
		return wrap(pages.LsOutput())

	case normalized == "pwd":
		return wrap(pages.TextOutput("/home/visitor"))

	case normalized == "date":
		return wrap(pages.TextOutput(time.Now().Format("Mon Jan 2 15:04:05 MST 2006") + "  (server time, somewhere over jnb)"))

	case normalized == "clear" || normalized == "cls":
		// Normally intercepted client-side; if it reaches the server, say nothing.
		return templ.NopComponent

	case head == "echo":
		rest := strings.TrimSpace(trimmed[len(head):])
		rest = strings.Trim(rest, "\"'")
		if rest == "" {
			return templ.NopComponent
		}
		return wrap(pages.TextOutput(rest))

	case head == "sudo":
		if strings.Contains(normalized, "sandwich") {
			return wrap(pages.TextOutput("okay. 🥪"))
		}
		return wrap(pages.TextOutput("visitor is not in the sudoers file. This incident will be reported."))

	case head == "rm" || head == "dd" || head == "mkfs" || head == "shutdown" || head == "reboot":
		return wrap(pages.TextOutput(head + ": permission denied — and frankly, hurtful."))

	case normalized == "vim" || normalized == "nvim" || normalized == "vi" || normalized == "emacs" || normalized == "nano":
		return wrap(pages.TextOutput("you're already inside. there is no escape.", "(the neovim config shows unusually heavy wear)"))

	case normalized == "exit" || normalized == "logout" || normalized == "quit":
		return wrap(pages.TextOutput("logout", "...just kidding. there is no escape. close the tab like everyone else."))

	case normalized == "hello" || normalized == "hi" || normalized == "hey" || normalized == "jambo" || normalized == "habari":
		return wrap(pages.TextOutput("hey! 👋 type `help` to see what this thing can do."))

	case normalized == "ssh visitor@mwangi.kabiru" || normalized == "ssh mwangi.kabiru" || strings.HasPrefix(normalized, "ssh "):
		return wrap(pages.TextOutput("you're already inside, friend."))

	case strings.Contains(normalized, "paige"):
		return wrap(pages.PaigeDeniedOutput())

	case strings.HasPrefix(normalized, "open "):
		switch strings.TrimSpace(normalized[len("open "):]) {
		case "github":
			return wrap(pages.TextOutput("→ https://github.com/BrianMwangi21", "(or press `g` when the input isn't focused)"))
		case "linkedin":
			return wrap(pages.TextOutput("→ https://www.linkedin.com/in/brian-mwangi/", "(or press `l` when the input isn't focused)"))
		case "email", "mail":
			return wrap(pages.TextOutput("→ mwangikabiru21@gmail.com", "(or press `e` when the input isn't focused)"))
		case "substack":
			return wrap(pages.TextOutput("→ https://wordsbykabiru.substack.com/", "(or press `s` when the input isn't focused)"))
		default:
			return wrap(pages.TextOutput("open: can't open that. try: github · linkedin · email · substack"))
		}

	case head == "cat" || head == "cd":
		target := ""
		if fields := strings.Fields(trimmed); len(fields) > 1 {
			target = fields[1]
		}
		return wrap(pages.TextOutput(head+": "+target+": no such thing here. try `ls` to look around."))

	default:
		return wrap(pages.NotFoundOutput(head))
	}
}
