package main

import (
	"fmt"
)

type Coordinate struct {
	Lat, Long float64
}

func main() {
	var m map[string]string
	m = make(map[string]string)

	m["a"] = "a"
	m["b"] = "b"

	fmt.Println(m)

	var m2 = make(map[string]Coordinate)
	m2["Location A"] = Coordinate{23.45453, 32.12341}

	fmt.Println(m2)

	var mLit = map[string]Coordinate{
		"Location A": Coordinate{23.45453, 32.12341},
		"Location B": Coordinate{23.45453, 32.12341}}

	fmt.Println(mLit)
}
