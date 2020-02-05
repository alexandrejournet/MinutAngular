import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobal {
  static isLogged: boolean = false;

  isLogged() {
    return this.isLogged;
  }
}
