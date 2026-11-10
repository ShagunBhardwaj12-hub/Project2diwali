
// =====================================
// 1. SELECT HTML ELEMENTS

const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const lights = document.getElementById("lights");
const diyaBtn = document.getElementById("diyabtn");
const diyaCount = document.getElementById("diyacount");
const extraDiyas = document.getElementById("extradiyas");
let count = 0;

// 2. SURPRISE BUTTON
surpriseBtn.addEventListener("click", function () {
    message.classList.remove("hidden");
    surpriseBtn.textContent =
        "Your Surprise is Opened ❤️";
    surpriseBtn.disabled = true;
    createSparkles();

});
// 3. FLOATING GOLDEN LIGHTS
function createLights() {

    for (let i = 0; i < 35; i++) {
        const light = document.createElement("div");
        light.classList.add("light");
        light.style.left =
            Math.random() * 100 + "vw";
        light.style.animationDuration =
            (Math.random() * 5 + 5) + "s";
        light.style.animationDelay =
            Math.random() * 5 + "s";
        lights.appendChild(light);
    }

}
createLights();

// 4. SPARKLE EFFECT
// =====================================

function createSparkles() {

    for (let i = 0; i < 30; i++) {

        const sparkle = document.createElement("div");

        sparkle.classList.add("light");

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.bottom = "0";

        const size = Math.random() * 7 + 3;

        sparkle.style.width = size + "px";
        sparkle.style.height = size + "px";

        sparkle.style.animationDuration =
            (Math.random() * 2 + 1) + "s";

        lights.appendChild(sparkle);

        setTimeout(function () {

            sparkle.remove();

        }, 3000);

    }

}


// =====================================
// 5. LIGHT ANOTHER DIYA
// =====================================

diyaBtn.addEventListener("click", function () {

    count++;

    const diya = document.createElement("span");

    diya.textContent = "🪔";

    diya.classList.add("extra-diya");

    extraDiyas.appendChild(diya);

    diyaCount.textContent =
        `You have lit ${count} diyas ✨`;

});
