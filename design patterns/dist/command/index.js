import AddCustomerCommand from "./AddCustomerCommand";
import Button from "./Button";
import CustomerService from "./CustomerService.js";
let service = new CustomerService();
let command = new AddCustomerCommand(service);
let button = new Button(command);
button.click();
//# sourceMappingURL=index.js.map