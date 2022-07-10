/* eslint-disable no-unused-vars */
/* Type Predicates(type guards) */

interface Card {
  balance: number;
}

interface Debit extends Card {
  level: string;
}

interface Credit extends Card {
  creditLimit: number;
}

function isCreditCard(card: Credit | Debit): card is Credit {
  return 'credit' in card;
}

function checkOut(card: Credit | Debit, amount: number): void {
  if (isCreditCard(card)) {
    if (amount > card.creditLimit) {
      throw new Error('you are exceeding the credit limit');
    }
  }
}
