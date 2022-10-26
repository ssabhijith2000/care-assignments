class BoldCommand {
    constructor(document, history) {
        this._document = document;
        this._history = history;
    }
    unexecute() {
        this._document.content = this._prevContent;
    }
    execute() {
        this._prevContent = this._document.content;
        this._document.makeBold();
        this._history.push(this);
    }
}
export default BoldCommand;
//# sourceMappingURL=BoldCommand.js.map