// Convert each letter of word to upper case
const str1 = "The  quick     brown fox jumps over     the lazy dog.";
console.log(convertToUpperCase(str1))

function convertToUpperCase(str1) {
    const lengthOfString = str1.length;
    let newStr = ""; let char = "";
    for (let i=0; i<lengthOfString; i++) {
        if (str1.charAt(i) == " " &&
        ((str1.charCodeAt(i+1) >=65 && str1.charCodeAt(i+1) <=90)
        || (str1.charCodeAt(i+1)>=97 && str1.charCodeAt(i+1)<=122))) {
            char = str1.charAt(i+1).toUpperCase();
            newStr = newStr.concat(" ", char);
            i++;
        }
        else {
            newStr = newStr.concat(str1.charAt(i));
        }
    }
    return newStr;
}