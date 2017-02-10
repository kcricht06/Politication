import React, { Component} from 'react';

var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = '{"bio_id": "A000000", "fields": {"$NAME_FIRST": "John", "$NAME_LAST": "Doe", "$ADDRESS_STREET": "123 Main Street", "$ADDRESS_CITY": "New York", "$ADDRESS_ZIP5": "10112", "$EMAIL": "joe@example.com", "$MESSAGE": "I have concerns about the proposal....", "$NAME_PREFIX": "Grand Moff"}}';

var options = {
    url: 'http://localhost:9292/fill-out-form',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
