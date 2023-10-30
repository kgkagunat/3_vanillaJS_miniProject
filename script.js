// Day 1 of practice

// String conversion
console.log('--String conversion--');

const num = 25;
const strConvert = String(num);
console.log(strConvert, typeof strConvert);

const bool1 = true;
const strConvert2 = String(bool1);
console.log(strConvert2, typeof strConvert2);

const number = 20;
const booleanF = false;
const strConvert3 = `30 is not ${number}, therefore is ${booleanF}`;
console.log(strConvert3, typeof strConvert3);

/* ---------------------------------------- */

// Number conversion
console.log('--Number conversion--');

const str = 'Hello';
const numConvert = Number(str);
console.log(numConvert, typeof numConvert);

const str2 = '125';
const numConvert2 = Number(str2);
console.log(numConvert2, typeof numConvert2);

const boolTrue = true;
const boolFalse = false;
const numConvertT = Number(boolTrue);
const numConvertF = Number(boolFalse);
console.log(numConvertT, typeof numConvertT, numConvertF, typeof numConvertF);

/* ---------------------------------------- */

// Boolean conversion - coerce
console.log('--Boolean conversion--');

const stringValue = 'This is a test string';
const boolConvert = Boolean(stringValue);
console.log(boolConvert, typeof boolConvert);

const numberValue = -20;
const boolConvert2 = Boolean(numberValue);
console.log(boolConvert2, typeof boolConvert2);

// True is coerced to 1
const numBool = 5 + true;
console.log(numBool, typeof numBool);

// False is coerced to 0 (falsy)
const numBool2 = 10 + false;
console.log(numBool2, typeof numBool2);

/* ---------------------------------------- */

// Integer conversion - parseInt()
console.log('--Integer conversion--');

let parseIntValue;

parseIntValue = parseInt('Hello');
console.log(parseIntValue, typeof parseIntValue);

parseIntValue = parseInt('   49');
console.log(parseIntValue, typeof parseIntValue);

parseIntValue = parseInt('-125px');
console.log(parseIntValue, typeof parseIntValue);

parseIntValue = parseInt('3.98 total');
console.log(parseIntValue, typeof parseIntValue);

/* ---------------------------------------- */

// Float point conversion - parseFloat()
console.log('--Float Point conversion--');

let parseFloatValue;

parseFloatValue = parseFloat('45.239');
console.log(parseFloatValue, typeof parseFloatValue);

parseFloatValue = parseFloat('-12.04');
console.log(parseFloatValue, typeof parseFloatValue);

parseFloatValue = parseFloat('    -191.1 px');
console.log(parseFloatValue, typeof parseFloatValue);

parseFloatValue = parseFloat('4 + 82 = 81');
console.log(parseFloatValue, typeof parseFloatValue);
