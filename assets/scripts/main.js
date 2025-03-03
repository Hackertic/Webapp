document.addEventListener("DOMContentLoaded", () => {
    let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
    const balanceDisplay = document.getElementById("balance");
    const tapImage = document.getElementById("tap-image");
    const effectsContainer = document.getElementById("effects-container");

    balanceDisplay.textContent = balance; // Restore balance from localStorage

    tapImage.addEventListener("click", (event) => {
        balance += 10;
        balanceDisplay.textContent = balance;
        localStorage.setItem("balance", balance); // Store balance

        const x = event.clientX;
        const y = event.clientY;

        const effect = document.createElement("div");
        effect.classList.add("tap-effect");
        effect.textContent = "+10";
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;

        effectsContainer.appendChild(effect);
        setTimeout(() => {
            effect.remove();
        }, 1000);
    });
});