# Scratch-Server
http-extension is only supported in scratch 2 offline editor.
Scratch Multiplayer Server in node.js

Thanks to https://github.com/GlennGeenen/Scratch-Server
Started from that and used to define 'cloudserver' (added host in extension!!!)


Start SERVER
============
Edit start.js > Update ip-address for host in start.js >> server.setIp('192.168.1.8');

Download node js
Execute nodejs on start.js ("c:\program files\nodejs\node" start.js)

Run bat-file or execute these commands in cmd:
cd "C:\Gebruiker\admin\desktop\PingPong" (or folder with server.js, start.js, extenstion.json, package.json)
"c:\program files\nodejs\node" start.js

Scratch projects on 2 laptops: import extension
===============================================
Edit extenstion < extension.json > and update host to server ip-adress:
	"useHTTP":true,
	"host": "192.168.1.2": ip-address server

Load the extension.json by holding shift and pressing File 
	-> Import experimental HTTP extension.
=> < extension.json >

extra blocks from blockspecifications in extension file are available under more blocks.

Scratch projects for PingPong
=============================
-> Project for Sebastiaan
-> Project for Francis

These are sample projects in which you can use these cloud variables to implement a pingPong game.
Some initial scripts to move bal, and 'players' are available. May be stripped down to use in Coderdojo or may be used as is to learn the concept of cloud (server).

Tips & Tricks
=============
The same idea (to be adapted in JSON files) can be used to set up a chat game, ... or other games.
Details on how to define extension are available in https://wiki.scratch.mit.edu/wiki/File:ExtensionsDoc.HTTP-9-11.pdf

For new extensions update start.js
   server.setupWithExtension('./extension.json', function (err) {
   
For updated json files it might be necessary to rebuild the script in scratch to use the correct file and variables.
 
When there are problems to connect, ping, ... to other PC, you might have to disable the firewall on the server.
To check the connection, you may use http://ip-address:port/poll(ex htt://192.168.1.2:4440/poll
