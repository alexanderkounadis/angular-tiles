import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { Account } from '../../app/shared/models/account';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AccountPreferenceDialogComponent } from '../account-preference-dialog/account-preference-dialog.component';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  constructor(private accountService: AccountService, 
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.accounts.subscribe(response => {
      this.accounts = response
    });
  }

  showAccountPreferencesComponent() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '350px';
    dialogConfig.height= '500px';
    this.dialog.open(AccountPreferenceDialogComponent, dialogConfig);
  }

}
