import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {  } from "@angular/common/http";

const TOKEN_HEADER_KEY = `Authorization `; // for Spring Boot back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = window.sessionStorage.getItem("auth-token");


    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    console.log(next.handle(authReq) + " Token interceptor");
    return next.handle(authReq);
  }
}


export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useclass: AuthInterceptor, multi: true }
];
