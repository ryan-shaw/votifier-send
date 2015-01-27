var settings = {
	key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm5S/RAbzJ6qBma3KCaUPgkLBMPTBektUlVXxdUUUvuzbsXZ+B7+3TzADL5SMuRERfpe8qJxJxFqAtE/SX6wQlZlRodnb9oQWC7ZSaCMxCmmRf9rRIDQQRVsSS49j+ETR4/CYn4xNONgleMMvppLQfBBEJIC/UDKF8ny5HTmg09MZtLNkqya4H+s33KonwfOHI0VSfyEWpmbnzWDKioyvPXY70oexIlu6n5ma2CIadJ3JuvYjqTgdxEPPx+sT+ahjigZuY0GByrt4YGOndHnlDlE1HZpv6EnqMsD8vQvrEqFWQTSga/14u4ShQrh/pK6F9jA92K5QIXUP4Di3YNnTRQIDAQAB',
	host: 'localhost',
	port: 8192
};
settings.key = settings.key.replace(/ /g, '+');

var votifier = require('./index.js');

describe('votifier', function(){
    it('should send votifier data', function(done){
        votifier.check(settings, function(err){
           if(err) return done(err); 
           done();
        });
    });
});