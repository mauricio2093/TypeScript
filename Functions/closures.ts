/* eslint-disable no-return-assign */
const counter = (numberCounter: number = 0) => { // closure funcion que regresa otra funcion
  let numberIncrement: number = numberCounter;

  return () => console.log(`numero: ${numberIncrement += 1}`);
};
const myClouser = counter();
const myClouser2 = counter(50);

myClouser();
myClouser();
myClouser();
myClouser2();
myClouser2();
myClouser2();
myClouser();
