import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IUsuario } from '../../../../core/interfaces/usuario.interface';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatBadgeModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  @Input() history: boolean = false;
  @Input() status: boolean = false;
  @Input() image: string = '';
  @Input() name: string = '';

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
}
