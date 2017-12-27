Ping Pong as connected multiplayer scratch projects using an extension.
===========================================================

 Scratch projects on 2 laptops / PCs which are connected - over WIFI or over Ethernet cable - can read and set variables. Using these variables in a scratch project a game in multiplayer mode can be defined. One of the 2 laptops is running as server to manage shared variables (~cloud variables in scratch online). On both laptops a scratch project is defined. These projects use the cloud variables for a ping pong game. This concept can bes used for other game ideas. 

Here you can find the scratch projects, stratch extension, ... and information on how to use this concept for a Ping pong game.

============

A http-extension is only supported in scratch 2 offline editor. Via cloud variables in scratch online you can set up a similar multiplayer game, but you need a performant internet connection.


This project uses the Scratch Multiplayer Server in node.js that is elaborated in  https://github.com/GlennGeenen/Scratch-Server.
This project used this Scratch-server to implement a 'cloudserver' (I added host in the extension file to enable connecting to other computers!!!)


Start SERVER
============
To start the server node js is needed, it is available for download at https://nodejs.org/en/download/. To configure the laptop / PC as server you need to update the ip-addres in the start.js file to the ip-address of the 'server'
 
To start the server run the bat-file or execute these commands in cmd:

	cd "C:\Gebruiker\admin\desktop\PingPong-Server" (or folder)
	"c:\program files\nodejs\node" start.js

The server is running in cmd:
<br>
C:\Coolest PingPong>"c:\program files\nodejs\node" start.js
Server running at http://192.168.1.5/4440

Extension to use the cloud variables server and on client laptop: extension
========================================================================
To enable scratch to use the server from both laptops, you need to load the extension (extension.json) in scratch. Before you load the extension you need to set the ip-address of the server laptop.

Edit extension < extension_PingPong.json > and update host to server ip-adress:
	"useHTTP":true,
	"host": "192.168.1.5": ip-address server

shift + File > Import experimental HTTP extension
Load the extension_PingPong.json by holding shift and pressing File -> Import experimental HTTP extension.
=> < extension.json >

Extra blocks from blockspecifications in extension file are available under more blocks.
With these blocks scratch can define and read the cloud variables needed for the ping pong game.


Scratch projects for PingPong
=============================
On one of the laptops open Ping.sb2, on the other open Pong.sb2. They enable and control one of the two buildings (bars) and read and set the other buildings position. One of the projects controls the ball (mario). The other project reads the position from the server and sets the position of the ball in the game.

These are sample projects in which you can use these cloud variables to implement a pingPong game.
Some initial scripts to move bal, and 'spelers' are available. May be stripped down to use in Coderdojo or may be used as is to learn the concept of cloud (server).

Tips & Tricks
=============
The same idea (to be elaborated in the extension JSON files) can be used to set up a chat game, ... or other games.
Details on how to define extensions are available at https://wiki.scratch.mit.edu/wiki/File:ExtensionsDoc.HTTP-9-11.pdf

For new extensions update start.js
   server.setupWithExtension('./extension.json', function (err) {
   
For updated extension json files in a scratch project it might be required to rebuild the script in scratch to use the correct file and variables.

When there are problems to connect, ping, ... to other PC, you might have to disable the firewall on the server.
To check the connection, you may use http://ip-address:port/poll
(ex htt://192.168.1.5:4440/poll)
 