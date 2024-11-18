import { NgModule } from "@angular/core";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { MainContainerComponent } from "./main-container.component";
import { HeaderComponent } from "../Header/header.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarComponent } from "../Sidebar/Sidebar.component";
import { PageComponent } from "../Page/page.component";

@NgModule({
    imports: [
    LayoutModule, CommonModule, BrowserModule, PageComponent,
    BrowserAnimationsModule, HeaderComponent, SidebarComponent,
    PageComponent
],
    exports: [HeaderComponent],
    declarations: [MainContainerComponent],
    bootstrap: [MainContainerComponent],
})
export class MainContainerModule { }