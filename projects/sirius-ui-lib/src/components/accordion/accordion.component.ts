import { Component, Input} from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconsModule } from "@progress/kendo-angular-icons";

@Component({
  standalone: true,
  imports: [CommonModule, IconsModule],
  selector: 'sirius-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input()
  item: any = null

  public isOpen = false
  clickAccordeon() {
    this.isOpen = !this.isOpen
  }
}