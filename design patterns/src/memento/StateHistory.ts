import EditorState from "./EditorState";

class StateHistory {
  private _states: EditorState[] = [];

  push(state: EditorState) {
    this._states.push(state);
  }

  pop() : EditorState {
    let lastState = this._states.pop();
    return lastState ?? new EditorState("");
  }
}
export default StateHistory
