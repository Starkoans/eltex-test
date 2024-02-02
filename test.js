
let n = prompt('Длина строки:');
n = parseInt(n)

const str = "QWERTYUIOADFGHJKLZVBNMqwertyuiopasdfghjklzxcvbnm1234567890+-_$~";
let newStr = "";

for(let i = 0; i < n; i++){
    let r = Math.floor((Math.random() * (str.length-1)));
    newStr += str[r]
}
console.log(newStr);

const inputElem = document.getElementById("input");
inputElem.append(newStr);

let changeLetters = "~";
let changeNumbers = "b";
prompt('Символ для замены всех букв:', changeLetters);
prompt('Символ для замены всех цифр:', changeNumbers);
let lettersCount = 0, numbersCount = 0 ;
for(let i = 0; i < n; i++){
    if("1234567890".includes(newStr[i])){
        newStr = myReplace(newStr,i,changeNumbers);
        numbersCount++;
    } else if ( !("+-_$~".includes(newStr[i])) ){
        newStr = myReplace(newStr,i,changeLetters);
        lettersCount++;
    }
}
console.log(newStr);
const outputElem = document.getElementById("output");
outputElem.append(newStr);
console.log('Letters in string:', lettersCount);
console.log('Numbers in string:', numbersCount);

const letterCounterElem = document.getElementById("letter_counter");
letterCounterElem.append(String(lettersCount));
const numberCounterElem = document.getElementById("number_counter");
numberCounterElem.append(String(numbersCount));

function myReplace(string, index, newLetter){
    let result="";
    for (let i = 0; i < string.length; i++){
        if(i === index){result += newLetter}
        else {
            result += string[i]
        }
    };
    return result
}



