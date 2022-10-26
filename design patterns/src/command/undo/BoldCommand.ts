import CommandHistory from "./CommandHistory.js";
import UndoableCommand from "./UndoableCommand.js";
import HtmlDocument from "./HtmlDocument.js";

class BoldCommand implements UndoableCommand {
    private _prevContent?: string;
    private _document: HtmlDocument;
    private _history: CommandHistory;

    constructor(document: HtmlDocument, history: CommandHistory) {
        this._document = document;
        this._history = history;
    }

    unexecute(): void {
        this._document.content = this._prevContent;
    }
    execute(): void {
        this._prevContent = this._document.content;
        this._document.makeBold();
        this._history.push(this);
    }

}

export default BoldCommand
