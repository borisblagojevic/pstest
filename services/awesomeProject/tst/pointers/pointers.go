package main

import (
	"fmt"
)

func increaseAge(age int) int {
	age += 1

	return age
}

func increaseAgeWPointers(age *int) int {
	*age += 1

	return *age
}

func main() {
	age := 25

	var ageP *int = &age
	//fmt.Println(age, ageP)
	//fmt.Println(*ageP)

	*ageP = 42

	//fmt.Print(age, ageP)

	fmt.Println(increaseAge(age))
	fmt.Println(age)

	fmt.Println(increaseAgeWPointers(&age))
	fmt.Println(age)

	var p *int
	fmt.Println(p)

	p =
		fmt.Println(p)
}
