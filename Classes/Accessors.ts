/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
class Account {
  private amount: number;

  private commission: number;

  constructor(amount: number, commission: number) {
    this.amount = amount;
    this.commission = commission;
  }

  set setAmount(amount: number) {
    amount < 0 ? amount = 0 : 0;
    this.amount = amount;
  }

  get total() {
    return this.amount + this.commission;
  }
}

const account = new Account(10, 1);
account.setAmount = 20;
console.log(account.total);
