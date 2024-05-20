import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookReview';
}
/*
const searchAPI = "https://openlibrary.org/search.json";

let loginForm = document.querySelector('.login-form-container');
const loginButton = document.querySelector<HTMLButtonElement>('#login-button');

if (typeof document !== 'undefined') {
  const loginButton = document.querySelector<HTMLButtonElement>('#login-button');

  if (loginButton) {
      loginButton.onclick = () => {
          // Your onclick handler logic here
          loginForm?.classList.toggle('active');
      };
  } else {
      console.error("Login button not found");
  }
} else {
  console.warn("Skipping client-side code in SSR context");
}*/
