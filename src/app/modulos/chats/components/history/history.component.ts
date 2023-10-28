import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    MatBadgeModule
  ],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() history:boolean = false;
  @Input() status:boolean = false;
  @Input() image:string = "";
}
