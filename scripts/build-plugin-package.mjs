import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginDirectory = join(root, "plugins", "terminal");
const packagePath = join(pluginDirectory, "atlas-plugin-terminal.atlas-plugin.json");
const plugin = JSON.parse(await readFile(join(pluginDirectory, "atlas-plugin.json"), "utf8"));
const readme = await readFile(join(pluginDirectory, "README.md"), "utf8");
const includedFiles = [
  ["atlas-plugin.json", "application/json"],
  ["README.md", "text/markdown"],
  ["index.html", "text/html"],
  ["app.js", "text/javascript"],
  ["app.bundle.js", "text/javascript"],
  ["app.bundle.css", "text/css"],
  ["styles.css", "text/css"],
  ["icon.svg", "image/svg+xml"],
];

const packageFile = {
  kind: "atlas.runtime.plugin.install-package",
  filename: "atlas-plugin-terminal.atlas-plugin.json",
  plugin: {
    id: plugin.id,
    name: plugin.name,
    nameI18n: plugin.nameI18n,
    version: plugin.version,
    description: plugin.description,
    descriptionI18n: plugin.descriptionI18n,
    icon: plugin.icon,
    extensionPoints: [],
    provides: plugin.capabilities,
  },
  files: [
    { path: "README.md", mediaType: "text/markdown", content: readme },
    ...await Promise.all(includedFiles.map(async ([name, mediaType]) => ({
      path: name,
      mediaType,
      content: await readFile(join(pluginDirectory, name), "utf8"),
    }))),
  ],
};

await writeFile(packagePath, `${JSON.stringify(packageFile, null, 2)}\n`, "utf8");
console.log(`Built ${packagePath}`);
