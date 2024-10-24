// See https://aka.ms/new-console-template for more information
using System;

namespace PasswordChecker
{
  class Program
  {
    public static void Main(string[] args)
    {
        int minLength = 8;
        string upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string lowerCase = "abcdefghijklmnopqrstuvwxyz";
        string digits = "0123456789";
        string specialChars = "!#?@<>";

        Console.WriteLine("Inserisci una password: ");
        string password = Console.ReadLine();

        int score = 0;

        if(password.Length >= minLength){
          score ++;
        }
        if(Tools.Contains(password,upperCase)){
          score ++;
        }
        if(Tools.Contains(password,lowerCase)){
          score ++;
        }
        if(Tools.Contains(password,digits)){
          score++;
        }
        if(Tools.Contains(password,specialChars)){
          score++;
        }
        Console.WriteLine(score);
    }
  }
}