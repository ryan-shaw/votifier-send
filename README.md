# votifier-send

```javascript
npm install votifier-send
```

# Usage
To send votifier data:

```javascript
var votifier = require('votifier');

var settings = {
	key: '... Your RSA pub key for the server',
	host: 'localhost',
	port: 8192,
	data: {
		user: 'ryanshawty',
		site: 'mcserverstatus',
		addr: '192.168.1.1'
	}
}

votifer.send(settings, callback(err){
	if(err) console.log(err);
	// If no err success
})