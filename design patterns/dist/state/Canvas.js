class Canvas {
    get currentTool() {
        return this._currentTool;
    }
    set currentTool(value) {
        this._currentTool = value;
    }
    mouseDown() {
        var _a;
        (_a = this._currentTool) === null || _a === void 0 ? void 0 : _a.mouseDown();
    }
    mouseUp() {
        var _a;
        (_a = this._currentTool) === null || _a === void 0 ? void 0 : _a.mouseUp();
    }
}
export default Canvas;
//# sourceMappingURL=Canvas.js.map