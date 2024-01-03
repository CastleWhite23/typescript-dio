export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      this.balance += depositValue;
    }
  }

  withdraw = (withdrawValue: number): void => {
    if(this.validateStatus() && this.balance >= withdrawValue){
        this.balance -= withdrawValue;
    }else{
      console.log("Saldo insuficiente!")
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balanceValue: number): void => {
    this.balance += balanceValue;
  }

  getStatus = (): boolean =>{
    return this.status;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
