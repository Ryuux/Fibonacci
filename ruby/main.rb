require 'colorize'
require 'artii'
require 'terminal-table'

def fibonacci
  print 'Enter the number of terms of the Fibonacci sequence you want to generate: '.cyan
  n = gets.chomp.to_i

  if n <= 0
    puts 'Error: The number of terms must be greater than zero.'.red
    return []
  elsif n == 1
    return [0]
  elsif n == 2
    return [0, 1]
  else
    fib = [0, 1]
    (2..n).each do |i|
      fib.push(fib[i-1] + fib[i-2])
    end
    return fib
  end
end

def main
  puts Artii::Base.new(font: 'slant').asciify('Fibonacci').colorize(:magenta)
  fib = fibonacci

  if fib.length > 0
    rows = []
    fib.each_with_index do |term, index|
      rows.push([index+1, term])
    end
    table = Terminal::Table.new(title: "The first #{fib.length} terms of the Fibonacci sequence are:".colorize(:green), headings: ['#', 'Valor'], rows: rows)
    puts table.to_s.colorize(:cyan)
  end
end

if __FILE__ == $0
  main
end
