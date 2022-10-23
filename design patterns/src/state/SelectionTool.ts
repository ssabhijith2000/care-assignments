import Tool from "./Tool.js";

class SelectionTool implements Tool {
    mouseDown(): void {
        console.log("Selecteed selector icon");
    }

    mouseUp(): void {
        console.log("Draw dashed rectangular box");
    }
}

export default SelectionTool