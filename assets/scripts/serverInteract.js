/*
 * Broken, like my heart.
*/

function sendDetails(username, token, location="ws://localhost:8765") {
	console.log("a");
	var ws = new WebSocket(location);
	console.log("b");
	ws.send(JSON.stringify({"username": username, "token": token}));
	console.log("c");
}