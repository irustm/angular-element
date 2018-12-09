import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <ngx-avatar [name]="name"></ngx-avatar>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AvatarComponent {
  @Input() name: string;
  constructor() { }
}