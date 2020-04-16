import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): string {
    return window.localStorage['jwtToken'];
  }

  // tslint:disable-next-line:typedef
  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  // tslint:disable-next-line:typedef
  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
