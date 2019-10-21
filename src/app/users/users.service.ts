import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private baseUrl = '/api/v1/employees';

  constructor(private http: HttpClient) { }

  getUser(email: string): Observable<any> {
   return this.http.get(`${this.baseUrl}/${email}`);
  }

}
