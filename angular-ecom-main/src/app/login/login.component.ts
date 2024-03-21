import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === '123456') {
      // Redirect to the add product page if authenticated
      this.router.navigate(['/seller-add-product']);
    } else {
      // Handle incorrect credentials (e.g., show error message)
      alert('Invalid username or password');
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    if (this.showPassword) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }

}
