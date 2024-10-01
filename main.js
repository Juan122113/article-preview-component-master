// const button = document.getElementById("button");
// const shareCtn = document.getElementById("sharectn");
// const shareIcon = document.getElementById("share-icon");

// function objectInitialElements() {
//     return {
//         button: "button",
//         shareCtn: "sharectn",
//         shareIcon: "shareicon"
//     };
// }

// function initializeElements() {
//     const elements = objectInitialElements();
//     console.log(elements);
//     for (let element in elements) {
//         console.log(elements[element]);
//         // let initialIdElements = [];
//         // initialIdElements.push(document.getElementById(elements[element]));
//         // console.log(initialIdElements);
//         return element = document.getElementById(elements[element]);
//         console.log(element);
//     }

// }

// function initializeApp() {
//     const elements2 = initializeElements();
//     console.log(elements2); 
// }

// initializeApp();
// console.log(initializeApp());

// function handleButton(button, isVisible) {
//     button.style.backgroundColor = isVisible ? "var(--light-grayish-blue)" : "var(--desaturated-dark-blue)";
// }

// function handleShareCtn(share, isVisible) {
//     share.style.display = isVisible ? "none" : "flex";
// }

// function handleShareIcon(shareIcon, isVisible) {
//     shareIcon.style.fill = isVisible ? "var(--desaturated-dark-blue)" : "white";
// }

// function handleVarious(isVisible) {
//     handleButton(button, isVisible);
//     handleShareCtn(shareCtn, isVisible);
//     handleShareIcon(shareIcon, isVisible);
// }

// function handleEvent() {
//     const isVisible = shareCtn.style.display === "flex";
//     console.log(isVisible);

//     handleVarious(isVisible)
// }

// button.addEventListener('click', handleEvent);


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

function initializeElements() {
    return {
        button: document.getElementById("button"),
        shareCtn: document.getElementById("sharectn"),
        shareIcon: document.getElementById("shareicon")
    };
}

function updateElementStyles(elements, isVisible) {
    const currentStyle = isVisible ? styles.visible : styles.hidden;
    elements.button.style.backgroundColor = currentStyle.button;
    elements.shareCtn.style.display = currentStyle.shareCtn;
    elements.shareIcon.style.fill = currentStyle.shareIcon;
}

function toggleShareVisibility(elements) {
    const isVisible = elements.shareCtn.style.display === "flex";
    updateElementStyles(elements, isVisible);
}

function setupEventListeners(elements) {
    elements.button.addEventListener('click', () => toggleShareVisibility(elements));
}

function initializeApp() {
    const elements = initializeElements();
    setupEventListeners(elements);
}

initializeApp();