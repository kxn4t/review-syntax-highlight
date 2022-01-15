const vscode = require("vscode");
const InlineCompletionItemProvider = require("./completions/inline");
const BlockCompletionItemProvider = require("./completions/block");

const documentSelector = { scheme: "file", language: "review" };

function activate(context) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      documentSelector,
      new InlineCompletionItemProvider(),
      "@"
    )
  );
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      documentSelector,
      new BlockCompletionItemProvider(),
      "/"
    )
  );
}

function deactivate() {
  return undefined;
}

module.exports = { activate, deactivate };
