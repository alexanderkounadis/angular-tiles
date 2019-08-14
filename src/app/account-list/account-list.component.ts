import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { Account } from '../../app/shared/models/account';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AccountPreferenceDialogComponent } from '../account-preference-dialog/account-preference-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  visibleAccounts: Account[] = [];
  allAccounts: Account[] = [];
  loading: boolean = true;

  constructor(private accountService: AccountService, 
              private dialog: MatDialog,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.loadAccounts();
    }, 3000);
  }

  loadAccounts() {
    this.accountService.accounts.subscribe(response => {
      this.loading = false;
      this.spinner.hide();
      this.allAccounts = response;
      this.visibleAccounts = this.allAccounts.filter(acc => acc.visible === true);
    });
  }

  showAccountPreferencesComponent() {
    this.dialog.open(AccountPreferenceDialogComponent, this.getDialogConfigObject());
  }

  getDialogConfigObject(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.height= '400px';
    dialogConfig.data = {allAccounts : this.allAccounts}
    return dialogConfig;
  }
}
