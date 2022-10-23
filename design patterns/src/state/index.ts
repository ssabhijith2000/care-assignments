import Canvas from "./Canvas.js";
import EraserTool from "./EraserTool.js";

var canvas = new Canvas()
canvas.currentTool = new EraserTool()
canvas.mouseDown()