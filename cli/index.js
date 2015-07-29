#! /usr/bin/env node

var fs = require('fs'),
	path = require('path'),

	convert3to4 = require('../main.js').v4,
	commandName = process.argv[1],
	inputFile = process.argv[2],
	outputFile = process.argv[3],
	input,
	output


if (!inputFile)
	console.log(
		'Usage: ' +
		path.basename(commandName) +
		' <input-file> [output-file]'
	)

else {
	input = fs.readFileSync(
		path.resolve(process.cwd(), process.argv[2])
	)

	output = JSON.stringify(
		convert3to4(JSON.parse(input)),
		null,
		'\t'
	)

	if (outputFile)
		fs.writeFileSync(
			path.resolve(process.cwd(), outputFile),
			output
		)
	else
		console.log(output)
}
