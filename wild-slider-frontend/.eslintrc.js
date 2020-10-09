module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "extends": [
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // add prettier rules to eslint
    "plugin:prettier/recommended" 
  ],
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "react/jsx-one-expression-per": "off",
    "react/require-default-props": "off",
    "no-underscore-dangle": "off",
    "global-require": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "import/no-unresolved": "off",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "no-console": [
      2,
      {
        "allow": ["warn", "error"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "always",
        "printWidth": 100,
        "semi": true
      }
    ]
  }
}
