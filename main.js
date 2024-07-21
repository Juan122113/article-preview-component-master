let button = document.getElementById("button");
let shareCtn = document.getElementById("sharectn");
let shareIcon = document.getElementById("share-icon");
let body = document.getElementById("body-id");

button.addEventListener('click', () => {
    if (shareCtn.style.display != "flex") {
        button.style.backgroundColor = "var(--desaturated-dark-blue)";
        shareCtn.style.display = "flex";
        // shareCtn.style.pointerEvents = "auto";
        shareIcon.style.fill = "white";
    } else {
        button.style.backgroundColor = "var(--light-grayish-blue)";
        shareCtn.style.display = "none";
        // shareCtn.style.pointerEvents = "none";
        shareIcon.style.fill = "var(--desaturated-dark-blue)";
        }
    
})

// body.addEventListener('click', () => {
//     if (shareCtn.style.display == "flex") {
//         button.style.backgroundColor = "var(--light-grayish-blue)";
//         shareCtn.style.display = "none";
//         // shareCtn.style.pointerEvents = "none";
//         shareIcon.style.fill = "var(--desaturated-dark-blue)";
//     }
// })

// document.getElementById('clickable-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     window.location.href = this.href;
// })