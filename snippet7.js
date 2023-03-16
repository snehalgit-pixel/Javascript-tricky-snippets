let str="The quick brown fox jumped over the lazy dog";
convertString();

function convertString() {
    let newStr = str.charAt(0);
    let char = "";
    for (let i=1; i < str.length; i++) {
        char = str.charAt(i);
        if (char == " ") {
            i++;
            char = str.charAt(i).toUpperCase();
            newStr = newStr.concat(" ");
        }
        newStr = newStr.concat(char);
    }
    console.log("Converted->"+newStr);
}