module.exports = {

    before: function(){
        console.log("Starting Suite");
    },

    after: function(){
        console.log("Stopping Suite");
    },

    beforeEach: function(){
        console.log("Starting Test Case Execution");
    },

    afterEach: function() {
        console.log("Stopping Test Case Execution");
    },

    
    'TEST': function(client){
        
        var login = client.page.LoginPageWithSection();
        login.navigate();
        login.expect.section('@logininput').to.be.visible;

        var logininputSection = login.section.logininput;
            logininputSection.expect.element('@username').to.be.visible;
            logininputSection.expect.element('@password').to.be.visible;

        client.end();
    }
    
	
};