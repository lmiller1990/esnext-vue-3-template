module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  plugins: [
    ["@vue/babel-plugin-jsx"],
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "fsharp" }],
    ["@babel/plugin-proposal-partial-application"]
  ]
}
