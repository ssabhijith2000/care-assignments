import EditorState from "./EditorState.js";
class StateHistory {
    constructor() {
        this._states = [];
    }
    push(state) {
        this._states.push(state);
    }
    pop() {
        let lastState = this._states.pop();
        return lastState !== null && lastState !== void 0 ? lastState : new EditorState("");
    }
}
export default StateHistory;
//# sourceMappingURL=StateHistory.js.map