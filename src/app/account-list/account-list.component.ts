import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { Account } from '../../app/shared/models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.accounts.subscribe(response => {
      this.accounts = response
    });
  }

}
