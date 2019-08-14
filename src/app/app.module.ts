import { AccountService } from './shared/services/account.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountTileComponent } from './account-tile/account-tile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatDialogModule} from "@angular/material";
import { NgxSpinnerModule } from "ngx-spinner";
import { AccountPreferenceDialogComponent } from './account-preference-dialog/account-preference-dialog.component';
import { MatSlideToggleChange,MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
   declarations: [
      AppComponent,
      AccountListComponent,
      AccountTileComponent,
      AccountPreferenceDialogComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AngularFontAwesomeModule,
      MatDialogModule,
      BrowserAnimationsModule,
      NgxSpinnerModule,
      MatSlideToggleModule
   ],
   providers: [
      AccountService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      AccountPreferenceDialogComponent
   ]
})
export class AppModule { }
