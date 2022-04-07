import * as core from "@actions/core";
import github from "@actions/github";

const nameToGreet = core.getInput("storeLink");
console.log(`Hello ${nameToGreet}!`);
