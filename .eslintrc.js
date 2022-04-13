module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		browser: true,
		node: true,
		es6: true,
	},

	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},

	plugins: ['prettier'],
	extends: [
		'next/core-web-vitals',
		'airbnb',
		'prettier',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'plugin:sonarjs/recommended',
		'plugin:security/recommended',
		'plugin:react-hooks/recommended',
	],

	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'no-nested-ternary': 'off',
		'import/prefer-default-export': 'off',
	},
};
