document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('#currentyear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const lastModified = document.querySelector('#lastModified');
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
});

