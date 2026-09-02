const bankAccount = {
    balance: 0,
    performTransaction(amount) {
        this.balance += amount;
    }
};

bankAccount.performTransaction(1000);
bankAccount.performTransaction(-10);
console.log(bankAccount.balance);//990
///////////////////////

const bankAccount2 = {
    balance: 0,

};

function transaction(amount) {
    this.balance += amount;
}

transaction.call(bankAccount2, 1000);
transaction.call(bankAccount2, -10);
console.log(bankAccount2.balance);//990
////////////////////////////////
const DepositFiftyIntoSavings = transaction.bind(bankAccount2, 50);

DepositFiftyIntoSavings();
DepositFiftyIntoSavings();
console.log(bankAccount2.balance);//1090


