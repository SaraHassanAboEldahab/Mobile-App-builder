const core = require("@actions/core");
const github = require("@actions/github");

const nameToGreet = core.getInput("storeLink");
console.log(`Hello ${nameToGreet}!`);
