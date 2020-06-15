// Given a string detect whether or not its a pangram
// Return true if it is 
// Return false if its not

const string = "The quick brown fox jumps over the lazy dog"
const string1 = 'abcdefghiJklmnopqrstUvwxyz'
const string2 = "This is not a pangram."


// Solution using regex method
function isPangram(string){
     string = string.toLowerCase()
    console.log(string)
    var regex = /([a-z])(?!.*\1)/g;
    return (string.match(regex) || []).length === 26;
}



console.log(isPangram(string2))

// Solution using .every() Method


function isPangram2(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

console.log(isPangram2(string2))

// Solution using for loop 

function isPangram3(string) {
    string = string.toLowerCase()
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (var i =0; i<26; i++) {
        if(string.indexOf(letters[i]) == -1) // letters.charAt(i) makes it unnecessary to use string
        return false
    }
    return true
}

console.log(isPangram3(string2))
