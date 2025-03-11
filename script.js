// Get references to elements
const form = document.getElementById('orderForm');
const previewText = document.getElementById('previewText');
const shirtPreview = document.getElementById('shirtPreview');

// Update the preview when user types or selects options
form.addEventListener('input', () => {
    const color = document.getElementById('color').value;
    const design = document.getElementById('design').value;

    // Update color and design preview
    shirtPreview.style.backgroundColor = color;
    previewText.textContent = design || 'Your design will appear here';
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Order placed successfully!');
});
