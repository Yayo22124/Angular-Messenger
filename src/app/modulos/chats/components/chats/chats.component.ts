import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IUsuario } from 'src/app/core/interfaces/usuario.interface';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent {
  @Input() name: string = '';
  @Input('last-message') lastMessage: string = '';
  @Input() image: string = '';
  @Input() history: boolean = false;
  @Input() status: boolean = false;
  @Input() seen: boolean = false;

  @Output() actionSeen = new EventEmitter<IUsuario>();
  @Output() actionSeenHistory = new EventEmitter<any>();

  onChangeSeenHistory() {
    if (!this.history) return;
    this.history = !this.history;
    this.actionSeenHistory.emit({
      name: this.name,
      image: this.image,
      history: this.history,
      status: this.status,
    });
  }

  onChangeSeen() {
    if (this.seen) return;
    this.seen = !this.seen;
    this.actionSeen.emit({
      name: this.name,
      lastMessage: this.lastMessage,
      image: this.image,
      history: this.history,
      status: this.status,
      seen: this.seen,
    });
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
