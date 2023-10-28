import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './pages/chats/chats.component';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';


@NgModule({
  declarations: [
    ChatsComponent,
    ChatsPageComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
