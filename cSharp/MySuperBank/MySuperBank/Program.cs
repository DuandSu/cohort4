using System;

namespace MySuperBank
{
    class Program
    {
        static void Main(string[] args)
        {
            var accountDu = new BankAccount("Duane Savings", 10000);
            Console.WriteLine($"Account {accountDu.Owner} # {accountDu.Number} was created with {accountDu.Balance} initial balance.");

            var accountSu = new BankAccount("Suzanne Savings", 10);
            Console.WriteLine($"Account {accountSu.Owner} # {accountSu.Number} was created with {accountSu.Balance} initial balance.");

            accountDu.MakeWithdrawal(500, DateTime.Now, "Rent payment");
            Console.WriteLine(accountDu.Balance);
            accountDu.MakeDeposit(100, DateTime.Now, "Friend paid me back");
            Console.WriteLine(accountDu.Balance);
            accountDu.MakeWithdrawal(10, DateTime.Now, "Bought Jello");
            Console.WriteLine(accountDu.Balance);
            accountDu.MakeDeposit(10, DateTime.Now, "Refund from Jello");
            Console.WriteLine(accountDu.Balance);

            // Test that the initial balances must be positive.
            try
            {
                var invalidAccount = new BankAccount("invalid", -55);
            }
            catch (ArgumentOutOfRangeException e)
            {
                Console.WriteLine("Exception caught creating account with negative balance");
                Console.WriteLine(e.ToString());
            }

            // Test for a negative balance.
            try
            {
                accountDu.MakeWithdrawal(9750, DateTime.Now, "Attempt to overdraw");
            }
            catch (InvalidOperationException e)
            {
                Console.WriteLine("Exception caught trying to overdraw");
                Console.WriteLine(e.ToString());
            }

            Console.WriteLine(accountDu.GetAccountHistory());

            Console.WriteLine("Program reached end!");
        }
    }
}
