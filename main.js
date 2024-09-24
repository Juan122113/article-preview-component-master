const button = document.getElementById("button");
const shareCtn = document.getElementById("sharectn");
const shareIcon = document.getElementById("share-icon");

const elements = {
    button: "backgroundColor",
    shareCtn: "display",
    shareIcon: "fill"
};

const elementsKeys = Object.keys(elements);

console.log(elementsKeys);

const handleClick = (e) => {
    elementsKeys.forEach(element => {
        if (shareCtn.style.display != "flex") {
            // element.style.elements[element] =
        }
    })
}

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