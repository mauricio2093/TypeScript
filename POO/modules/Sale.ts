class Sale {
  protected amount: number;

  constructor(amount:number) {
    this.amount = amount;
  }

  getTotal(): number {
    return this.amount;
  }
}

export default Sale;
