import { Component } from '@angular/core';

@Component({
  template: `<div class="page animsition vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out" style="animation-duration: 800ms; opacity: 1;">
    <div class="page-content vertical-align-middle">
      <header>
        <h1 class="animation-slide-top">404</h1>
        <p>Page Not Found !</p>
      </header>
      <p class="error-advise">YOU SEEM TO BE TRYING TO FIND YOUR WAY HOME</p>
      <a class="btn btn-sm btn-success" style="background-color: seagreen" routerLink="/home">GO TO HOME PAGE</a>

      
    </div>
  </div>`
})
export class PageNotFoundComponent {}
