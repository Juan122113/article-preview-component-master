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

const styleAttributes = {
    button: "backgroundColor",
    shareCtn: "display",
    shareIcon: "fill"
};

function updateElementStyles(elements, styleAttributes, currentStyle) {
    for (let element in elements) {
        elements[element].style[styleAttributes[element]] = currentStyle[element];
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