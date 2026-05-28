package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
	if x <= 0 {
		return 0
	}

	z := 1.0

	for {
		prevZ := z

		z -= (z*z - x) / (2 * z)

		if math.Abs(z-prevZ) < 1e-6 {
			break
		}
	}

	return z
}

func main() {
	fmt.Println(Sqrt(2))
	fmt.Println(Sqrt(5))
	fmt.Println(Sqrt(8))
	fmt.Println(Sqrt(1))
	fmt.Println(Sqrt(0))
	fmt.Println(Sqrt(-1))
}
