module.exports = {
    'Login Test':''+function(client) 
    {
      client
      .url('http://localhost:8888/login')
      .waitForElementVisible("input[name='user_name']",1000)
      .setValue('input[name=user_name]','')
      .click('input[type=submit]')
      .assert.containsText('#errormessage','User name or password is not correct.')
      .end();
      //.assert.elementPresent('input[name=userName]:focus')
        
      //.click("input[name='userName']")
      //.assert.elementPresent("input[name=userName]:focus")
      //.keys(client.Keys.ENTER)
      //.end();
    },

    'Verify all elements present':''+function(client)
    {
      client
      .url('http://localhost:8888/login')
      //.assert.elementPresent("h3=Input user name and password to login.")
      .assert.elementPresent("input[name='user_name']")
      .assert.elementPresent("input[name='password']")
      .assert.elementPresent("input[type='submit']")
      .end();

    },

    'Verify tab functionality':''+function(client)
    {
      client
      .url('http://localhost:8888/login')
      .waitForElementVisible("input[name='user_name']",1000)
      .click("input[name='user_name']")
      .assert.elementPresent("input[name='user_name']:focus")
      .keys(keys.TA)

    },

    'Verify REGISTER functionality':''+ function(client)
    {
      client
      .url('http://localhost:8888/register')
      .waitForElementVisible("input[name='user_name']",1000)
      .setValue("input[name='user_name']",'bhushan')
      .setValue("input[name='password']",'bhushan123')
      .setValue("input[name='email']",'bh@gmail.com')
      .click("input[type='submit']")
      //.assert.elementPresent("tr td.eq(2)",'User info registration success.')
      .waitForElementNotPresent("input[name='user_name']")
      .end();
    },

    'Verify LOGIN functionality':''+ function(client)
    {
      client
      .url('http://localhost:8888/login')
      .setValue("input[name='user_name']",'jerry')
      .setValue("input[name='password']",'dev2qa.com')
      .click("input[type='submit']")
      .assert.containsText('font','User name and password is correct, login success.')
      .end();
    },

    'Verify LOGIN WITH INVALID CREDENTIALS':''+ function(client)
    {
      client
      .url('http://localhost:8888/login')
      .setValue("input[name='user_name']",'jerry213')
      .setValue("input[name='password']",'dev2qa.com')
      .click("input[type='submit']")
      .assert.containsText('#errormessage','User name or password is not correct.')
      .end();
    },


    'VERIFY LOGIN WITH BLANK USERNAME AND PASSWORD': function(client)
    {
      client
      .url('http://localhost:8888/login')
      .setValue("input[name='user_name']",' ')
      .setValue("input[name='password']",' ')
      .click("input[type='submit']")
      .assert.containsText('#errormessage','User name or password is not correct.')
      .end();
    }

  

    
}