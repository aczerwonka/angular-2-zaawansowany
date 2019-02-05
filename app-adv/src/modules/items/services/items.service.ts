import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemsModule } from '../items.module';
import { HttpServiceInterface } from 'src/app/utils/interfaces';
import { Observable } from 'rxjs';
import { Api } from 'src/app/utils/api';
@Injectable()

export class ItemsService implements HttpServiceInterface {
    fetch(params?: any): Observable<any> {
        return this.httpClient.get(Api.ITEMS_END_POINT);
    }
    add(item: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    update(item: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    remove(id: any): Observable<any> {
        throw new Error("Method not implemented.");
    }

    constructor(private httpClient: HttpClient) { }

}
