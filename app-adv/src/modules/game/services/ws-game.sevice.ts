import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WsGameService {
    ws: WebSocket;


    constructor(private http: HttpClient) { }


    connect(): any {
        this.ws = new WebSocket('ws://game.emitter.pl/');
        return this.ws;
    }

    registerUser(username: string): any {
        this.http.post('//game.emitter.pl/register', { username }, { withCredentials: true });
    }
    getUser(): Observable<any> {
        return this.http.get('http://game.emitter.pl/get-user', { withCredentials: true });
    }
}
