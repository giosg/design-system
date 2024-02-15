import fs from "fs";

// Load the data from the JSON file
let data = JSON.parse(fs.readFileSync("tokens.json", "utf8"));

const components = Object.keys(data).filter((key) => key.startsWith("Component/"));
const keys = Object.keys(data).filter((key) => key.startsWith("Themes/"));

for (let key of keys) {
	const newData = { ...data };
	const themePrefix = key.split("/")[1].toLocaleLowerCase();
	const keyForDeletion = keys.filter((k) => k !== key);

	keyForDeletion.forEach((key) => {
		delete newData[key];
	});

	components.forEach((key) => {
		delete newData[key];
	});

	console.log(newData);

	// Clear the file
	fs.writeFileSync(`tokens/tokens-${themePrefix}.json`, "");
	fs.writeFileSync(`tokens/tokens-${themePrefix}.json`, JSON.stringify(newData, null, 4));
}
