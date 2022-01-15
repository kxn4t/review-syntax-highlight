const vscode = require("vscode");

// @で始まるインライン命令
class InlineCompletionItemProvider {
  provideCompletionItems(document, position, token) {
    // TODO: もっと追加する
    const completionItems = [
      {
        label: "<code>",
        detail: "本文中でのソースコード引用",
        kind: vscode.CompletionItemKind.Method,
      },
      {
        label: "<href>",
        detail: "ハイパーリンクを貼る (PDFやepubで有効)",
        insertText: new vscode.SnippetString("<href>{${1:URL}, ${2:文字}}"),
        documentation: new vscode.MarkdownString("tabキーで順番に入力可能"),
        kind: vscode.CompletionItemKind.Method,
      },
    ];
    let completionList = new vscode.CompletionList(completionItems, false);
    return Promise.resolve(completionList);
  }
}

module.exports = InlineCompletionItemProvider;
