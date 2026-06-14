import { readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "assets/css/style.css",
  "assets/js/script.js",
  "assets/icons/huahkwang-logo-full.png",
  "assets/images/huahkwang-tower-archive.png",
];

const requiredHtml = [
  "<html lang=\"zh-Hant\">",
  "華光寺 Huah Kwang Temple",
  "清淨道場",
  "歷史沿革",
  "現在的華光寺",
  "華光寺願景",
  "印度佛教八大聖地",
  "交通與聯絡",
  "formsubmit.co",
];

const requiredCss = [
  "--color-paper",
  "--color-red",
  ".site-header",
  ".hero",
  ".section-band",
  "@media (max-width: 760px)",
];

for (const file of requiredFiles) {
  await readFile(file);
}

const html = await readFile("index.html", "utf8");
for (const snippet of requiredHtml) {
  if (!html.includes(snippet)) {
    throw new Error(`index.html missing expected text: ${snippet}`);
  }
}

const css = await readFile("assets/css/style.css", "utf8");
for (const snippet of requiredCss) {
  if (!css.includes(snippet)) {
    throw new Error(`style.css missing expected text: ${snippet}`);
  }
}

console.log("Static site structure looks complete.");
