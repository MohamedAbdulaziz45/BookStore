import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-sidebar.component.html'
})
export class CustomerSidebarComponent {
  @Input() activePanel: string = 'orders';
  @Output() panelChange = new EventEmitter<string>();

  showPanel(panelId: string) {
    this.panelChange.emit(panelId);
  }
}
