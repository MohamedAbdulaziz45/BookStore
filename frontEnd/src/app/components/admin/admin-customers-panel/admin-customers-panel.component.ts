import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-customers-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-customers-panel.component.html',
  styleUrl: './admin-customers-panel.component.scss'
})
export class AdminCustomersPanelComponent {
  customers = [
    { initials: 'SJ', name: 'Sarah Johnson', color: '#0d6efd', email: 'sarah@email.com', phone: '+1 555-0101', orders: 24, spent: '$412.80', since: 'Jan 2025' },
    { initials: 'AH', name: 'Ahmed Hassan', color: '#e91e63', email: 'ahmed@email.com', phone: '+20 100-0001', orders: 8, spent: '$128.50', since: 'Mar 2025' },
    { initials: 'EC', name: 'Emily Chen', color: '#198754', email: 'emily@email.com', phone: '+1 555-0203', orders: 15, spent: '$287.40', since: 'Aug 2024' },
  ];
}
