import { AccountService } from './shared/services/account.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountTileComponent } from './account-tile/account-tile.component';

@NgModule({
   declarations: [
      AppComponent,
      AccountListComponent,
      AccountTileComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [
      AccountService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
