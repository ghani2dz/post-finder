const fsu = require('fsu');

var ok = "user";

const path = fsu.writeFileUnique("yes{#}.txt", "test1");

console.log(path);