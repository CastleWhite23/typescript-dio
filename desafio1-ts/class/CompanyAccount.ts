import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
      if(this.validateCompanyStatus()){
          this.deposit(loanValue);
      }
  }

  private validateCompanyStatus = (): boolean => {
    if (this.getStatus) {
      return this.getStatus();
    }

    throw new Error('Conta inválida')
  }
}
