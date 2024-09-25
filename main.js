const button = document.getElementById("button");
const shareCtn = document.getElementById("sharectn");
const shareIcon = document.getElementById("share-icon");

button.addEventListener('click', () => {
    const isVisible = shareCtn.style.display === "flex";

    button.style.backgroundColor = isVisible ? "var(--light-grayish-blue)" : "var(--desaturated-dark-blue)";
    shareCtn.style.display = isVisible ? "none" : "flex";
    shareIcon.style.fill = isVisible ? "var(--desaturated-dark-blue)" : "white";
    
});