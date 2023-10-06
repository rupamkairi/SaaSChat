package main

import (
	"io"
	"net/http"

	"golang.org/x/net/websocket"
)

func EchoServer(ws *websocket.Conn) {
	io.Copy(ws, ws)
}

func main() {
	http.Handle("/ws", websocket.Handler(EchoServer))
	err := http.ListenAndServe(":4002", nil)
	if err != nil {
		panic("ListenAndServe: " + err.Error())
	}
}
