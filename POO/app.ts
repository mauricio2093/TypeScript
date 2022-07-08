/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Sale from './modules/Sale';
import SaleWithTaxt from './modules/SaleWithTax';

const sale = new Sale(19);
const res = sale.getTotal();
console.log(res);

const saleWithTaxt = new SaleWithTaxt(10, 100);
const res2 = saleWithTaxt.getTotal();
console.log(`
TotalAmount: ${res}
TotalTax : ${res2}
`);
