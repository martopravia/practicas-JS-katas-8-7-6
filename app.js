// KYU 8
function suma(num1, num2) {
  return num1 + num2;
}
console.log(suma(2, 7));

function boolToStr(bool) {
  return bool.toString();
}
console.log(boolToStr(true));

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(esPar(2));
console.log(esPar(7));

function repeat(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str + " ";
  }
  return result;
}
console.log(repeat("Hola", 3));

function repeatOther(str, n) {
  let strSpace = str + " ";
  return strSpace.repeat(n);
}
console.log(repeatOther("La otra", 3));

function isNegative(num) {
  if (num < 0) {
    return "Is negative";
  } else {
    return "Is positive";
  }
}
console.log(isNegative(-1));
console.log(isNegative(3));

// KYU 7

function countVocals(str) {
  let word = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      count += 1;
    }
  }
  return count;
}
console.log(countVocals("HolA"));
console.log(countVocals("AEIOU"));
console.log(countVocals("Hlp"));

function countVocal(str) {
  let count = 0;
  let word = str.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if ("aeiou".includes(word[i])) {
      count += 1;
    }
  }
  return count;
}
console.log(countVocal("Hola"));
console.log(countVocal("AEIOU"));
console.log(countVocal("Hlp"));

function reverse(str) {
  let downright = "";
  for (let i = str.length - 1; i >= 0; i--) {
    downright += str[i];
  }
  return downright;
}

console.log(reverse("Hola Mundo"));

function reverseStr(str) {
  return str
    .split(" ")
    .map((word) => word.split(" ").reverse().join("").join(" "));
}
console.log(reverse("Hola Mundo"));

function firstAndLast(arr) {
  return arr.slice(1, -1);
}

console.log(firstAndLast("Hola Pedro"));

function sumPositives(arr) {
  let positives = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i] >= 0)) {
      positives += Number(arr[i]);
    }
  }
  return positives;
}

console.log(sumPositives(["2", "7", "-11", "-22"]));
console.log(sumPositives(["10", "7", "-11", "-22"]));

function capitalize(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(capitalize("hola pepe"));
console.log(capitalize("minuscula mayuscula"));

function capitalizeUp(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("hola pepe"));
console.log(capitalize("minuscula mayuscula"));

function anagram(str1, str2) {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}
console.log(anagram("aloh", "hola"));
console.log(anagram("alasas", "hola"));

function anagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    let found = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}

console.log(anagram("aloh", "hola"));
console.log(anagram("alasas", "hola"));

function encontrarImpar(arr) {
  return arr.find((num) => arr.filter((n) => n === num).length % 2 !== 0);
}
console.log(encontrarImpar(["2", "3", "5", "2", "3"]));

function encontrarImpar2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j > arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}
console.log(encontrarImpar(["2", "3", "5", "2", "3"]));

function multiply(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}
console.log(multiply(["2", "3", "4", "5"]));

function multiplicarSinEl(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    let mult = 1;
    for (let j = 0; j < arr.length; j++);
    {
      if (i !== j) {
        mult *= arr[j];
      }
    }
    resultado.push(mult);
  }
  return resultado;
}
console.log(multiply(["2", "3", "4", "5"]));

function groupByLength(arr) {
  let resultado = {};
  for (let i = 0; i < arr.length; i++) {
    let palabra = arr[i];
    let largo = palabra.length;

    if (!resultado[largo]) {
      resultado[largo] = [];
    }
    resultado[largo].push(palabra);
  }
  return resultado;
}
console.log(groupByLength(["sol", "luna", "mar", "cielo"]));

// 15 ejercicios kyu8
function inverse(str) {
  return str.split("").reverse().join("");
}
console.log(inverse("hola"));

function inverseFor(str) {
  let inverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverse.push(str[i]);
  }
  return inverse;
}
console.log(inverse("hola"));
console.log(inverse("coca cola"));

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArr([2, 3, 4, 1]));

function sum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArr([10, 20]));

function firstChar(str) {
  for (let i = 0; i < str.length; i++) {
    return str[i];
  }
}
console.log(firstChar("Pepe"));

function first(str) {
  return Array.charAt(0);
}
console.log(firstChar("Pepe"));

function esPar(num) {
  return num % 2 === 0;
}
console.log(esPar);

function lastChar(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    return str[i];
  }
}
console.log(lastChar("Lucía"));
console.log(lastChar("AnabeL"));

function lastChar2(str) {
  return str.charAt(str.length - 1);
}
console.log(lastChar("Lucía"));
console.log(lastChar("AnabeL"));

function repeatString(str, times) {
  return str.repeat(times + " ");
}

console.log(repeatString("Pepe", 2));

function rep(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str + " ";
  }
  return result;
}
console.log(rep("Soy Loco", 4));

function containNum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

console.log(containNum([1, 2, 3, 4], 2));
console.log(containNum([1, 2, 3, 4], 7));

function contains(arr, num) {
  return arr.filter((n) => n === num);
}
console.log(containNum([1, 2, 3, 4], 2));
console.log(containNum([1, 2, 3, 4], 7));

function container(arr, num) {
  return arr.includes(num);
}
console.log(containNum([1, 2, 3, 4], 2));
console.log(containNum([1, 2, 3, 4], 7));

function obtainPar(arr) {
  return arr.filter((n) => n % 2 === 0);
}
console.log(obtainPar([2, 3, 4, 5, 6]));

function obtenerPar(arr) {
  let pares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]);
    }
  }
  return pares;
}
console.log(obtainPar([2, 3, 4, 5, 6]));

function startsVowel(str) {
  return "aeiou".includes(str[0].toLowerCase());
}
console.log(startsVowel("Pepe"));
console.log(startsVowel("Arte"));

function startsVowels(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[0].toLowerCase() === "a" ||
      str[0].toLowerCase() === "e" ||
      str[0].toLowerCase() === "i" ||
      str[0].toLowerCase() === "o" ||
      str[0].toLowerCase() === "u"
    ) {
      return true;
    }
  }
  return false;
}
console.log(startsVowel("Pepe"));
console.log(startsVowel("Arte"));

function multiplyNum(arr) {
  return arr.reduce((mult, num) => mult * num, 1);
}
console.log(multiplyNum([1, 2, 3, 4]));

function multiply(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}
console.log(multiplyNum([1, 2, 3, 4]));

function lengthArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }
  return result;
}
console.log(lengthArr(["hola", "jerogrifico", "equiszeta", "ay"]));

function lengthArray(arr) {
  return arr.map((arr) => arr.length);
}
console.log(lengthArr(["hola", "jerogrifico", "equiszeta", "ay"]));

function verifyStr(str) {
  return str.includes(" ");
}
console.log(verifyStr("Hola Mundo"));
console.log(verifyStr("HolaMundo"));

function verificar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}
console.log(verifyStr("Hola Mundo"));
console.log(verifyStr("HolaMundo"));

function replacestr(str) {
  return str.replaceAll(" ", "-");
}
console.log(replacestr("Hola Mundo"));

function replaceStr(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += "-";
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(replaceStr("Hola Mundo"));

function countVocals(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === "a" ||
      str[i].toLowerCase() === "e" ||
      str[i].toLowerCase() === "i" ||
      str[i].toLowerCase() === "o" ||
      str[i].toLowerCase() === "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVocals("Hola Pepe"));
console.log(countVocals("hkhjk"));

function countVocalS(str) {
  return str
    .split("")
    .filter((letter) => "aeiou".includes(letter.toLowerCase())).length;
}
console.log(countVocalS("Hola Pepe"));
console.log(countVocalS("hkhjk"));

function mayorQue5(arr) {
  return arr.filter((num) => num > 5).length;
}

console.log(mayorQue5([2, 6, 7, 8, 3]));

function mayores(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > 5) {
      max = max + 1;
    }
  }
  return max;
}
console.log(mayorQue5([2, 6, 7, 8, 3]));
