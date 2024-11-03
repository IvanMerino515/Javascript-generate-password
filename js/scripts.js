// Caracteres disponibles para generar la contraseña
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]:;<>,.?/";

// Elementos del DOM
const passwordContent = document.getElementById('passwordContent');
const range = document.getElementById('range');
const lengthNumber = document.getElementById('lengthNumber');
const generateButton = document.getElementById('button');


console.log("passwordContent:", passwordContent);
console.log("range:", range);
console.log("lengthNumber:", lengthNumber);
console.log("generateButton:", generateButton);


const generatePassword = (length) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
};

range.addEventListener('input', () => {
    lengthNumber.textContent = range.value; 
});

generateButton.addEventListener('click', () => {
    console.log("Botón de generación de contraseña presionado"); 
    const passwordLength = parseInt(range.value, 10); 
    const newPassword = generatePassword(passwordLength); 
    passwordContent.value = newPassword; 
});
