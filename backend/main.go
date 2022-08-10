package main

import (
	"fmt"
	"net/http"
)

func SetupRouter() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("simple server")
	})
}

func main() {
	SetupRouter()
	http.ListenAndServe(":8080", nil)
}
