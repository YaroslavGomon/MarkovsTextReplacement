const string = document.querySelector('.string');
const variantString = document.querySelector('.variant');
const startBtn = document.querySelector('.start');
const resultArea = document.querySelector('.result');

let strrr = '<|>*<||>';
let res = [];

// let variant = [1, 3, 5, 7, 2, 4, 6, 8];
let variant;
let sortedArr = [];

// const replacementsArr = [
//   ['|>*<', '>*<d', 1],
//   ['dm', 'md', 3],
//   ['<>*<', '<e', 5],
//   ['em', '|e', 7],
//   ['d|', '|md', 2],
//   ['d>', '>', 4],
//   ['e|', 'e', 6],
//   ['e>', '>', 8],
// ];

const rules = [
  ['|>*<', '>*<d', 1],
  ['d|', '|md', 2],
  ['dm', 'md', 3],
  ['d>', '>', 4],
  ['<>*<', '<e', 5],
  ['e|', 'e', 6],
  ['em', '|e', 7],
  ['e>', '>', 8],
];

function sortArr() {
  let sortedArr = [];
  variant.forEach((val, i) => {
    rules.forEach(v => {
      if (v[2] === val) {
        sortedArr.push(v);
      }
    });
  });
  return sortedArr;
}

function calculate(string) {
  let str = string;
  let newString;
  let oneMoreTime = true;
  let p = document.createElement('p');
  // replacementsArr.forEach((val, i, arr) => {
  sortedArr.forEach((val, i, arr) => {
    if (str.includes(val[0]) && oneMoreTime) {
      oneMoreTime = false;
      newString = str.replace(val[0], val[1]);
      res.push(val[2]);
      // console.log(`${val[2]}: ${newString}`);
      // resultArea.textContent += `${val[2]}: ${newString}`;
      p.textContent = `${val[2]}: ${newString}`;
      resultArea.append(p);
    }
    // if (i + 1 === arr.length) {
    // }
  });
  // console.log('*******************');
  // resultArea.textContent += `  ⟶  `;
  if (!oneMoreTime) {
    calculate(newString);
  } else {
    resultArea.innerHTML += `${res.join('')}`;
    // resultArea.prepend(p);
    return;
  }
}

// calculate(strrr);
// console.log(res.join(''));

startBtn.addEventListener('click', () => {
  res = [];
  resultArea.innerHTML = '';
  strrr = string.value;
  variant = variantString.value.split('').map(val => +val);
  sortedArr = sortArr();
  calculate(strrr);

  // console.log(sortedArr);
  // console.log(res.join(''));
});
