

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    // your code will go here ...
    var typedText = document.getElementById("input").value;

    var dest = document.getElementById('main');


    for (i = 0; i < words.length; i++) {
        word = words[i]
        if (alphabetize(word) === alphabetize(typedText)) {
            var newDiv = document.createElement('div');
            var text = document.createTextNode(word);
            newDiv.appendChild(text);
            dest.appendChild(newDiv)

        }
    }

}