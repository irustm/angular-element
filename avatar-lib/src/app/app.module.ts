import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AvatarComponent } from './avatar.component';

import { AvatarModule } from 'ngx-avatar';

@NgModule({
declarations: [AvatarComponent],
  imports: [AvatarModule, BrowserModule],
  entryComponents: [AvatarComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // Создаем наш кастомный Angular Element
    const avatarComponent = createCustomElement(AvatarComponent, {
      injector
    });
    // И обьявляем наш элемент
    customElements.define('avatar-lib', avatarComponent);
  }
  ngDoBootstrap() {}
}