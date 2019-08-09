module.exports = {
  "Retrieve API (GET)": function (client) {
        var apiUrl = 'https://dog.ceo/api/breeds/list/all';
    client.apiGet(apiUrl, function (response) {
      console.log(response.body);
      var data = JSON.parse(response.body);
      var exp = data.message.bulldog;
      console.log('---->'+data.message.bulldog);

      var length = data.message.bulldog.length;
      console.log("Length of data is : " + length);

      client.assert.equal(3,length);

      var res = new Array(3);
      res[0] = 'boston';
      res[1] = 'english';
      res[2] = 'french';

      for(var i=0;i<3;i++)
      {
        client.assert.notequals((res[i],exp[i]))
      }

      client.assert.equal(response.statusCode, 200, "200 OK");
       
      client.end();
    });

  }

};
