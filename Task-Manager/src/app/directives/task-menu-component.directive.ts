import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTaskMenuComponent]',
  standalone: true
})
export class TaskMenuComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
