import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

//const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

// peopleAccount.deposit(120)
// peopleAccount.withdraw(90)
// console.log(peopleAccount)


// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit(1200)
// companyAccount.withdraw(1000)
// console.log(companyAccount)

const newAccount: NewAccount = new NewAccount("Pedro", 13550);

newAccount.deposit(100)
console.log(newAccount.getBalance())