import { Component, Output, EventEmitter } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  @Output() linkSelected = new EventEmitter<string>();
  
  onSelect(link: string, data: MouseEvent) {
    this.linkSelected.emit(link)
    
  }
}
