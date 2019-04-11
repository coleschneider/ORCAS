
module.exports = {
  "roots": [
      "<rootDir>/e2e"
  ],
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/test/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/test/fileTransform.js"
  },
  "testRegex": "(.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
  ],
  "preset": "jest-puppeteer"
}