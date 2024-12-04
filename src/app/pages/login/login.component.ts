import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string;

  constructor(private rota: Router) {}

 login() {
  sessionStorage.setItem('user', this.userName);

  this.rota.navigate(['/home']);

 }
} 
