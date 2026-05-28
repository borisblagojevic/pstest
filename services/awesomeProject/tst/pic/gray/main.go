package main

import (
	"fmt"
	"golang.org/x/tour/pic"
	"image"
	"image/color"
	"image/png"
	"log"
	"os"
)

func Pic(dx, dy int) [][]uint8 {
	fmt.Print(dx, dy)
	ss := make([][]uint8, dy)
	for y := 0; y < dy; y++ {
		s := make([]uint8, dx)
		for x := 0; x < dx; x++ {
			s[x] = uint8((x + y) / 2)
		}
		ss[y] = s
	}
	return ss
}

func main() {
	pic.Show(Pic)
	const dx, dy = 256, 256
	pixelData := Pic(dx, dy)
	img := image.NewRGBA(image.Rect(0, 0, dx, dy))

	for y := 0; y < dy; y++ {
		for x := 0; x < dx; x++ {
			val := pixelData[y][x]
			img.Set(x, y, color.RGBA{val, val, val, 255})
		}
	}

	file, err := os.Create("!pretty_gray_picture.png")
	if err != nil {
		log.Fatal(err)
	}

	err = png.Encode(file, img)
	if err != nil {
		log.Fatal(err)
	}

	defer file.Close()

}
