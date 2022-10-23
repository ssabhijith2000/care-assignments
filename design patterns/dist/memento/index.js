import Editor from "./Editor.js";
import StateHistory from "./StateHistory.js";
let editor = new Editor();
let history = new StateHistory();
editor.setContent = "a";
history.push(editor.createState());
editor.setContent = "b";
history.push(editor.createState());
editor.setContent = "c";
history.push(editor.createState());
editor.restore(history.pop());
console.log(editor.content);
//# sourceMappingURL=index.js.map