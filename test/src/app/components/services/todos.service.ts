import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class TodosService {
  private apiUrl = apiUrl;

  constructor(private readonly httpService: HttpClient) {}

  getTodosList(): Observable<any> {
    return this.httpService.get(this.apiUrl);
  }
}
