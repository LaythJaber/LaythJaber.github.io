import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  info(msg) {
    console.info(new Date() + ": "+ JSON.stringify(msg));
  }
  error(msg) {
    console.error(new Date() + ": "+ JSON.stringify(msg));
  }
  debug(msg){
    console.debug(new Date() + ": "+ JSON.stringify(msg));
  }
  warn(msg){
    console.warn(new Date() + ": "+ JSON.stringify(msg));
  }
}
