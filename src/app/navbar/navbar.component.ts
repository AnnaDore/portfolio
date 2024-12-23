import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  links = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Experience', url: '/experience' },
  ];
  
  //TODO: set up queries
  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
}
