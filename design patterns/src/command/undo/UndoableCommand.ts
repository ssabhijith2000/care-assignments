import Command from "../Command.js";

interface UndoableCommand extends Command {
    unexecute(): void;
}

export default UndoableCommand