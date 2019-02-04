import { Observable } from 'rxjs';

export interface HttpServiceInterface {
    fetch(params?: any): Observable<any>;
    add(item): Observable<any>;
    update(item): Observable<any>;
    remove(id): Observable<any>;
}

export interface HttpResponseModel {
    ok: boolean;
    data: any[];
    total: number;
    info: string;
    error: string;
}
export interface AuthServiceInterface {
    logged(): void;
    logIn(formData: { username, password }): void;
    logOut(): void;
}

export interface AuthDataModel {
    username: string;
    password: string;
}
export interface Message {
    username?: string,
    clientX: number,
    clientY: number
}
export interface ItemModel {
    id?: number;
    category: string;
    imgSrc: string;
    price: number;
    title: string;
}

export interface ItemsStateModel {
    readonly data: ItemModel[];
    readonly loading: boolean;
}

export interface CardItemModel extends ItemModel {
    count: number;
}

export interface CardState {
    readonly data: CardItemModel[];
    readonly loading: boolean;
}
