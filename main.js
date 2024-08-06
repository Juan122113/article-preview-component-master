let button = document.getElementById("button");
let shareCtn = document.getElementById("sharectn");
let shareIcon = document.getElementById("share-icon");
let body = document.getElementById("body-id");

button.addEventListener('click', () => {
    if (shareCtn.style.display != "flex") {
        button.style.backgroundColor = "var(--desaturated-dark-blue)";
        shareCtn.style.display = "flex";
        shareIcon.style.fill = "white";
    } else {
        button.style.backgroundColor = "var(--light-grayish-blue)";
        shareCtn.style.display = "none";
        shareIcon.style.fill = "var(--desaturated-dark-blue)";
        }
    
})