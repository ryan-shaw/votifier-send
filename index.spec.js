var settings = {
	key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzMfEOjjHL7ivOWnEm50B5jTYWKSjA/vl7UC81tLfmWe0g6byETSNA7AZtnL7IDfpNFgu4r8BF7H/Ta6ifshKPOWxcaqvptQMmM4LJODFQZ1f5UdpViA2rwCP4M5qv0TxGAI/xu49R30RHcpKxMxct qTj4OtFsdwTHDdqHfObCCZZTSdbLDBdIq45n/kLashaTyU7foDnj7hg5rDY91ol zNNzc4g8cWI1Fp70g47IVcSqVtTjrZtJaaumaf2XCctwkTCIFvUWXRcCKbFxbOntiYP5R7CoMY/3SEVrTjKhYWfnLjv5m0lBx/Pc0KRxf3o/pWG9LBvPx29ox4AWgABQIDAQAB',
	host: '198.50.219.246',
	port: 8192
};

var votifier = require('./index.js');

describe('votifier', function(){
    it('should send votifier data', function(done){
        votifier.send(settings, function(err){
           if(err) return done(err); 
           done();
        });
    });
});