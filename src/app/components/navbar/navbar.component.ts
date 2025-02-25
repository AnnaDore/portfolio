import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isMenuOpen: boolean = false;
  
  links = [
    { label: 'Home', url: '/' },
    { label: 'About me', url: '/about' },
    { label: 'Experience', url: '/experience' },
  ];

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
