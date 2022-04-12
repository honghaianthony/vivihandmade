module.exports = {
	// This will lint and format TypeScript and                                             //JavaScript files
	'**/**/*.(js|jsx)': (filenames) => [
		// `yarn eslint --fix ${filenames.join(' ')}`,
		`yarn prettier --write ${filenames.join(' ')}`,
	],

	// this will Format MarkDown and JSON
	'**/*.(md|json)': (filenames) =>
		`yarn prettier --write ${filenames.join(' ')}`,
};
