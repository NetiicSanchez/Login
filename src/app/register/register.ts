import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../users/users';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(public userService: Users ) {}

  // Método para manejar el registro
  register() {
   const user= {email: this.email, password: this.password};
   this.userService.register(user).subscribe((data) => {
     console.log(data);
   });
  }

}
