import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'src/app/utils/api';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {
  getConfig(): Observable<any> {
    return this.http.get(Api.FORM_CONFIG_END_POINT);
  }

  constructor(private http: HttpClient) {

   }
}
