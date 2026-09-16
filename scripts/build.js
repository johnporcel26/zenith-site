const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const runtimeDirectories = ["css", "js"];
const runtimeAssets = [
  "assets/favicon/zenith-favicon.png",
  "assets/images/logo/zenith-logo.png",
  "assets/images/mictmr/mictmr-form-background.png",
  "assets/images/icons/pix.svg",
  "assets/images/icons/deposit.svg",
  "assets/images/icons/payment.svg",
  "assets/images/icons/crypto.svg",
  "assets/images/icons/loan.svg"
];
const bannerDirectories = [
  "01_Hero",
  "02_Pessoa_Fisica",
  "03_Pessoa_Juridica",
  "04_MICTMR",
  "05_Solucoes",
  "06_Atendimento",
  "07_Zenith_TAP",
  "08_Zenith_PRO",
  "09_Parceiros",
  "11_Cards_Segmentos_PF",
  "12_Cards_Segmentos_PJ",
  "13_Cards_Segmentos_MICTMR"
];
const runtimeExtensions = new Set([
  ".png", ".webp", ".jpg", ".jpeg", ".gif", ".avif", ".svg",
  ".woff", ".woff2", ".ttf", ".otf"
]);

function copyDirectory(source, destination, filter = () => true) {
  if (!fs.existsSync(source)) return;
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath, filter);
    } else if (entry.isFile() && filter(sourcePath)) {
      fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}

function hasExactPath(base, relativePath) {
  let current = base;
  for (const segment of relativePath.split("/").filter(Boolean)) {
    if (!fs.existsSync(current) || !fs.statSync(current).isDirectory()) return false;
    const exactName = fs.readdirSync(current).find((name) => name === segment);
    if (!exactName) return false;
    current = path.join(current, exactName);
  }
  return fs.existsSync(current) && fs.statSync(current).isFile();
}

function normalizeReference(rawReference) {
  const value = rawReference.trim().replace(/^['"]|['"]$/g, "");
  if (!value || value.startsWith("#") || value.startsWith("/") || /^(?:https?:|data:|mailto:|tel:|javascript:)/i.test(value)) {
    return null;
  }
  return value.split(/[?#]/, 1)[0].replace(/\\/g, "/");
}

function verifyFileReference(rawReference, fromFile) {
  const reference = normalizeReference(rawReference);
  if (!reference) return;
  const relativePath = path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), reference));
  if (relativePath.startsWith("../") || !hasExactPath(dist, relativePath)) {
    throw new Error(`Referência ausente ou com capitalização incorreta: ${rawReference} em ${fromFile}`);
  }
}

function verifyOutput() {
  const html = fs.readFileSync(path.join(dist, "index.html"), "utf8");
  const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]));
  const anchors = [...html.matchAll(/href=["']#([^"']+)["']/g)].map((match) => match[1]);
  const missingAnchors = [...new Set(anchors.filter((anchor) => !ids.has(anchor)))];

  if (missingAnchors.length) {
    throw new Error(`Âncora(s) sem alvo no index.html: ${missingAnchors.join(", ")}`);
  }

  for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
    verifyFileReference(match[1], "index.html");
  }

  for (const cssFile of fs.readdirSync(path.join(dist, "css")).filter((file) => file.endsWith(".css"))) {
    const css = fs.readFileSync(path.join(dist, "css", cssFile), "utf8");
    for (const match of css.matchAll(/url\(([^)]+)\)/g)) {
      verifyFileReference(match[1], `css/${cssFile}`);
    }
  }
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(dist, "index.html"));

for (const directory of runtimeDirectories) {
  copyDirectory(path.join(root, directory), path.join(dist, directory));
}

for (const asset of runtimeAssets) {
  const source = path.join(root, asset);
  const destination = path.join(dist, asset);
  if (!fs.existsSync(source)) {
    throw new Error(`Asset obrigatório não encontrado: ${asset}`);
  }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

for (const directory of bannerDirectories) {
  copyDirectory(
    path.join(root, "Banners", directory),
    path.join(dist, "Banners", directory),
    (file) => runtimeExtensions.has(path.extname(file).toLowerCase())
  );
}

verifyOutput();
console.log("Build concluído: dist pronta para publicação.");
