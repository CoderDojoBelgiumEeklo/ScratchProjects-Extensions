# Scratch-Server
http-extension is only supported in scratch 2 offline editor.
Scratch Multiplayer Server in node.js

Thanks to https://github.com/GlennGeenen/Scratch-Server
Started from that and used to define 'cloudserver' (added host in extension!!!)

Before starting
===============
Edit extenstion < extension.json > and update ip-addres	with ip-address of server
Edit start.js > Update ip-address for host in start.js >> server.setIp('192.168.1.8');

Start SERVER
============
Download node js
Execute nodejs on start.js ("c:\program files\nodejs\node" start.js)

In bat-file of from prompt you can change directory and start server 

Scratch projects on 2 laptops: import extension
===============================================
Add the extension.json by holding shift and pressing File, selecting "Import experimental HTTP extension." and selecting the extension.json file.

extra blocks from blockspecifications in extension file are available under more blocks.

Scratch projects for PingPong
=============================
-> Ping Project 
-> Pong Project 

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
