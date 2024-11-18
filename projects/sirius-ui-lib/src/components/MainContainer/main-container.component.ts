import { Component, Input } from "@angular/core";

@Component({
    standalone: false,
    selector: 'th-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.scss']
})
export class MainContainerComponent {
    @Input()
    items: any = []
    
    isOpen: boolean = false

    toggleSidebar() {
        console.log("MainContainerComponent")
        this.isOpen = !this.isOpen
    }
}