document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("verify-task").addEventListener("click", () => {
        alert("Please join @the_minngs on Telegram.");
    });

    document.getElementById("verify-youtube").addEventListener("click", () => {
        let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 0;
        balance += 500;
        localStorage.setItem("balance", balance);
        alert("You earned 500 Coins!");
    });
});