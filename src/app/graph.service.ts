import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class GraphService {
    private graphUrl = 'https://graph.windows.net/';

    constructor(private http: AuthHttp) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

      getMe(): Promise<User> { 
        return this.http.get(this.graphUrl+"o365e3w15.onmicrosoft.com/me?api-version=1.6")
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }
}

export class User{
    displayName:string;
}