import { Component, Input, Output, EventEmitter, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from "@progress/kendo-angular-icons";
import { cameraIcon } from "@progress/kendo-svg-icons";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from "@progress/kendo-angular-layout";
import '@angular/localize/init' 

const burgerMenu = require('../assets/burger-menu.svg');

interface User {
  name: string;
}

@Component({
  selector: 'sirius-lib-header',
  standalone: true,
  imports: [CommonModule, IconsModule, LayoutModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();

  burgerMenu = burgerMenu.default ?? burgerMenu;
  icons = { cameraIcon };
  public accountImg = 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg';


  @Output() clickMenu = new EventEmitter<any>();

  eventClick() {
    console.log("teste")
    this.clickMenu.emit();
  }
}
