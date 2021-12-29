import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UsersService],
})
export class UserLoginComponent {
  constructor(private usersService: UsersService) {}

  user: IUser = { email: '', password: '' };

  login(): void {
    this.usersService.login(this.user).subscribe(() => {});
  }
}
