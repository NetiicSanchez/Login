import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importa HttpClient para realizar peticiones HTTP
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Users {

  constructor( private http: HttpClient) { }

   login(user: any): Observable<any> {
    // Simula un login exitoso si el email y password no están vacíos
    if (user.email && user.password) {
      return of({ token: 'fake-jwt-token', user });
    } else {
      // Simula un error
      return of({ error: 'Email o password vacío' });
    }
  }

  register(user: any): Observable<any> {
  // Simula un registro exitoso si el email y password no están vacíos
  if (user.email && user.password) {
    return of({ message: 'Registro exitoso', user });
  } else {
    // Simula un error
    return of({ error: 'Email o password vacío' });
  }
}
}
