package main

import (
    "fmt"
)

func fibonacci() ([]int, error) {
    var n int
    fmt.Print("Enter the number of terms of the Fibonacci sequence you want to generate: ")
    _, err := fmt.Scan(&n)
    if err != nil {
        return nil, err
    }

    if n <= 0 {
        return nil, fmt.Errorf("Error: The number of terms must be greater than zero.")
    }

    fib := []int{0, 1}
    if n > 2 {
        for i := 2; i < n; i++ {
            fib = append(fib, fib[i-1]+fib[i-2])
        }
    }

    return fib, nil
}

func main() {
    fmt.Println("Fibonacci")

    fib, err := fibonacci()
    if err != nil {
        fmt.Printf("\033[31m%s\033[0m\n", err)
        return
    }

    fmt.Printf("The first %d terms of the Fibonacci sequence are:\n", len(fib))
    for i, term := range fib {
        fmt.Println(i+1, term)
    }
}
