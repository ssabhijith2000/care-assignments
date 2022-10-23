import AuditTrail from "./AuditTrail.js";
class Task {
    constructor() {
        this._auditTrail = new AuditTrail();
    }
    execute() {
        this._auditTrail.record();
        this.doExecute();
    }
}
export default Task;
//# sourceMappingURL=Task.js.map