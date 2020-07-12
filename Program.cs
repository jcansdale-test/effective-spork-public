using System;

namespace effective_spork_public
{
    class Program
    {
        static void Main(string[] args)
        {
            var who = args.Length > 0 ? args[0] : "World";
            Console.WriteLine($"Hello, {who}!");
        }
    }
}
