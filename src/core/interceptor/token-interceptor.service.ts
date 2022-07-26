import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log(request);

      request = request.clone({
        setHeaders:{
          Authorization:` Bearer ${environment.token}`
        }
      })

    return next.handle(request);
  }


}
