var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
	var data = data.toString().trim();
	var dataArr = data.split(' ');
	var cmd = dataArr[0];
	// var now = new Date();
	//process.stdout.write(cmd);

	if (cmd === 'date' || cmd === 'pwd' || cmd === 'ls' || cmd === 'echo') {
		commands[cmd](dataArr.slice(1));
	} else {
		process.stdout.write('You typed: ' + cmd);		
	}
	process.stdout.write('\nprompt > ');
});



