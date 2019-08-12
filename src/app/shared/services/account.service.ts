import { Account } from './../models/account';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

const API_URL = environment.apiUrl;
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsObservable$ :Observable<Array<Account>>;

constructor(private http: HttpClient) { }

get accounts() {
  if(!this.accountsObservable$) {
    this.accountsObservable$ = this.getAccounts().pipe(shareReplay(CACHE_SIZE));
  }
  return this.accountsObservable$
}
private getAccounts():Observable<Account[]>{
  return this.http.get<Account[]>(`${API_URL}accounts`);
}

}
