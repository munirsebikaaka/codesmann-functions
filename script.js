"use strict";
const divideNums = () => {
  for (let i = 1; i < 100; i++) {
    if (i / 3 === 3) console.log(`fizz ${i}`);
    if (i / 5 === 5) console.log(`buzz ${i}`);
    if (i / 3 === 5 && i / 5 === 3) console.log(`fizzbuzz ${i}`);
  }
};
divideNums();
// /////////////////////////////////////////

// ///////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////
const reverseFunc = (str1) => {
  let str1WordArr = str1.split(" ");
  let reverseWord = [];
  for (let i = str1WordArr.length - 1; i >= 0; i--) {
    reverseWord.push(str1WordArr[i]);
  }
  console.log(reverseWord.join(" "));
};
reverseFunc("h e l l o");

// //////////////////////////////////////////////////////////////
const getAlphabets = (strAlpha) => {
  const strAl = strAlpha.split(" ");
  return strAl.sort().join("");
};
console.log(getAlphabets("w e b m a s t e r"));

/////////////////////////////////////////////////////////////

const returnCapitalisedStr = (newStr1) => {
  const [letterJ, letterI, letterG] = newStr1.split(" ");
  console.log(
    letterJ[0].toLocaleUpperCase() + letterJ.slice(1),
    letterI[0].toLocaleUpperCase() + letterI.slice(1),
    letterG[0].toLocaleUpperCase() + letterG.slice(1)
  );
};
returnCapitalisedStr("javascript is good");

////////////////////////////////////////////////////////////
const notRepeated = (str) => {
  if (str.indexOf("e") === str.lastIndexOf("e")) {
    return "e";
  }
};
console.log(notRepeated("abacddbec"));
//////////////////////////////////////////////////////////////
const logestWord = (str) => {
  const longWord = str.split(" ");
  let logest = 0;
  let word = "";
  for (let i = 0; i <= longWord.length - 1; i++) {
    if (logest < longWord[i].length) {
      logest = longWord[i].length;
      word = longWord[i];
    }
  }
  return word;
};
console.log(logestWord("javascript is owesome"));
// //////////////////////////////////////////////////////////////

const theNum = [1, 2, 3, 4, 5, 6];
let sum = 0;
const sumArr = [];
const theSumFunc = () => {
  for (let i = 0; i < theNum.length; i++) {
    sum += theNum[i];
    sumArr.push(sum);
    console.log(sumArr);
  }
};
theSumFunc();
