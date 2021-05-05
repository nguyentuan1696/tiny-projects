package config

import (
	"html/template"
)


// AppConfig hold the App configation
type AppConfig struct {
	TemplateCache map[string]*template.Template
}