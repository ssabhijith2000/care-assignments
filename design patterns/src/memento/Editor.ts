import EditorState from "./EditorState.js";

class Editor {
  private _content?: string  ;

  createState(): EditorState{
    return new EditorState(this._content!)
  }

  restore(state : EditorState) {
    this._content = state.content

  }
    public get content(): string {
        return this._content!;
    }
    public set setContent(value: string){
        this._content = value;
    }

}

export default Editor
