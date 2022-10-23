import Tool from "./Tool.js"

class Canvas{
    private _currentTool?: Tool | undefined
    public get currentTool(): Tool | undefined {
        return this._currentTool
    }
    public set currentTool(value: Tool | undefined) {
        this._currentTool = value
    }

    mouseDown(){
       this._currentTool?.mouseDown()
    } 
    mouseUp(){
        this._currentTool?.mouseUp()
}
}

export default Canvas