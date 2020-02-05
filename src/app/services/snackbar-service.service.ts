import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    public snackbar: MatSnackBar,
    private zone: NgZone,
  ) { }

  show(message:string){
    const config = new MatSnackBarConfig();
    config.panelClass = ['green'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    this.zone.run(() => {
      this.snackbar.open(message, 'x', config);
    });
  }

  error(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['red'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    this.zone.run(() => {
      this.snackbar.open(message, 'x', config);
    });
  }

}
