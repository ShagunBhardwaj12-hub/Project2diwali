
const crackerBtn = document.getElementById("crackerBtn");

const fireworks = document.getElementById("fireworks");

const crackerMessage = document.getElementById("crackerMessage");

const colors = [
    "#ff3333",
    "#ffcc00",
    "#00ffff",
    "#ff66cc",
    "#66ff66",
    "#ffffff",
    "#ff8800",
    "#bb66ff"
];

function createFirework() {

    const centerX = Math.random() * 80 + 10;
    const centerY = Math.random() * 65 + 10;

    for (let i = 0; i < 45; i++) {

        const spark = document.createElement("div");

        spark.classList.add("spark");

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 120 + 40;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        spark.style.left = centerX + "vw";
        spark.style.top = centerY + "vh";

        spark.style.setProperty("--x", x + "px");
        spark.style.setProperty("--y", y + "px");

        spark.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        spark.style.boxShadow =
            "0 0 12px " + spark.style.background;

        fireworks.appendChild(spark);

        setTimeout(function () {
            spark.remove();
        }, 1400);
    }
}
crackerBtn.addEventListener("click", function () {

    // Launch several fireworks bursts
    for (let i = 0; i < 5; i++) {

        setTimeout(function () {
            createFirework();
        }, i * 250);
    }
    crackerMessage.textContent =
        "✨ Let the sky shine! Happy Diwali! 🪔";

});
