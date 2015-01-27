// module dependencies
var cp = require("child_process"),
	fs = require("fs"),
	events = require("events");

function Rsa(privateKey, publicKey) {
	this.privateKey = privateKey || "private.pem";
	this.publicKey = publicKey || "public.pem";
}

Rsa.prototype.decrypt = function(string, cb) {
	var emitter = new events.EventEmitter(),
		shell = cp.spawn(
			"openssl",
			["rsautl", "-decrypt", "-inkey", this.privateKey],
			{ cwd: process.cwd() }
		);
	
	if(typeof cb === "function") emitter.once("success", cb);
	
	shell.stdout.on("data", function(data) {
		emitter.emit("success", data.toString("utf8"));
	});
	shell.stderr.on("data", function(data) {
		emitter.emit("error", data.toString("utf8"));
	});
	shell.stdin.end(string);
	
	return emitter;
};

Rsa.prototype.encrypt = function(string, cb) {
	var emitter = new events.EventEmitter(),
		shell = cp.spawn(
			"openssl",
			["rsautl", "-encrypt", "-inkey", this.privateKey],
			{ cwd: process.cwd() }
		);
	
	if(typeof cb === "function") emitter.once("success", cb);
	
	shell.stdout.on("data", function(data) {
		emitter.emit("success", data.toString("utf8"));
	});
	shell.stderr.on("data", function(data) {
		emitter.emit("error", data.toString("utf8"));
	});
	shell.stdin.end(string);
	
	return emitter;
};

module.exports = Rsa;