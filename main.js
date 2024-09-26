const button = document.getElementById("button");
const shareCtn = document.getElementById("sharectn");
const shareIcon = document.getElementById("share-icon");

function handleButton(button, isVisible) {
    button.style.backgroundColor = isVisible ? "var(--light-grayish-blue)" : "var(--desaturated-dark-blue)";
}

function handleShareCtn(share, isVisible) {
    share.style.display = isVisible ? "none" : "flex";
}

function handleShareIcon(shareIcon, isVisible) {
    shareIcon.style.fill = isVisible ? "var(--desaturated-dark-blue)" : "white";
}

function handleEvent() {
    const isVisible = shareCtn.style.display === "flex";
    console.log(isVisible);

    handleButton(button, isVisible);
    handleShareCtn(shareCtn, isVisible)
    handleShareIcon(shareIcon, isVisible)
}

button.addEventListener('click', handleEvent);