import { Component, OnInit } from '@angular/core';
const burgerMenu = require('../assets/burger-menu.svg');

@Component({
  selector: 'sirius-lib-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './Sidebar.component.html',
  styleUrl: './Sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  burgerMenu = burgerMenu?.default ?? burgerMenu

  isOpen = false
  toggleSidebar() {
    this.isOpen = !this.isOpen
  }
}
