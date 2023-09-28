

// Get references to the input field, button, and QR code container
const textInput = document.getElementById('text-input');
const generateButton = document.getElementById('generate-button');
const qrCodeContainer = document.getElementById('qrcode');

// Event listener for the Generate QR Code button
generateButton.addEventListener('click', () => {
    const inputValue = textInput.value;

    // Check if the input is not empty
    if (inputValue.trim() !== '') {
        // Clear previous QR codes
        qrCodeContainer.innerHTML = '';

        // Generate a new QR code
        const qrcode = new QRCode(qrCodeContainer, {
            text: inputValue,
            width: 128,
            height: 128,
        });
    }
});
