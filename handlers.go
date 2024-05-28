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
		"mwangi.kabiru",
		"Allow me to reintroduce myself!",
	)

	quote := getRandomQuote()
	bodyContent := pages.BodyContent(quote, pages.EXPERIENCES, pages.PROJECTS, pages.LINGOS)

	templateHandler := templ.Handler(
		templates.Layout(
			"mwangi.kabiru",
			metaTags, bodyContent,
		),
	)

	return adaptor.HTTPHandler(templateHandler)(c)
}

func getQuoteHandler(c *fiber.Ctx) error {
	if c.Get("HX-Request") == "" || c.Get("HX-Request") != "true" {
		return fiber.NewError(fiber.StatusBadRequest, "non-htmx request")
	}
	quote := getRandomQuote()
	return c.SendString(quote)
}
