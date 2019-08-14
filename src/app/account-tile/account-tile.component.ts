import { Account } from './../shared/models/account';
import { Component, OnInit, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-account-tile',
  templateUrl: './account-tile.component.html',
  styleUrls: ['./account-tile.component.scss']
})
export class AccountTileComponent implements OnInit {
@Input() account: Account;
@Input() editMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  hideUnhide(account: Account, event: MatSlideToggleChange){
    account.visible = event.checked
  }

}
