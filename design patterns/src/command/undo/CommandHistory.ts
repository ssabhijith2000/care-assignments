import UndoableCommand from "./UndoableCommand.js";

class CommandHistory {
    _commands: UndoableCommand[] = [];

    push(command: UndoableCommand) {
        this._commands.push(command);
    }

    pop() {
        return this._commands.pop();
    }
}

export default CommandHistory
