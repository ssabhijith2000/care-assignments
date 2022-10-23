import Task from "./Task.js";

class TransferMoneyTask extends Task {
    protected doExecute(): void {
      console.log("Money transfered")  
    }
    

    
}

export default TransferMoneyTask