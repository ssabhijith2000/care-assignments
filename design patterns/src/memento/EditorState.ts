class EditorState {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }


  public get content(): string {
    return this._content;
  }

}

export default EditorState