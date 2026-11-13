package main

import (
	"fmt"
	"math/rand"

	"github.com/BrianMwangi21/mwangi.kabiru/templates"
	"github.com/BrianMwangi21/mwangi.kabiru/templates/pages"
	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2/middleware/adaptor"

	"github.com/gofiber/fiber/v2"
)

func getRandomQuote() string {
	randomIndex := rand.Intn(len(pages.QUOTES))
	return fmt.Sprintf("\"%v\"", pages.QUOTES[randomIndex])
}

func indexViewHandler(c *fiber.Ctx) error {
	metaTags := pages.MetaTags(
		"mwangi kabiru, full stack developer, go, typescript, terminal, htmx",
		"Brian Mwangi Kabiru — full-stack developer from Nairobi. This site is a terminal. Type commands, poke around, break nothing.",
	)

	templateHandler := templ.Handler(
		templates.Layout(
			"mwangi.kabiru",
			metaTags, pages.TerminalContent(),
		),
	)

	return adaptor.HTTPHandler(templateHandler)(c)
}

func paigeHandler(c *fiber.Ctx) error {
	metaTags := pages.MetaTags(
		"mwangi kabiru",
		"Allow me to reintroduce myself!",
	)

	bodyContent := pages.PaigeContent()

	templateHandler := templ.Handler(
		templates.Layout(
			"mwangi.kabiru",
			metaTags, bodyContent,
		),
	)

	return adaptor.HTTPHandler(templateHandler)(c)
}

func execCommandHandler(c *fiber.Ctx) error {
	if c.Get("HX-Request") != "true" {
		return fiber.NewError(fiber.StatusBadRequest, "non-htmx request")
	}
	return adaptor.HTTPHandler(templ.Handler(dispatchCommand(c.FormValue("command"))))(c)
}
