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

// ejercicios KYU 7

function sumPositives(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
console.log(sumPositives([-2, -4, -6, 1, 7]));

function sumPositives(arr) {
  return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}
console.log(sumPositives([-2, -4, -6, 1, 7]));

function sumPositives(arr) {
  return arr.filter((num) => num > 0).reduce((acc, sum) => acc + sum, 0);
}
console.log(sumPositives([-2, -4, -6, 10, 70]));

function palindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}
console.log(palindrome("Alola"));
console.log(palindrome("opa"));

function palindromeT(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
console.log(palindromeT("Alola"));
console.log(palindromeT("opa"));

function equal(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}
console.log(equal([2, 2, 2]));
console.log(equal([2, 3, 2]));

function equal(arr) {
  return arr.every((num) => num === arr[0]);
}
console.log(equal([2, 2, 2]));
console.log(equal([2, 3, 2]));

function ends(str, end) {
  return str.endsWith(end);
}

console.log(ends("Hello World", "World"));
console.log(ends("Hello World", "PEPe"));

function ends(str, end) {
  if (end.length > str.length) {
    return false;
  }
  for (let i = 0; i < end.length; i++) {
    if (str[str.length - end.length + i] !== end[i]) {
      return false;
    }
  }
  return true;
}
console.log(ends("Hello World", "World"));
console.log(ends("Hello World", "PEPe"));

function ends(str, end) {
  if (end.length > str.lenght) {
    return false;
  }
  for (let i = 0; i < end.length; i++) {
    if (str[str.length - end.length + i] !== end[i]) {
      return false;
    }
  }
  return true;
}

function capitalize4(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalize4("hola mundo"));

function capitalize3(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return result.join(" ");
}
console.log(capitalize3("hola mundo"));

function capitalize2(str) {
  let cap = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
  return cap.join(" ");
}
console.log(capitalize2("hola mundo"));

function capitalize1(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return result.join(" ");
}
console.log(capitalize1("hola mundo"));

function capitalize5(str) {
  let cap = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
  return cap.join(" ");
}
console.log(capitalize5("chau mundo"));

function invert(arr) {
  return arr.slice().reverse();
}
console.log(invert([1, 2, 3]));

function invert1(arr) {
  let final = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    final += arr[i];
  }
  return final;
}
console.log(invert([1, 2, 3]));

function duplicate(str) {
  let dupla = str.split("").map((letter) => letter + letter);
  return dupla.join("");
}
console.log(duplicate("hola"));

function duplicate(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}
console.log(duplicate("hola"));

function countVocals(str) {
  return str
    .split("")
    .filter((letter) => "aeiou".includes(letter.toLowerCase())).length;
}
console.log(countVocals("Hola"));
console.log(countVocals("Andabamos"));

function countVocals2(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVocals("Hola"));
console.log(countVocals("Andabamos"));

function impar(arr) {
  return arr.find((num) => arr.filter((n) => n === num).length % 2 !== 0);
}
console.log(impar([1, 2, 2, 3, 1]));

function impar2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count % 2 !== 0) {
        return arr[i];
      }
    }
  }
}
console.log(impar([1, 2, 3, 3, 1]));

function square(str) {
  return Number(
    str
      .toString()
      .split("")
      .map((num) => num * num)
      .join("")
  );
}
console.log(square(9119));

function square2(str) {
  let double = [];
  let strToNum = Number(str);
  for (let i = 0; i < strToNum.length; i++) {
    double += strToNum[i] * strToNum[i];
  }
  return double;
}
console.log(square(9119));

function sumPos(arr) {
  return arr
    .slice("")
    .filter((num) => num > 0)
    .reduce((acc, num) => acc + num, 0);
}
console.log(sumPos([1, -4, 7, 12]));

function sumPos2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumPos([1, -4, 7, 12]));

function minNumber(arr) {
  return Math.min(...arr);
}
console.log(minNumber([1, -4, 7, 12]));

function minNumber2(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minNumber([1, -4, 7, 12]));

function multiply(arr, num) {
  return arr.map((n) => n * num);
}
console.log(multiply([1, 2, 3], 2));

function multiply(arr, num) {
  let double = [];
  for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] * num);
  }
  return double;
}
console.log(multiply([1, 2, 3], 2));

function palindorome(str) {
  return str === str.split("").reverse().join("");
}
console.log(palindrome("alola"));
console.log(palindrome("alo hawai"));

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("alola"));
console.log(palindrome("alo hawai"));

function palindrome3(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("alola"));
console.log(palindrome("alo hawai"));

function countEvens(arr) {
  return arr.filter((num) => num % 2 === 0).length;
}
console.log(countEvens([1, 2, 3, 4, 5, 6]));

function countEvens2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count += 1;
    }
  }
  return count;
}
console.log(countEvens([1, 2, 3, 4, 5, 6]));

function findNumbers(arr) {
  return arr.find((num) => arr.filter((n) => n !== num));
}
console.log(findNumbers([4, 1, 2, 1, 2]));

function findNumbers2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
}
console.log(findNumbers2([4, 1, 2, 1, 2, 4, 3]));

function findNumbers3(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
}
console.log(findNumbers3([4, 1, 2, 1, 2, 4, 3, 3, 7]));

function anagram(arr) {
  let grupos = {};
  for (let i = 0; i < arr.length; i++) {
    let palabra = arr[i];
    let ordenada = palabra.split("").sort().join("");

    if (grupos[ordenada] === undefined) {
      grupos[ordenada] = [palabra];
    } else {
      grupos[ordenada].push(palabra);
    }
  }
  let resultado = [];
  for (let clave in grupos) {
    resultado.push(grupos[clave]);
  }
  return resultado;
}
console.log(anagram(["bat", "tab", "tap", "pat"]));

function groupAnagrams(words) {
  let map = {};
  for (let word of words) {
    let key = word.split("").sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["bat", "tab", "tap", "pat"]));

function groupAnagram3(words) {
  let group = {};
  for (let word of words) {
    let key = word.split("").sort().join("");
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(word);
  }
  return Object.values(group);
}
console.log(groupAnagram3(["bat", "tab", "tap", "pat"]));

function diference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
console.log(diference([1, 2, 2, 3], [2]));

function diference2(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(diference2([1, 2, 2, 3], [2]));

function diference3(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(diference3([1, 2, 2, 3], [2, 3]));

function difArr(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
console.log(difArr([7, 2, 2, 3], [2, 3]));

function difArr4(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(difArr4([7, 2, 2, 3], [2, 3]));

function sortArr(arr) {
  const impar = arr.filter((x) => x % 2).sort((a, b) => a - b);
  return arr.map((x) => (x % 2 ? impar.shift() : x));
}
console.log(sortArr([5, 3, 2, 8, 1, 4]));

// [5, 3, 2, 8, 1, 4] → [1, 3, 2, 8, 5, 4]

function sortArr(arr) {
  const impar = arr.filter((x) => x % 2).sort((a, b) => a - b);
  return arr.map((x) => (x % 2 ? impar.shift() : x));
}
console.log(sortArr([7, 5, 2, 3, 1, 4]));

function sort2(arr) {
  let impar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      impar.push(arr[i]);
    }
  }
  impar.sort((a, b) => a - b);
  let result = [];
  let imparIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(impar[imparIndex]);
      imparIndex++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(sort2([7, 5, 2, 3, 1, 4, 9, 12, 11]));

function sortImp(arr) {
  let impar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      impar.push(arr[i]);
    }
  }
  impar.sort((a, b) => a - b);
  let result = [];
  let indexImpar = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(impar[indexImpar]);
      indexImpar++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(sort2([7, 5, 2, 3, 1, 4, 9, 12, 11]));

// "abcdef" → ["AbCdEf", "aBcDeF"]

function capitalizeArr(arr) {
  let par = arr
    .split("")
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
    .join("");
  let impar = arr
    .split("")
    .map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char))
    .join("");
  return [par, impar];
}
console.log(capitalizeArr("abcdef"));

function capitalizeArr2(arr) {
  let par = "";
  let impar = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      par += arr[i].toUpperCase();
      impar += arr[i];
    } else {
      impar += arr[i].toUpperCase();
      par += arr[i];
    }
  }
  return [par, impar];
}
console.log(capitalizeArr("abcdef"));

// ("hello", "el") → "hlo"

function deleteSecond(str1, str2) {
  return str1
    .split("")
    .filter((x) => !str2.includes(x))
    .join("");
}
console.log(deleteSecond("hello", "el"));

function deleteSecond2(str1, letters) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    if (!letters.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log(deleteSecond("hello", "el"));

// [1,2,3] [4,5,6] → [1,4,2,5,3,6]
function intercalate(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
}
console.log(intercalate([1, 2, 3], [4, 5, 6]));

// "abacabad" → "c"
function notRepeat(str) {
  return (
    str
      .split("")
      .find((letter) => str.indexOf(letter) === str.lastIndexOf(letter)) || null
  );
}
console.log(notRepeat("abacabad"));

function notRepeat2(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}
console.log(notRepeat("abraTadabra"));

function maxSum(arr) {
  let max = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum + arr[i]);
    max = Math.max(max, currentSum);
  }
  return max;
}
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxSum2(arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = Math.max(0, sum + arr[i]);
    max = Math.max(max, sum);
  }
  return max;
}
console.log(maxSum2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// "(())()" → true
// "(()" → false

function balance(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
    } else if (count < 0) return false;
  }
  return count === 0;
}
console.log(balance("(())"));
console.log(balance("(())))"));
