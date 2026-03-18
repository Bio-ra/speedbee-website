import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-left">
        <a routerLink="/home" class="logo">SpeedBee</a>
      </div>
      
      <nav class="nav-menu">
        <a routerLink="/home" routerLinkActive="active">Strona główna</a>
        <a routerLink="/products" routerLinkActive="active">Produkty</a>
      </nav>

      <div class="header-right">
        <a href="#" class="cart-icon">🛒</a>
        <a href="#" class="btn-order">Zamów teraz</a>
      </div>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 40px;
      border-bottom: 1px solid #e0e0e0;
      background-color: white;
    }

    .header-left {
      flex: 1;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #000;
      font-family: Arial, sans-serif;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .logo:hover {
      color: #c87b00;
    }

    .nav-menu {
      display: flex;
      gap: 30px;
      flex: 2;
      justify-content: center;
    }

    .nav-menu a {
      text-decoration: none;
      color: #666;
      font-size: 0.95rem;
      font-family: Arial, sans-serif;
      transition: color 0.3s ease;
      border: none;
      padding: 0;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
      color: #000;
      font-weight: 500;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 20px;
      flex: 1;
      justify-content: flex-end;
    }

    .cart-icon {
      font-size: 1.3rem;
      cursor: pointer;
      text-decoration: none;
    }

    .btn-order {
      background-color: #c87b00;
      color: white;
      padding: 10px 24px;
      border-radius: 4px;
      text-decoration: none;
      font-family: Arial, sans-serif;
      font-size: 0.95rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }

    .btn-order:hover {
      background-color: #b36a00;
    }
  `]
})
export class HeaderComponent {}
