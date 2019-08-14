import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-account-preference-dialog',
  templateUrl: './account-preference-dialog.component.html',
  styleUrls: ['./account-preference-dialog.component.scss']
})
export class AccountPreferenceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AccountPreferenceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
