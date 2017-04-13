(function () {
    'use strict';

    var server = require('./server.js');
    server.setupWithExtension('./extension_server.json', function (err) {
        if (err) {
            console.log(err.message);
        } else {
            server.setIp('192.168.1.8');
            server.start();
        }
    });
})();