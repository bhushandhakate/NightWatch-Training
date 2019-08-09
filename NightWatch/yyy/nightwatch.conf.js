const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const edgedriver = require("edgedriver");

module.exports = {
  "src_folders": [
    "tests"// Where the tests are located
  ],
  "output_folder": "./output/", // reports from nightwatch
  "selenium": { // selenium config settings
    "start_process": true, // tells nightwatch to manage the selenium process
    "server_path": seleniumServer.path, // path to selenium
    "log_path" : "./output/",
    "silent": true,
    "skip_testcases_on_fail": false,
    "host": "127.0.0.1", // host for selenium
    "port": 4444, // port for selenium
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path, // pass chromedriver path,
      "webdriver.firefox.driver" : geckodriver.path, // pass chromedriver path,
      "webdriver.gecko.driver" : edgedriver.path // pass chromedriver path
    }
  },
  
  "test_settings": {
  "default":{ // default settings (you can override with custom settings)
      "screenshots": {
        "enabled": true, // enables screenshots
        "path": "output/" // output folder for screenshots
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      //"exclude": ["./*-go.js"],
      //"filter": ["./*.js"],
      
      "desiredCapabilities": {
        "browserName": "chrome", //use Chrome as the default browser
       
        "chromeOptions" : {
        "w3c":false,
        "args" : [ ] // pass custom CLI args to Chrome
       }
      }
    },
    "firefox":{
      "desiredCapabilities":{
        "browserName" : "firefox"
      }
    },
    "edge":{
      "desiredCapabilities":{
        "browserName" : "MicrosoftEdge"
      }
    }
    

  }
}