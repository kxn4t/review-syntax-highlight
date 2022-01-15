const vscode = require("vscode");

// //で始まるブロック命令
class BlockCompletionItemProvider {
  provideCompletionItems(document, position, token) {
    // //で始まる行のみ補完
    const linePrefix = document
      .lineAt(position)
      .text.substr(0, position.character);
    if (linePrefix !== "//") {
      return undefined;
    }

    // TODO: もっと追加する
    const completionItems = [
      {
        label: "image",
        detail: "図",
        insertText: "image\n//}",
        kind: vscode.CompletionItemKind.Method,
      },
      {
        label: "image[identifier][caption][scale]",
        detail: "図",
        insertText: new vscode.SnippetString(
          "image[${1:identifier}][${2:caption}][scale=${3}]\n//}"
        ),
        documentation: new vscode.MarkdownString(
          "tabキーで順番に入力可能  \nscaleは紙面（画面）幅に対しての倍率（例：0.5）"
        ),
        kind: vscode.CompletionItemKind.Method,
      },
      {
        label: "blankline",
        detail: "空行",
        kind: vscode.CompletionItemKind.Method,
      },
      {
        label: "comment",
        detail: "コメント",
        insertText: "comment\n//}",
        kind: vscode.CompletionItemKind.Method,
      },
    ];
    let completionList = new vscode.CompletionList(completionItems, false);
    return Promise.resolve(completionList);
  }
}

module.exports = BlockCompletionItemProvider;
