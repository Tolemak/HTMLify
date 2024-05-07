# HTMLify

HTMLify is a simple HTML encoder tool designed to convert plain text into HTML entities. With HTMLify, you can quickly encode special characters in your HTML code to ensure proper rendering and prevent security vulnerabilities such as Cross-Site Scripting (XSS).

## Features

- Encode plain text into HTML entities.
- Support for encoding special characters including `<`, `>`, `"`, `'`, and `&`.
- Easy-to-use interface.
- Lightweight and fast.

## Getting Started

To use HTMLify, simply clone the repository to your local machine or include the script in your HTML file:

```html
<script src="htmlify.js"></script>
```

Then, call the `encodeHTML()` function passing the text you want to encode as an argument:

```javascript
var encodedText = encodeHTML("Hello, <world>!");
console.log(encodedText); // Outputs: Hello, &lt;world&gt;!
```

## Example

```javascript
var inputText = "Encode < and > characters in HTML.";
var encodedText = encodeHTML(inputText);
console.log(encodedText); // Outputs: Encode &lt; and &gt; characters in HTML.
```

## Contribution

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
