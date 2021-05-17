// hello.go

package main

import (
    "encoding/csv"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "os"
)

// Application struct
type Application struct {
    App      string
    Company  string
    Category string
}

func main() {
    // read data from file
    jsonDataFromFile, err := ioutil.ReadFile("./company.json")

    if err != nil {
        fmt.Println(err)
    }

    // Unmarshal JSON data
    var jsonData []Application
    err = json.Unmarshal([]byte(jsonDataFromFile), &jsonData)

    if err != nil {
        fmt.Println(err)
    }

    csvFile, err := os.Create("./data.csv")

    if err != nil {
        fmt.Println(err)
    }
    defer csvFile.Close()

    writer := csv.NewWriter(csvFile)

    for _, usance := range jsonData {
        var row []string
        row = append(row, usance.App)
        row = append(row, usance.Company)
        row = append(row, usance.Category)
        writer.Write(row)
    }

    // remember to flush!
    writer.Flush()
}