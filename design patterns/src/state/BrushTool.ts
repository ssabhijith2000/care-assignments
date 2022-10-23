import Tool from "./Tool.js";

class BrushTool implements Tool {
    mouseDown(): void {
        console.log("Selecteed brush icon");
    }

    mouseUp(): void {
        console.log("Draw a line");
    }
}

export default BrushTool