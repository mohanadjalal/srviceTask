import { Injectable } from '@angular/core';
import { accountMock } from '../mocks/account.mock';
import { Account, AccountBody } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  accounts: Account[] = [];
  constructor() {}

  getAcounts(): Account[] {
    return this.accounts;
  }
  addAccount(account: Account): void {
    const isExist = this.accounts.find((acc) => account.id === acc.id);
    if (isExist) console.log('this acount is already exists ');
    else {
      this.accounts.push(account);
    }
  }

  editAccount(id: number, body: AccountBody): void {
    //check if the account is exists
    const isExist = this.accounts.find((acc) => id === acc.id);
    if (!isExist) console.log('Account doesnt exists');
    else {
      const index = this.accounts.findIndex((acc) => acc.id === id);
      const updatedAccount: Account = {
        id: isExist.id,
        ...body,
      };
      this.accounts[index] = updatedAccount;
    }
  }
  deleteAccount(account: Account) {
    const index = this.accounts.findIndex((acc) => acc.id === account.id);
    if (index > -1) this.accounts.splice(index, 1);
    else console.log('Account doesnt exists');
  }
}
