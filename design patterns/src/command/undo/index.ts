import BoldCommand from "./BoldCommand.js";
import CommandHistory from "./CommandHistory.js";
import HtmlDocument from "./HtmlDocument.js";

let history = new CommandHistory()
let document = new HtmlDocument()
document.content = "Hello World"
var boldCommand = new BoldCommand(document, history)
boldCommand.execute()
console.log(document.content)
boldCommand.unexecute()
console.log(document.content)