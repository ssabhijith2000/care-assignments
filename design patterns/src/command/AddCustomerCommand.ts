import Command from "./Command.js";
import CustomerService from "./CustomerService.js";

class AddCustomerCommand implements Command {
    private _service: CustomerService;

    constructor(service: CustomerService) {
        this._service = service;
    }

    execute(): void {
        this._service.addCustomer();
    }
}

export default AddCustomerCommand