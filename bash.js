var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
	var cmd = data.toString().trim();
	// var now = new Date();

	if (cmd === 'date' || cmd === 'pwd' || cmd === 'ls') {
		commands[cmd]();
	} else {
		process.stdout.write('You typed: ' + cmd);		
	}
	process.stdout.write('\nprompt > ');
});



