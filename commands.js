// process.stdout.write('prompt > ');

// process.stdin.on('data', function (data) {
// 	var cmd = data.toString().trim();
// 	var now = new Date();

// 	if (cmd === 'date') {
// 		process.stdout.write(now.toString());
// 	} else if (cmd === 'pwd') {
// 		process.stdout.write(`Current directory: ${process.cwd()}`);
// 	} else {
// 		process.stdout.write('You typed: ' + cmd);		
// 	}
// 	process.stdout.write('\nprompt > ');
// });
module.exports = {

	pwd: function () {
	// if (cmd = 'pwd') {
		process.stdout.write(`Current directory: ${process.cwd()}`);
	// }
	// return (`Current directory: ${process.cwd()}`);
	},

	ls: function () {
		var fs = require('fs');
		fs.readdir('.', function(err, files) {
	  		if (err) throw err;
	  		files.forEach(function(file) {
	    			process.stdout.write(file.toString() + "\n");
	 		 });
	  		// console.log('this is the ls func');
	 		 // process.stdout.write("ls prompt > ");
		});
	},

	date: function () {
		var now = new Date();
		process.stdout.write(now.toString());
	}
};

// pwd.exports = function () {
// 	// if (cmd = 'pwd') {
// 		// process.stdout.write(`Current directory: ${process.cwd()}`);
// 	// }
// 	return (`Current directory: ${process.cwd()}`);
// };