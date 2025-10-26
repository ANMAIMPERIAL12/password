let pass = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
  "{", "[", "}", "]", ":", ";", "'", "<", ">", ",", ".", "?", "/", "!"
]

let pass1EL = document.getElementById("password1")
let pass2EL = document.getElementById("password2")


function generatepass(){
    let password1=""
    let password2=""
    let data = document.getElementById("length-input").value
    for(let i=0;i<data;i++){
        password1 += pass[Math.floor(Math.random()*pass.length)]
        password2 += pass[Math.floor(Math.random()*pass.length)]
    }
    pass1EL.textContent = password1
    pass2EL.textContent = password2
}

async function copytoclipboard(elementId) {
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
    }
    const textToCopy = element.textContent.trim();

    if (!textToCopy) {
        console.warn('The element is empty. Nothing copied.');
        return;
    }

    try {
        navigator.clipboard.writeText(textToCopy);
        
        console.log('Text successfully copied to clipboard!');
        const originalText = element.textContent;
        element.textContent = 'Copied!';
        setTimeout(() => {
            if (element.textContent === 'Copied!') {
                element.textContent = originalText;
            }
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy text using Clipboard API:', err);
        alert('Copy failed. Ensure you are on a secure (HTTPS) site or try copying manually.');
    }
}