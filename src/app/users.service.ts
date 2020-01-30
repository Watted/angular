import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUsers} from './users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>('/assets/data/users.json');
  }
}
