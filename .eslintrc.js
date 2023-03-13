module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true,
		"jest": true,
	},
	"extends": [
		"react-app",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"eslint-plugin-react",
	],
	"rules": {
		"react/jsx-uses-react": "error",
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-vars": "error",
		"react/prop-types": "off",
		"linebreak-style": ["warn", "unix"],
		"quotes": ["warn", "double"],
		"semi": ["warn", "always"],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
	},
	"settings": {
		"react": {
			"version": "detect",
		}
	}
};
