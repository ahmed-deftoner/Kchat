package main

import (
	"fmt"
	"net/http"

	"github.com/ahmed-deftoner/Kchat/pkg/websock"
)

func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websock.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}
	go websock.Writer(ws)
	websock.Reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/ws", serveWs)
}

func main() {
	fmt.Println("Distributed Chat App v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
