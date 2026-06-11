package main

import (
	"fmt"
)

func main() {
	var str [3]string
	str[0] = "Hello"
	str[1] = "World"
	str[2] = "my name is GO"
	fmt.Println(str)
	fmt.Println(len(str))
	fmt.Println(len(str[0]))
	fmt.Println(str[2])

	fibonacciSequence := [8]int{1, 1, 2, 3, 5, 8, 13, 21}
	fmt.Println(fibonacciSequence)

	testSlice := fibonacciSequence[0:4]
	fmt.Println(testSlice)

	//testSlice = append(testSlice, 99)
	newTestCopy := make([]int, len(testSlice))
	copy(newTestCopy, testSlice)
	newTestCopy[0] = 100

	fmt.Println(testSlice)
	fmt.Println(fibonacciSequence)
	fmt.Println(newTestCopy)

	for i, v := range fibonacciSequence {
		fmt.Print("%d = %d\n", i, v)
	}

}
