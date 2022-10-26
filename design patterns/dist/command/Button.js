class Button {
    constructor(command) {
        this._command = command;
    }
    click() {
        this._command.execute();
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
}
export default Button;
//# sourceMappingURL=Button.js.map