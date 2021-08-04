const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/cucumber-json/",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "91",
},
device: "Local test machine",
platform: {
name: "Windows/MAC",
version: "10+",
},
},
});