class sonAccount {
    balance: number;
    constructor(_balance: number) {
        this.balance = _balance;
    }

    deposit(qty: number) {
        this.balance = this.balance + qty;
        console.log(`Hai depositato € ${qty}. Adesso il tuo bilancio è € ${this.balance}.`);
    }

    withdraw(qty: number) {
        this.balance = this.balance - qty;
        console.log(`Hai ritirato € ${qty}. Adesso il tuo bilancio è € ${this.balance}.`);
    }

    checkBalance() {
        console.log(`Il tuo bilancio attuale è di € ${this.balance}`);
    }
}

class MotherAccount extends sonAccount {
    constructor(_balance) {
        super(_balance);
    }

    withdraw(qty: number, tax: number) {
        let commission: number = tax; // num% of commission
        let taxedCost: number = (qty + (qty / 100 * commission));
        this.balance = this.balance - taxedCost;
        console.log(`Hai ritirato € ${qty} con ${commission}% di commissione (totale € ${taxedCost}). Adesso il tuo bilancio è € ${this.balance}.`);
    }
}

console.log('--------------------------Son Balance--------------------------');
//Son balance
let newSonAccount = new sonAccount(1000); //starter balance
console.log(newSonAccount);
//Son Deposit
newSonAccount.deposit(300);
//Son withdraw
newSonAccount.withdraw(500);
//Son checkbalance
newSonAccount.checkBalance();
console.log('--------------------------Mother Balance--------------------------');
//mother balance
let newMotherAccount = new MotherAccount(200); // starter balance
console.log(newMotherAccount);
//mother deposit
newMotherAccount.deposit(1200);
//mother withdraw + % di commissione
newMotherAccount.withdraw(600, 15);
newMotherAccount.withdraw(500, 10);
//mother checkbalance
newMotherAccount.checkBalance();

//  [Note to myself:]
//   - ricorda per cancellare il history del terminal Ctrl + L
//   - per vedere il risultato andare al terminale e scrivere "node script.js"
