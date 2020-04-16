import { Injectable, Inject } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  //constructor(@Inject(LOCAL_STORAGE) private localStorage: any) {}
  constructor() {
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token");
    if ( token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    if (!request.headers.has("Content-Type")) {
      if (!(request.body instanceof FormData)) {
        request = request.clone({
          headers: request.headers.set("Content-Type", "application/json"),
        });
      }
    }
    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
      
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("event--->>>", event);
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : "",
          status: error.status
        };
        console.log(data);
        return throwError(error);
      })
    );
  }
}
