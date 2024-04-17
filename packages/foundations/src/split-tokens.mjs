import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the data from the JSON file
let data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "tokens.json"), "utf8"));

const components = Object.keys(data).filter((key) => key.startsWith("Component/"));
const keys = Object.keys(data).filter((key) => key.startsWith("Theme/"));

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

  fs.writeFileSync(path.resolve(__dirname, `tokens/tokens-${themePrefix}.json`), "");
  fs.writeFileSync(path.resolve(__dirname, `tokens/tokens-${themePrefix}.json`), JSON.stringify(newData, null, 4));
}
