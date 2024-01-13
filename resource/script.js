// Mimic typing action
const textElement = document.getElementById('text1');
const text1 = "Hello, I am Charlie! ";
const text2 = "Feel free to click around. "

function typeText() {
    let i = 0;
    var typingInterval = setInterval(() => {
        textElement.textContent = text1.slice(0, i);
        i++;
        if (i >= text1.length) {
            clearInterval(typingInterval);
        }
    }, 100);
}
typeText();
function typeText2() {
    let i = 0;
    var typingInterval = setInterval(() => {
        textElement.textContent = text2.slice(0, i);
        i++;
        if (i >= text2.length) {
            clearInterval(typingInterval);
        }
    }, 100);
}

setTimeout(function () {
    typeText2()
}, 3500);

setTimeout(function () {
    textElement.innerHTML = `<a type="button" class="btn custom-button" id="getToKnow" href="projects.html">Get to know Charlie</a>`
}, 7900);



var profile = document.getElementById('charlie');

