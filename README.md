# SSH Client
        
This app will allow you to connect to a remote ssh server.

You can create for every server a device. And give it a logical name.

You can login with you username and password. So you don't have to fill in twice.

In the flow manager you can select the server, and send the command.

## Usefull?

* Create a backup of your server through Homey
* Useful to start a playlist from [Spotify](https://github.com/dronir/SpotifyControl) on your Mac.

## Remarks

* This won't work with certificates. Only username and password is allowed.
* You can't create an connection to the Homey, because SSH access to the Homey is secured by Athom.

## Changelog

### 0.2.0

* Homey 2 compatible version.

### 0.1.4

* Fixed issue to prevent crash of app. Right now the device is set to offline mode.
