const obj = require("./token.json");

let css = "";

function traverse(obj, prefix = "") {
	for (let key in obj) {
		const hasValue = "value" in obj[key];
		if (typeof obj[key] === "object" && obj[key] !== null && !hasValue) {
			traverse(obj[key], `${prefix}-${key}`);
		} else if (hasValue) {
			css += `--${prefix.slice(1)}: ${obj[key].value};\n`;
		}
	}
}

traverse(obj["Core/Reference"]);

console.log(css);
