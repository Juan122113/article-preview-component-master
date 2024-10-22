// Definición de estilos
const styles = {
    visible: {
        button: "var(--light-grayish-blue)",
        shareIcon: "var(--desaturated-dark-blue)",
        shareCtn: "none"
    },
    hidden: {
        button: "var(--desaturated-dark-blue)",
        shareIcon: "white",
        shareCtn: "flex"
    }
};

const elements = {
    button: document.getElementById("button"),
    shareCtn: document.getElementById("sharectn"),
    shareIcon: document.getElementById("shareicon")
};

// const isVisible = elements.shareCtn.style.display === "flex";

// document.addEventListener('DOMContentLoaded', isVisible);

// elements.button.addEventListener('click', () => updateElementStyles(elements, styles, styleAttributes));

// function initializeElements() {
//     return {
//         button: document.getElementById("button"),
//         shareCtn: document.getElementById("sharectn"),
//         shareIcon: document.getElementById("shareicon")
//     };
// }

const styleAttributes = {
    button: "backgroundColor",
    shareCtn: "display",
    shareIcon: "fill"
};

function updateElementStyles(elements, styleAttributes, currentStyle) {
    // const isVisible = elements.shareCtn.style.display === "flex";
    // console.log(isVisible);
    
    // const currentStyle = isVisible ? styles.visible : styles.hidden;
    console.log(currentStyle);
    // elements.button.style.backgroundColor = currentStyle.button;
    // elements.shareCtn.style.display = currentStyle.shareCtn;
    // elements.shareIcon.style.fill = currentStyle.shareIcon;

    for (let element in elements) {
        //for (let atrs in atr) {
        elements[element].style[styleAttributes[element]] = currentStyle[element];
        //}
    }
}

function toggleStyles(elements, styles, styleAttributes, isVisible) {
    const currentStyle = isVisible ? styles.visible : styles.hidden;
    updateElementStyles(elements, styleAttributes, currentStyle);
}

function toggleShareVisibility(elements, styles, styleAttributes) {
    const isVisible = elements.shareCtn.style.display === "flex";
    toggleStyles(elements, styles, styleAttributes, isVisible);
}

elements.button.addEventListener('click', () => toggleShareVisibility(elements, styles, styleAttributes));


// function setupEventListeners(elements, styles, styleAttributes) {
//     elements.button.addEventListener('click', () => toggleShareVisibility(elements, styles, styleAttributes));
// }

// setupEventListeners(elements, styles, styleAttributes);

// function setupEventListeners(elements) {
//     elements.button.addEventListener('click', () => toggleShareVisibility(elements));
// }

// setupEventListeners(elements);

// function initializeApp() {
//     const elements = initializeElements();
//     setupEventListeners(elements);
// }

// initializeApp();