const repng = require("./repng-custom");
const format = require("date-fns/format");
const fs = require("fs");
const Component = require("./Component");
const HashiButton = require("./HashiButton");
const HashiButton_Props = {
  title: "Custom Button Text",
  classes: "hovered"
};

const HashiDocsSitemap = require("./HashiDocsSitemap");
const HashiDocsSitemap_Props = require("./HashiDocsSitemap/props.js");

const viewport = { width: 300, height: 60 };

const options = {
  width: viewport.width,
  height: viewport.height,
  viewport: viewport,
  cssLibrary: "./src/HashiButton/style.css",
  props: HashiButton_Props
};

const result = repng(HashiButton, options);

result.then(streams => {
  const filename = format(new Date(), "YYYY-MM-DD[_Render-at_]hh-mm-ss");
  const output = fs.createWriteStream("./output/" + filename + ".png");
  streams.pipe(output);
  console.log("✅ Rendered component to " + filename + ".");
});
