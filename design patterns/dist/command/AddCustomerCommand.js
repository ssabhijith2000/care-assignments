class AddCustomerCommand {
    constructor(service) {
        this._service = service;
    }
    execute() {
        this._service.addCustomer();
    }
}
export default AddCustomerCommand;
//# sourceMappingURL=AddCustomerCommand.js.map