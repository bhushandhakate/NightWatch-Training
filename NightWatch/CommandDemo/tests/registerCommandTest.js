
module.exports = {
    'Register Page Initial Render': function(client) {
      var register1 = client.page.register();
      register1.navigate();

      var regSec = register1.section.regcheck;

      //regSec.navigate()
        regSec.validateForm();
      client.end();
    },


  
}  