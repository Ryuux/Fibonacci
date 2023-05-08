from termcolor import colored
from pyfiglet import Figlet
from prettytable import PrettyTable

def fibonacci():
    n = int(input(colored('Enter the number of terms of the Fibonacci sequence you want to generate: ', 'cyan')))
    if n <= 0:
        print(colored('Error: The number of terms must be greater than zero.', 'red'))
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        fib = [0, 1]
        for i in range(2, n):
            fib.append(fib[i-1] + fib[i-2])
        return fib

def main():
    f = Figlet(font='slant')
    print(colored(f.renderText('Fibonacci'), 'magenta'))
    fib = fibonacci()

    if len(fib) > 0:
        table = PrettyTable()
        table.field_names = ['#', 'Valor']
        for i, term in enumerate(fib):
            table.add_row([i+1, term])
        print(colored('The first {} terms of the Fibonacci sequence are:'.format(len(fib)), 'green'))
        print(colored(table, 'cyan'))

if __name__ == '__main__':
    main()
