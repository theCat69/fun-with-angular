const fs = require('fs');
const path = require('path');

const templatePath = path.resolve(__dirname, '../e2e/config.e2e.template.json');
const outPath = path.resolve(__dirname, "../e2e/config.json");

if (!fs.existsSync(templatePath)) {
  console.error(`Template not found: ${templatePath}`);
  process.exit(2);
}

let raw = fs.readFileSync(templatePath, 'utf8');

// Replace tokens. Add as many replacements as you need.
const replacements = {
  'CONF': process.env.CONF,
};

// Validate required env vars (optional)
const missing = Object.keys(replacements).filter(k => replacements[k] === undefined);
if (missing.length) {
  console.warn(`Warning: the following env vars are not set and will be replaced with empty string: ${missing.join(', ')}`);
}

Object.entries(replacements).forEach(([key, val]) => {
  const token = `\$\{${key}\}`;
  const safeVal = (val === undefined || val === null) ? '' : String(val);
  raw = raw.split(token).join(safeVal);
});

fs.writeFileSync(outPath, raw, 'utf8');
console.log(`✅ Wrote ${outPath} (replaced ${Object.keys(replacements).length} tokens)`);
