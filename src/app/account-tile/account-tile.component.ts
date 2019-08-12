import { Account } from './../shared/models/account';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-tile',
  templateUrl: './account-tile.component.html',
  styleUrls: ['./account-tile.component.scss']
})
export class AccountTileComponent implements OnInit {
@Input() account: Account;
  constructor() { }

  ngOnInit() {
  }

}
