const desaturatedDarkBlue = "var(--desaturated-dark-blue)";

// Definición de estilos
const styles = {
    visible: {
        button: "var(--light-grayish-blue)",
        shareIcon: desaturatedDarkBlue,
        shareCtn: "none"
    },
    hidden: {
        button: desaturatedDarkBlue,
        shareIcon: "white",
        shareCtn: "flex"
    }
};

const elements = {
    button: document.getElementById("button"),
    shareCtn: document.getElementById("sharectn"),
    shareIcon: document.getElementById("shareicon")
}

// const isVisible = elements.shareCtn.style.display === "flex";

// document.addEventListener('DOMContentLoaded', isVisible);

elements.button.addEventListener('click', () => updateElementStyles(elements, styles));

// function initializeElements() {
//     return {
//         button: document.getElementById("button"),
//         shareCtn: document.getElementById("sharectn"),
//         shareIcon: document.getElementById("shareicon")
//     };
// }

function updateElementStyles(elements, styles) {
    const isVisible = elements.shareCtn.style.display === "flex";
    console.log(isVisible);
    const currentStyle = isVisible ? styles.visible : styles.hidden;
    elements.button.style.backgroundColor = currentStyle.button;
    elements.shareCtn.style.display = currentStyle.shareCtn;
    elements.shareIcon.style.fill = currentStyle.shareIcon;
}

// function toggleShareVisibility(elements) {
//     const isVisible = elements.shareCtn.style.display === "flex";
//     updateElementStyles(elements, isVisible, styles);
// }

// function setupEventListeners(elements) {
//     elements.button.addEventListener('click', () => toggleShareVisibility(elements));
// }

// setupEventListeners(elements);

// function initializeApp() {
//     const elements = initializeElements();
//     setupEventListeners(elements);
// }

// initializeApp();