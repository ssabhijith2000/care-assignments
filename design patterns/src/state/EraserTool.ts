import Tool from "./Tool.js";

class EraserTool implements Tool {
    mouseDown(): void {
        console.log("Selecteed eraser icon");
    }

    mouseUp(): void {
        console.log("Remove elements");
    }
}

export default EraserTool