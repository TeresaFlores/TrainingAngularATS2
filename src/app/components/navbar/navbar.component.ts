import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes = [{ name: '', path: '' }];

  ngOnInit(): void {
    this.routes = [
      {
        name: 'Movies',
        path: '/home',
      },
      {
        name: 'Tickets',
        path: '/tickets',
      },
      {
        name: 'Food',
        path: '/food',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
    ];
  }

  gotoCart() {
    const element = document.getElementsByTagName('body');
    const elementHeight = element[0].offsetHeight;
    window.scrollTo({ top: elementHeight, left: 0, behavior: 'smooth' });
  }
}
