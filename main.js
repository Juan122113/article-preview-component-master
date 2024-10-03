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

function updateElementStyles(elements, isVisible, styles) {
    const currentStyle = isVisible ? styles.visible : styles.hidden;
    elements.button.style.backgroundColor = currentStyle.button;
    elements.shareCtn.style.display = currentStyle.shareCtn;
    elements.shareIcon.style.fill = currentStyle.shareIcon;
}

function toggleShareVisibility(elements) {
    const isVisible = elements.shareCtn.style.display === "flex";
    updateElementStyles(elements, isVisible, styles);
}

function setupEventListeners(elements) {
    elements.button.addEventListener('click', () => toggleShareVisibility(elements));
}

function initializeApp() {
    const elements = initializeElements();
    setupEventListeners(elements);
}

initializeApp();