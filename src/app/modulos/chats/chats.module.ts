import { ChatsComponent } from './components/chats/chats.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    MatIconModule,
    HistoryComponent,
    ChatsComponent,
    MatSnackBarModule
  ]
})
export class ChatsModule { }
