import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logs: Array<string> = [];
  level: number = 2;

  debug(message: string) {
    this.logs.push(message);
    if(this.level == 2) console.log(message);
  }

  error( message: string){
    this.logs.push(message);
    if(this.level >= 0) console.log(message);
  }
  
  info( message: string) {
    this.logs.push(message);
    if(this.level >=1) console.log(message);
  }
}
