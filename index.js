var ursa = require('ursa-purejs');
var net = require('net');

module.exports = {
    send: sendData
};

function sendData(settings, callback){
    settings.key = settings.key.replace(/ /g, '+');
    settings.key = wordwrap(settings.key, 65, true);
    var timestampdata = new Date().getTime();
    if(settings.data.timestamp)
        timestampdata = new Date(settings.data.timestamp);
    var pubKey = new Buffer('-----BEGIN PUBLIC KEY-----\n' + settings.key + '\n-----END PUBLIC KEY-----\n');

    var build = 'VOTE\n' + settings.data.site + '\n'+ settings.data.user + '\n' + settings.data.addr + '\n'+timestampdata+'\n';
    var buf = new Buffer(build, 'binary');

    key = ursa.createPublicKey(pubKey);
    var data = key.encrypt(build, 'binary', 'binary', ursa.RSA_PKCS1_PADDING);

	var called = false;
	var callbackWrapper = function(e){
		if (!called){
			called = true;
			callback(e);
		}
	};

    var connection = net.createConnection({
		host: settings.host,
		port: settings.port
	}, function(){
		connection.write(data, 'binary', function(){
			connection.end();
			callbackWrapper(null);
		});
	});
	connection.setTimeout(settings.timeout || 2000, function(){
		connection.end();
		return callbackWrapper(new Error("Socket timeout"));
	});
	connection.once('error', function(e){
		return callbackWrapper(e);
	});
}

function wordwrap(str, maxWidth) {
    var newLineStr = "\n"; done = false; res = '';
    do {
        found = false;

        if (!found) {
            res += [str.slice(0, maxWidth), newLineStr].join('');
            str = str.slice(maxWidth);
        }

        if (str.length < maxWidth){
        	res += str;
            done = true;
        }

    } while (!done);

    return res;
}
