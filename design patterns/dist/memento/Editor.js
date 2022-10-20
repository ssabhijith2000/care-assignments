import EditorState from "./EditorState";
class Editor {
    createState() {
        return new EditorState(this._content);
    }
    restore(state) {
        this._content = state.content;
    }
    get content() {
        return this._content;
    }
    set setContent(value) {
        this._content = value;
    }
}
export default Editor;
//# sourceMappingURL=Editor.js.map