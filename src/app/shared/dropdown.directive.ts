import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') openClass: boolean = false;

  @HostListener('click') click() {
    this.openClass = !this.openClass;
  }


}
