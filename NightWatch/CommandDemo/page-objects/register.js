var loginCommands = {
	validateForm: function() {
		return this.waitForElementVisible('body', 1000)
			.verify.visible('@username')
			.verify.visible('@password')
			.verify.visible('@email')
			.verify.visible('@regbutton')
			.verify.value('@regbutton', 'Register')
			.verify.elementPresent('@regMsg')
	},
	fillInForm: function(username, password, email) {
		return this.waitForElementVisible('body', 1000)
			.setValue('@username', username)
			.setValue('@password', password)
			.setValue('@email', email)
	},
	register: function() {
		return this.verify.value('@regbutton', 'Register')
			.click('@regbutton')
	},
	validateError: function(errorMessage) {
		return this.verify.visible('@regMsg')
			.verify.containsText('@regMsg', 'h3')
			.verify.valueContains('@username', '')
			.verify.valueContains('@password', '')
			.verify.valueContains('@email','')
	}
};


module.exports = {
	commands: [loginCommands],
	url: function() { 
		return this.api.launchUrl; 
	},
	sections: {
        regcheck : {
    selector: "#registerfrm",
    elements: {
        username: {
            selector: 'input[name=user_name]'
        },
        password: {
            selector: 'input[name=password]'
        },
        email: {
            selector: 'input[name=email]'
		},
		regbutton:{
			selector: 'input[type=submit]'
		},
		regMsg:{
			selector: 'h3'
		}
       
    }

}    

}
};