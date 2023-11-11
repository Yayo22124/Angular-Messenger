import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  @Input() name: string = "";
  @Input("last-message") lastMessage: string = "";
  @Input() image: string = "";
  @Input() history: boolean = false;
  @Input() status: boolean = false;
  @Input() seen: boolean = false;

  @Output() actionSeen = new EventEmitter<any>();

  onChangeSeen(){
    !this.seen ? this.seen = !this.seen : this.seen = this.seen
  }

  limitWords(text: string, limit: number): string {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return text;
    }
  }
  
}
