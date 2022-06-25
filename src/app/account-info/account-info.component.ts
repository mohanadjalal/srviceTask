import { Component, OnInit } from '@angular/core';
import { Account, AccountBody } from '../models/account.model';
import { AccountServiceService } from '../services/account-service.service';
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  id: number = 0;
  accounts: Account[] = [];
  constructor(private accountService: AccountServiceService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.getAcounts();
  }

  addAccount() {
    const accountToAdd: Account = {
      id: this.id,
      description: 'new discription ',
      clientName: 'mohanad jay',
      legalEntity: 'kur',
    };
    this.id += 1;
    this.accountService.addAccount(accountToAdd);
  }
  deleteAccount(id: number): void {
    const accountToDelete = this.accounts.find((acc) => acc.id === id);
    if (accountToDelete) this.accountService.deleteAccount(accountToDelete);
  }
  editAccount(id: number): void {
    const accountToEdit: AccountBody = {
      description: 'updated description',
      clientName: 'izzra ',
      legalEntity: 'tulkarem',
    };
    this.accountService.editAccount(id, accountToEdit);
  }
}
