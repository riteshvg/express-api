const request = require('request');

const json = {
    "name": "Dinesh Chugtai",
    "email" : "dinesh@helpher.com",
};

request.post({
        uri: 'http://localhost:3002/users',
        body: json,
        json: true,
    }, function (error, response, body){
        console.log(body);
});