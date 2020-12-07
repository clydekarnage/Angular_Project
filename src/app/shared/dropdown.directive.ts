import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown'
})
export class DropdownDirective {
  private wasInside = false;

  @HostBinding('class.show') isOpen = false;

  // tslint:disable-next-line:typedef
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.wasInside = true;
  }

  // tslint:disable-next-line:typedef
  @HostListener('document:click') clickout() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}
