import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Users } from '../users/users';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // <-- Corrige aquí
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(public userService: Users) {}

  // Método para manejar el inicio de sesión
  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}