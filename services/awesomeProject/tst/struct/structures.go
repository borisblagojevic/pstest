package main

import (
	"fmt"
)

type Example struct {
	a int
	b string
}

type User struct {
	Name string
	Age  int
}

func updateUserName(u *User, newName string) {
	u.Name = newName
}

func updateUserAge(u *User, newAge int) {
	u.Age = newAge
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

	bob := User{Name: "Bob", Age: 30}
	updateUserName(&bob, "Robert")
	updateUserAge(&bob, 33)
	fmt.Println(bob)

	var u *User

	// runtime error
	//fmt.Println(u.Age)

	u = &bob
	print(u.Name)
}
