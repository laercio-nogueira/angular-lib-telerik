import { NgModule } from "@angular/core";
import { LayoutModule } from "@progress/kendo-angular-layout";
import {  MainContainerComponent } from "./main-container.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        LayoutModule, CommonModule, BrowserModule, BrowserAnimationsModule, 
    ],
    declarations: [MainContainerComponent],
    bootstrap: [MainContainerComponent],
})
export class MainContainerModule { }