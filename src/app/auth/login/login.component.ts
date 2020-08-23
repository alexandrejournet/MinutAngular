import { SnackbarService } from '../../services/snackbar-service.service';
import { Component, OnInit, Input, NgZone, Injector } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../../shared/models/user.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router,
              private authService: AuthService,
              public injector: Injector,
              private zone: NgZone) { }

  @Input() username: string;
  @Input() password: string;
  user: User;

  public snackBar: SnackbarService;

  ngOnInit() {
    this.user = new User();
    this.snackBar = this.injector.get(SnackbarService);
  }

  login(): void {

    if (this.username === 'admin' && this.password === 'admin'){

        this.user.userName = this.username;
        this.user.password = this.password;

        this.authService.login(this.user);

        this.router.navigate(['home']);

    } else {
      this.snackBar.error('Votre identifiant ou mot de passe est erroné');
    }

  }
  }
