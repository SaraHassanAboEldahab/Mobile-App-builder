const fs = require("fs");
const file = "./app.json";
require("dotenv").config();

fs.readFile(file, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data
    .replace(/Arab Hardware/g, process.env.appName)
    .replace(/arab-hardware-app/g, process.env.bundleIdentifier)
    .replace(/Arabhardware/g, process.env.bundleIdentifier)
    .replace(/.\/assets\/icon.png/g, process.env.icon)
    .replace(/.\/assets\/plash.png/g, process.env.plash)
    .replace(/.\/assets\/adaptive-icon.png/g, process.env.adaptiveIcon);

  console.log("\n".repeat(5));
  console.log("************ result **************");
  console.log(JSON.stringify(result, null, 4));
  fs.writeFile(file, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
