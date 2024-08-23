class BankAccount {
    #balance
    #accountHolder 
    
    constructor(accountHolder, balance) {
        this.#balance = balance += 0 
        this.#accountHolder = accountHolder
    }

    deposit(amount) {

        if (amount > 0) {
            this.#balance += amount;
            console.log(`${this.#accountHolder} depositou R$${amount.toFixed(2)} | Saldo total: R$${this.#balance.toFixed(2)}`);
          } else {
            console.log('O valor do depósito deve ser positivo.');
          }
        }
      
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`${this.#accountHolder} sacou R$${amount.toFixed(2)} | Saldo total: R$${this.#balance.toFixed(2)}`);
        } else if (amount > this.#balance) {
            console.log('Saldo insuficiente.');
        } else {
            console.log('O valor do saque deve ser positivo');
        }
    }

    getBalance() {
        return this.#balance
    }

    getAccountHolder() {
        return this.#accountHolder
    }

}

module.exports = BankAccount
