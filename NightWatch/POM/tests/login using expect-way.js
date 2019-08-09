
module.exports = {
'LOGIN USING EXPECT API' : function(client){
    
    var login = client.page.loginPage();
    login.navigate();
    client.pause(1000);
    client.expect.element('[name=user_name]').to.be.present.before(1000);
    client.expect.element('[name=user_name]').to.be.an('input');
    client.expect.element('[name=user_name]').to.be.visible;
    client.expect.element('[name=password]').to.be.an('input');
    client.expect.element('[type=submit]').to.be.an('input');
}




}