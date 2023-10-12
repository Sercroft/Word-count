let countTarget     = document.getElementById('word-count-input')
let wordCount       = document.getElementById("word-count")
let characterCount  = document.getElementById("character-count")

let count = function () {
    let characters = countTarget.value
    let charactersLength = characters.length
    let words = characters.split(/\s+/).filter(function (word) { 
        return word.length > 0
    })
    
    wordCount.innerHTML = words.length
    characterCount.innerHTML = charactersLength
}

count()

window.addEventListener("input",
    function (e) {
        if(e.target.matches("#word-count-input")){
            count()
        }
    },
    false
)