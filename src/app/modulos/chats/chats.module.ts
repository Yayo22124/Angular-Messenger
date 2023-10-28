import { ChatsRoutingModule } from './chats-routing.module';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    MatIconModule,
    HistoryComponent
  ]
})
export class ChatsModule { }
