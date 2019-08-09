module.exports = {
	url: function() { 
		return this.api.launchUrl; 
	},
	elements: {
		username: {
			selector:'input[name=user_name]'
		},
		password: {
			selector:'input[name=password]'
		},
		submit: {
			selector: 'input[type=submit]'
		},
		error: {
			selector: '#errormessage'
		}
	}
};