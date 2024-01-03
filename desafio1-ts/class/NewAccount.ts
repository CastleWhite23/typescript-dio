import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (depositValue: number): void => {
        this.setBalance(depositValue + 10);
    }
}