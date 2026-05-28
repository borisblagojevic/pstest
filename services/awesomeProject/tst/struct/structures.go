package main

import (
	"fmt"
)

type Example struct {
	a int
	b string
}

func main() {
	fmt.Println(Example{a: 1, b: "2"})

	e := Example{a: 5, b: ""}
	e.b = "my new string"

	fmt.Println(e)
	fmt.Println(e.a, e.b)

	c := &e
	fmt.Println(c)

	c.a = 1
	c.b = "let's change this string"
	fmt.Println(e)
}
