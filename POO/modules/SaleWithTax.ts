/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Sale from './Sale';

class SaleWithTaxt extends Sale {
  private tax: number;

  constructor(tax: number, amount: number) {
    super(amount);
    this.tax = tax;
  }

  override getTotal = ():number => this.tax + super.getTotal();
}

export default SaleWithTaxt;
