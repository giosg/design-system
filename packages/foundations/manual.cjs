const obj = require("./token.json");

let css = "";

function traverse(obj, prefix = "") {
	for (let key in obj) {
		const hasValue = "value" in obj[key];
		if (typeof obj[key] === "object" && obj[key] !== null && !hasValue) {
			traverse(obj[key], `${prefix}-${key}`);
		} else if (hasValue) {
			const value = obj[key].value;
			try {
				if (value.includes("{")) {
					const changedValue = transformValue(value);
					css += `--${prefix.slice(1)}: ${changedValue};\n`;
				} else {
					css += `--${prefix.slice(1)}: ${value};\n`;
				}
			} catch (err) {
				console.log(err);
				console.log(value);
			}
		}
	}
}

function transformValue(value) {
	return value.replace(/\{(.+?)\}/g, function (_, match) {
		var parts = match.split(".");
		return "var(--" + parts.join("-") + ")";
	});
}

// --gds-sys-space: {gds.ref.space.0};
// --gds-sys-space: {gds.ref.space.0,125};
// --gds-sys-space: {gds.ref.space.0,25};
// --gds-sys-space: {gds.ref.space.0,5};
// --gds-sys-space: {gds.ref.space.0,75};
// --gds-sys-space: {gds.ref.space.1};
// --gds-sys-space: {gds.ref.space.1,25};
// --gds-sys-space: {gds.ref.space.1,5};
// --gds-sys-space: {gds.ref.space.1,75};
// --gds-sys-space: {gds.ref.space.2};
// --gds-sys-space: {gds.ref.space.2,5};

traverse(obj["Core/System"]);

console.log(css);
