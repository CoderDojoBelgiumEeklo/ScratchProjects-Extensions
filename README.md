# Scratch-Server
http-extension is only supported in scratch 2 offline editor.
Scratch Multiplayer Server in node.js

Thanks to https://github.com/GlennGeenen/Scratch-Server
Started from that and used to define 'cloudserver' (added host in extension!!!)


Start SERVER
============
Edit start.js
Update ip-address for host in start.js
	server.setIp('192.168.1.8');

Download node js
"c:\program files\nodejs\node" start.js

Run bat-file or execute these commands in cmd:
cd "C:\Gebruiker\admin\desktop\PingPong-Server" (or folder with server.js, start.js, extenstion_server.json, package.json)
"c:\program files\nodejs\node" start.js

Scratch project on server: extension
====================================
Edit extenstion < extension_PingPong.json > and update host to server ip-adress:
	"useHTTP":true,
	"host": "192.168.1.2": ip-address server

shift + File > Import experimental HTTP extension
Load the extension_PingPong.json by holding shift and pressing File -> Import experimental HTTP extension.
=> < extension_PingPong.json >

extra blocks from blockspecifications in extension file are available under more blocks.

Scratch project on client : extension 
=====================================
Edit extenstion < Extension_client.json > and update host to server ip-adress:
	"useHTTP":true,
	"host": "192.168.1.2": ip-address server

shift + File > Import experimental HTTP extension
Load the extension.json by holding shift and pressing File -> Import experimental HTTP extension.
=> < Extension_client.json >

Scratch projects for PingPong
=============================

On server with speler1: PingPong_Server.sb2
On client with speler2: PingPong_Client.sb2

These are sample projects in which you can use these cloud variables to implement a pingPong game.
Some initial scripts to move bal, and 'spelers' are available. May be stripped down to use in Coderdojo or may be used as is to learn the concept of cloud (server).

Tips & Tricks
=============
The same idea (to be adapted in JSON files) can be used to set up a chat game, ... or other games.
Details on how to define extension are available in https://wiki.scratch.mit.edu/wiki/File:ExtensionsDoc.HTTP-9-11.pdf

For new extensions update start.js
   server.setupWithExtension('./extension_server.json', function (err) {
   
For updated json files it might be necessary to rebuild the script in scratch to use the correct file and variables.
 