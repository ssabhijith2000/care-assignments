class CommandHistory {
    constructor() {
        this._commands = [];
    }
    push(command) {
        this._commands.push(command);
    }
    pop() {
        return this._commands.pop();
    }
}
export default CommandHistory;
//# sourceMappingURL=CommandHistory.js.map