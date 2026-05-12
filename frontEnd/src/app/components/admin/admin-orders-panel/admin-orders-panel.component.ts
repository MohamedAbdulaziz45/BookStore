import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-orders-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-orders-panel.component.html',
  styleUrl: './admin-orders-panel.component.scss'
})
export class AdminOrdersPanelComponent {
  ordersList = [
    { id: '#ORD-2041', customer: 'Sarah Johnson', items: 3, total: '$47.85', payment: 'Credit Card', status: 'pending', statusLabel: 'Pending', date: 'Mar 4' },
    { id: '#ORD-2040', customer: 'Ahmed Hassan', items: 1, total: '$18.99', payment: 'PayPal', status: 'shipped', statusLabel: 'Shipped', date: 'Mar 3' },
    { id: '#ORD-2039', customer: 'Emily Chen', items: 2, total: '$32.50', payment: 'Credit Card', status: 'delivered', statusLabel: 'Delivered', date: 'Mar 2' },
    { id: '#ORD-2038', customer: 'Mike Roberts', items: 5, total: '$89.20', payment: 'Credit Card', status: 'processing', statusLabel: 'Processing', date: 'Mar 1' },
  ];
}
