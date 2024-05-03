// -------------------------- Deklarasi Variable ------------------------

var answer = document.getElementById("answerText");
var rAnswer = document.getElementById("rAnswer");
var sprites = document.getElementById("imgSprites");
var dScore = document.getElementById("dScore");
var score = 0;
var r;

// --------------------------- Randomizer ---------------------------------

function SRandom() {
    r = Math.floor(Math.random() * pokemon.length);
}

function startQ() {
    SRandom();
    sprites.src = pokemon[r][0];
}

// --------------------------------- Jawaban -------------------------------

function answerEnter() {
    if (window.event.keyCode == 13) {
        document.getElementById("answerSubmit").click();
    }
}

function answerSubmit() {
    rAnswer.style.display = "block";
    rAnswer.innerHTML = pokemon[r][1];
    sprites.style.filter = "brightness(1)";
    

    if (answer.value == pokemon[r][1]) {
        rAnswer.style.color = "rgb(47, 255, 127)";
        score += 10;
    } else {
        rAnswer.style.color = "rgb(248, 64, 64)";
        score -= 10;
    }
    
    dScore.innerHTML = score;
    answer.value = "";
    setTimeout(function() {
        startQ();
        rAnswer.style.display = "none";
        sprites.style.filter = "brightness(0)";
    }, 2500);
}

// -------------------------- Pokemon's arrays --------------------------

var pokemon = [
    ["sprites/001.png", "Slerf"],
    ["sprites/002.png", "Ansem"],
    ["sprites/003.png", "Yelo"],
    ["sprites/004.png", "Rektober"],
    ["sprites/005.png", "Ginger"],
    ["sprites/006.png", "Yogurt"],
    
]