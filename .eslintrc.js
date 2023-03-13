module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true,
		"jest": true,
	},
	"plugins": [
		"react",
		"eslint-plugin-react",
	],
	"extends": [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:jsx-a11y/recommended",
		"react-app",
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
	"rules": {
		"react/jsx-uses-react": "error",
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-vars": "error",
		"react/prop-types": "off",
		"linebreak-style": ["warn", "unix"],
		"quotes": ["warn", "double"],
		"semi": ["warn", "always"],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		"import/no-unresolved": ["error", { "ignore": ["^[^.]"] }],
		"import/order": [
			"warn", {
				"groups": ["builtin", "external", "object", "type", "internal", "parent", "sibling", "index",],
				"alphabetize": { "order": "asc", "caseInsensitive": true, },
			},
		]
	},
	"settings": {
		"react": {
			"version": "detect",
		},
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx"]
			}
		}
	}
};
