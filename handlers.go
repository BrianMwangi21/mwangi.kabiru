package main

import (
	"github.com/BrianMwangi21/mwangi.kabiru/templates"
	"github.com/BrianMwangi21/mwangi.kabiru/templates/pages"
	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2/middleware/adaptor"

	"github.com/gofiber/fiber/v2"
)

func indexViewHandler(c *fiber.Ctx) error {

	metaTags := pages.MetaTags(
		"mwangi.kabiru",
		"Allow me to reintroduce myself! Welcome aboard",
	)
	bodyContent := pages.BodyContent()

	templateHandler := templ.Handler(
		templates.Layout(
			"mwangi.kabiru",
			metaTags, bodyContent,
		),
	)

	// Render template layout.
	return adaptor.HTTPHandler(templateHandler)(c)

}
