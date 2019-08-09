const chrome = {browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true
};

const firefox = {browserName: 'firefox',
  javascriptEnabled: true,
  acceptSslCerts: true,
  marionette: true
};

const browser = (process.env.BROWSER || 'chrome');

module.exports = {
  select() {
    if (browser === 'firefox') {
      return firefox;
   
       }
          return chrome;
  }
};