const BankAccount = require('./BankAccount')
const SavingsAccount = require('./SavingsAccount')

const bankAccount = new BankAccount('John', 1000);
bankAccount.deposit(500.00);
bankAccount.withdraw(300);

console.log('========================================================')

const savingsAccount = new SavingsAccount('Mary', 1.5, 2000);

savingsAccount.applyInterest();
console.log(`Saldo total de ${savingsAccount.getAccountHolder()}: R$${savingsAccount.getBalance()}`);