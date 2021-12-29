import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrlRegistration, apiUrlLogin } from 'src/environments/environment';
import { IUser } from '../users/interfaces/user.interface';

@Injectable()
export class UsersService {
  private apiUrlRegistration = apiUrlRegistration;
  private apiUrlLogin = apiUrlLogin;

  constructor(private readonly httpService: HttpClient) {}

  registration(user: IUser): Observable<any> {
    return this.httpService.post(this.apiUrlRegistration, user);
  }

  login(user: IUser): Observable<any> {
    return this.httpService.post(this.apiUrlLogin, user);
  }
}
