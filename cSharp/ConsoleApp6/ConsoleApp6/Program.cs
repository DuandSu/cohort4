using System;
using System.Collections.Generic;

namespace ConsoleApp6
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 5;
            int b = 6;
            if (a + b > 10)
            {
                Console.WriteLine("The answer is greater than 10.");
            }
            else
            {
                Console.WriteLine("The answer is not greater than 10");
            }

            a = 5;
            b = 3;
            if (a + b > 10)
            {
                Console.WriteLine("The answer is greater than 10.");
            }
            else
            {
                Console.WriteLine("The answer is not greater than 10");
            }

            a = 5;
            b = 3;
            int c = 4;
            if ((a + b + c > 10) && (a == b))
            {
                Console.WriteLine("The answer is greater than 10");
                Console.WriteLine("And the first number is equal to the second");
            }
            else
            {
                Console.WriteLine("The answer is not greater than 10");
                Console.WriteLine("Or the first number is not equal to the second");
            }

            a = 5;
            b = 3;
            c = 4;
            if ((a + b + c > 10) || (a == b))
            {
                Console.WriteLine("The answer is greater than 10");
                Console.WriteLine("Or the first number is equal to the second");
            }
            else
            {
                Console.WriteLine("The answer is not greater than 10");
                Console.WriteLine("And the first number is not equal to the second");
            }

            int counter = 0;
            while (counter < 10)
            {
                Console.WriteLine($"Hello World! The counter is {counter}");
                counter++;
            }

            counter = 0;
            do
            {
                Console.WriteLine($"Hello World! The counter is {counter}");
                counter++;
            } while (counter < 10);

            for (int counter1 = 0; counter1 < 10; counter1++)
            {
                Console.WriteLine($"Hello World! The counter1 is {counter1}");
            }

            for (int row = 1; row < 11; row++)
            {
                Console.WriteLine($"The row is {row}");
            }

            for (char column = 'a'; column < 'k'; column++)
            {
                Console.WriteLine($"The column is {column}");
            }

            for (int row = 1; row < 11; row++)
            {
                for (char column = 'a'; column < 'k'; column++)
                {
                    Console.WriteLine($"The cell is ({row}, {column})");
                }
            }
            Console.WriteLine("Challenge: Sum of all integers 1 through 20 that are divisible by 3:");
            short sumDiv3 = 0;
            for (short i = 1; i <= 20; i++)
            {
                if (i % 3 == 0)
                {
                    Console.WriteLine($"Adding: {i}");
                    sumDiv3 += i;
                }
            }
            Console.WriteLine($"Answer is {sumDiv3}");

            var names = new List<string> { "Duane", "Ana", "Felipe" };
            foreach (var name in names)
            {
                Console.WriteLine($"Hello {name.ToUpper()}!");
            }

            Console.WriteLine("---------------------------");
            names.Add("Maria");
            names.Add("Bill");
            names.Add("Bill"); 
            names.Remove("Ana");
            foreach (var name in names)
            {
                Console.WriteLine($"Hello {name.ToUpper()}!");
            }

            Console.WriteLine($"My name is {names[0]}.");
            Console.WriteLine($"I've added {names[2]} and {names[3]} to the list.");
            Console.WriteLine($"The list has {names.Count} people in it");
            var index = names.IndexOf("Felipe");
            if (index != -1)
                Console.WriteLine($"The name {names[index]} is at index {index}");

            var notFound = names.IndexOf("Not Found");
            Console.WriteLine($"When an item is not found, IndexOf returns {notFound}");

            names.Sort();
            foreach (var name in names)
            {
                Console.WriteLine($"Hello {name.ToUpper()}!");
            }

            var fibonacciNumbers = new List<int> { 1, 1 };

            var previous = fibonacciNumbers[fibonacciNumbers.Count - 1];
            var previous2 = fibonacciNumbers[fibonacciNumbers.Count - 2];

            fibonacciNumbers.Add(previous + previous2);

            foreach (var item in fibonacciNumbers)
                Console.WriteLine(item);

            Console.WriteLine("Challenge: Fibonacci Numbers:Generate the first 20 numbers in the sequence:");

            fibonacciNumbers.Clear();
            fibonacciNumbers.Add(1);
            int prevNumber = 0;
            int currNumber = 1;
            int newNumber;

            for (int i = 1; i < 20; i++)
            {
                newNumber = prevNumber + currNumber;
                fibonacciNumbers.Add(newNumber);
                prevNumber = currNumber;
                currNumber = newNumber;
            }
            foreach (var item in fibonacciNumbers)
                Console.WriteLine(item);
        }
    }
}
