package handlers

import (
	"net/http"

	"github.com/nguyentuan1696/learn-golang/pkg/config"
	"github.com/nguyentuan1696/learn-golang/pkg/render"
)

var Repo *Repository
type Repository struct {
	App *config.AppConfig
}

func NewRepo(a *config.AppConfig) *Repository {
	return &Repository {
		App: a,
	}
}
// NewHandlers sets the repository for the handlers

func NewHandlers(r *Repository) {
	Repo = r
}

// Home is the handler for the home page
func Home(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "home.page.tmpl")
}

// About is the handler for the about page
func About(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "about.page.tmpl")
}
