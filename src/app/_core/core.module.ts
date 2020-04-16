import { NgModule,Optional, SkipSelf } from '@angular/core';
import {  HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpApiInterceptor } from './_interceptors/httpapi.interceptor';


import {
  ApiService,
  AuthGuard,
  JwtService,
  UserService
} from './services';
import { CommonModule } from '@angular/common';
import { LogService } from './_utils/log.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  providers: [
    LogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApiInterceptor,
      multi: true
    },
    ApiService,
    AuthGuard,
    JwtService,
    UserService
  ]
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() parentModule: CoreModule){
    if (parentModule) {
      throw new Error("You should import core module only in the root module")
  }
  }

}
