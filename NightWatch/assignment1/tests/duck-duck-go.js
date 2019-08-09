module.exports = {
    'Demo test DuckDuckGo search' : function (browser) {
      browser
        .url('https://duckduckgo.com/')
        .waitForElementVisible('body',5000)
        //.waitForElementVisible('#search_form_input')
       // .click('#search_form_input')
       // .keys('nightwatch js')
        //.waitForElementVisible('#search_button', 1000)
        //.click('#search_button')
        //.assert.containsText('#web_content_wrapper', 'Nightwatch.js')
       // .saveScreenshot('./output/search.png')
        .end();
    }
};