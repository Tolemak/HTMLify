// Function to decode HTML entities manually
function decodeHTML(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText;
}

// Assuming you have a string with HTML entities
const htmlEntitiesString = 'Hello &amp; welcome!';

// Decode the HTML entities
const decodedString = decodeHTML(htmlEntitiesString);

console.log(decodedString); // Output: Hello & welcome!