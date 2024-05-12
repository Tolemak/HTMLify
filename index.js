import "traverian";

// const app = traverian();

import { decodeHTML } from 'entities';

// Assuming you have a string with HTML entities
const htmlEntitiesString = 'Hello &amp; welcome!';

// Decode the HTML entities
const decodedString = decodeHTML(htmlEntitiesString);

console.log(decodedString); // Output: Hello & welcome!