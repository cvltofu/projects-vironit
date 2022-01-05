import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  user: IUser = { email: '', password: '' };

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // Можной зайти в систему
      } else if (params['accessDenied']) {
        // Сперва авторизируйстесь
      }
    });
  }

  ngOnDestroy() {}

  login(): void {
    this.authService.login(this.user);
  }
}
