import AuditTrail from "./AuditTrail.js";

abstract class Task {
    private _auditTrail: AuditTrail;

    constructor() {
        this._auditTrail = new AuditTrail()
    }
    execute(): void {
        this._auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute(): void;
}

export default Task