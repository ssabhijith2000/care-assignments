import Editor from "./memento/Editor"
import StateHistory from "./memento/StateHistory"

let editor = new Editor()
let history = new StateHistory()

editor.setContent = "a"
history.push(editor.createState())

editor.setContent = "b"
history.push(editor.createState())

editor.setContent = "c"
history.push(editor.createState())

editor.restore(history.pop())

console.log(editor.content)