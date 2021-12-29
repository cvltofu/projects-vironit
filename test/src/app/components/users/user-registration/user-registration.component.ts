import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: [UsersService],
})
export class UserRegistrationComponent {
  constructor(private usersService: UsersService) {}

  user: IUser = { email: '', password: '' };

  registration(): void {
    this.usersService.registration(this.user).subscribe(() => {});
  }
}
