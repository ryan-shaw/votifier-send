
module.exports = {
    check: sendData
};

function sendData(settings, callback){
    settings.key = settings.key.replace(/ /g, '+');
    settings.key = wordwrap(settings.key, 64);
    var pubKey = new Buffer('-----BEGIN PUBLIC KEY-----\n' + settings.key + '\n-----END PUBLIC KEY-----\n', 'utf8');
    
    var rsa = require('./lib/rsa.js')(pubKey);

    
    var build = 'VOTE\nmcerverstatus\nryanshawty\n203.0.113.1\n'+new Date().getTime()+'\n';
    
    callback('Not implemented');
}