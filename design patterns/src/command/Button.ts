import Command from "./Command.js";

class Button {
    private _label?: string | undefined;
    private _command: Command
    
    constructor(command: Command){
        this._command = command
    }
    click(): void {
        this._command.execute()
    }
    public get label(): string | undefined {
        return this._label;
    }
    public set label(value: string | undefined) {
        this._label = value;
    }

}

export default Button

