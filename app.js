'use strict';

const Homey = require('homey');

class sshClient extends Homey.App {
	
	onInit() {
		this.log("SSH Client is running");
	}
}

module.exports = sshClient;
