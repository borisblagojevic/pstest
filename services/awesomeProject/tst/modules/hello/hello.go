package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {
	fmt.Println(greetings.Hello("Boris"))

	//msg, err := greetings.Hello("")

	//if err != nil {
	//	log.Fatal(err)
	//}
	//
	//fmt.Println(msg)

	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	names := []string{"Gladys", "Samantha", "Darrin"}

	messages, err := greetings.Hellos(names)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(messages)
}
