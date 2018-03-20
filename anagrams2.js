
const dest = document.getElementById('main');
let anagramsets = {};

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    // your code will go here ...
    // var typedText = document.getElementById("input").value;

    // for(let i = 0; i < Object.keys(findAllAnagrams().length; i++) {
    //     let anagram = Object.keys(findAllAnagrams()[i];
    //     ...
    // } // is the same as below:

    for(let alphabetizedWord of Object.keys(findAllAnagrams())) {
        if (anagramsets[alphabetizedWord].length >= 5) {
            const wordArray = anagramsets[alphabetizedWord];
            const wordNode = document.createTextNode(wordArray);
            newDiv = document.createElement("div");
            newDiv.appendChild(wordNode);
            dest.appendChild(newDiv);
        }
    }
}

function findAllAnagrams() {
    // for (let i = 0; i < words.length; i++) {
    //     let word = words[i];
    // this is the same as:
    
    for (let word of words) {
        const alphabetizedWord = alphabetize(word);

        if ( !anagramsets[alphabetizedWord] ) {
            anagramsets[alphabetizedWord] = []
        }

        anagramsets[alphabetizedWord].push(word);
    }

    return anagramsets;
}