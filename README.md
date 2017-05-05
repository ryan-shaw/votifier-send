# votifier-send

```javascript
npm install votifier-send
```

# Usage
To send votifier data:

```javascript
var votifier = require('votifier-send');

var settings = {
	key: '... Your RSA pub key for the server',
	host: 'localhost',
	port: 8192,
	data: {
		user: '<players username>',
		site: '<voting site name>',
		addr: '<ip address of player>',
		timestamp: new Date().getTime()
	}
}

votifer.send(settings, callback(err){
	if(err) console.log(err);
	// If no err success
})
```
