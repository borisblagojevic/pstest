package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

// Hello takes a string and returns a string msg
// With this two comments I test documenting functions
func Hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("Name can't be empty!")
	}

	message := fmt.Sprintf(randomGreeting(), name)
	return message, nil
}

func Hellos(names []string) (map[string]string, error) {
	messages := make(map[string]string)
	for _, name := range names {
		message, err := Hello(name)
		if err != nil {
			return nil, err
		}

		messages[name] = message
	}
	return messages, nil
}

func randomGreeting() string {
	formats := []string{
		"Hi, %a.",
		"Great to see u, %b",
		"Sup %c, long time no see",
	}

	return formats[rand.Intn(len(formats))]
}
