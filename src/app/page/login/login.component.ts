import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../../shared/models/user.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router,
              private authService: AuthService,
              private snackBar: MatSnackBar) { }

  @Input() username: string;
  @Input() password: string;
  user: User;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  ngOnInit() {
    this.user = new User();
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;

    this.snackBar.open(message, action, config);
  }

  login(): void {

    if (this.username === 'admin' && this.password === 'admin'){

        this.user.userName = this.username;
        this.user.password = this.password;

        this.authService.login(this.user);

        this.router.navigate(['home']);

    } else {
      this.openSnackBar('Votre identifiant ou mot de passe est erroné', 'Fermer');
    }

  }
  }
