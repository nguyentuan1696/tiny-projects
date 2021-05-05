package render

import (
	"fmt"
	"html/template"
	"net/http"
	"path/filepath"
)

var functions = template.FuncMap{}

func RenderTemplate(w http.ResponseWriter, tmpl string) {
	parsedTemplate, _ := template.ParseFiles("./templates/" + tmpl)
	err := parsedTemplate.Execute(w, nil)
	if err != nil {
		fmt.Println("error parsing template:", err)
	}
}

func RenderTemplateTest(w http.ResponseWriter, tmpl string) error {
	myCache := map[string]*template.Template{}


	// tim tat ca cac file bat dau voi .page.tmpl
	pages, err := filepath.Glob("./template/*.page.tmpl")
	if err != nil {
		return err
	}

	for _, page := range pages {
		name := filepath.Base(page)

		ts, err := template.New(name).Funcs(functions).ParseFiles(page)
		if err != nil {
			return err
		}

		matches, err := filepath.Glob("./template/*.layout.tmpl")
		if err != nil {
			return err
		}
	}
}
