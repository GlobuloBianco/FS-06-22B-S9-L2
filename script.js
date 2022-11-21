var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sonAccount = /** @class */ (function () {
    function sonAccount(_balance) {
        this.balance = _balance;
    }
    sonAccount.prototype.deposit = function (qty) {
        this.balance = this.balance + qty;
        console.log("Hai depositato \u20AC ".concat(qty, ". Adesso il tuo bilancio \u00E8 \u20AC ").concat(this.balance, "."));
    };
    sonAccount.prototype.withdraw = function (qty) {
        this.balance = this.balance - qty;
        console.log("Hai ritirato \u20AC ".concat(qty, ". Adesso il tuo bilancio \u00E8 \u20AC ").concat(this.balance, "."));
    };
    sonAccount.prototype.checkBalance = function () {
        console.log("Il tuo bilancio attuale \u00E8 di \u20AC ".concat(this.balance));
    };
    return sonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balance) {
        return _super.call(this, _balance) || this;
    }
    MotherAccount.prototype.withdraw = function (qty, tax) {
        var commission = tax; // num% of commission
        var taxedCost = (qty + (qty / 100 * commission));
        this.balance = this.balance - taxedCost;
        console.log("Hai ritirato \u20AC ".concat(qty, " con ").concat(commission, "% di commissione (totale \u20AC ").concat(taxedCost, "). Adesso il tuo bilancio \u00E8 \u20AC ").concat(this.balance, "."));
    };
    return MotherAccount;
}(sonAccount));
console.log('--------------------------Son Balance--------------------------');
//Son balance
var newSonAccount = new sonAccount(1000); //starter balance
console.log(newSonAccount);
//Son Deposit
newSonAccount.deposit(300);
//Son withdraw
newSonAccount.withdraw(500);
//Son checkbalance
newSonAccount.checkBalance();
console.log('--------------------------Mother Balance--------------------------');
//mother balance
var newMotherAccount = new MotherAccount(200); // starter balance
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
