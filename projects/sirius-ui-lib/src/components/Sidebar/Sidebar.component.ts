import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
const burgerMenu = require('../assets/burger-menu.svg');

@Component({
  selector: 'sirius-lib-sidebar',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './Sidebar.component.html',
  styleUrl: './Sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  burgerMenu = burgerMenu?.default ?? burgerMenu

  @Input() isOpen = false
  @Input() ignoreIcon = false
  @Input() items: any = []

  @Output() clickMenu = new EventEmitter<any>()
  toggleSidebar() {
    this.clickMenu.emit();
  }
}
