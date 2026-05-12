import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-payments-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-payments-panel.component.html',
  styleUrl: './admin-payments-panel.component.scss'
})
export class AdminPaymentsPanelComponent {
  payments = [
    { id: '#PAY-1041', orderId: '#ORD-2041', customer: 'Sarah Johnson', method: 'Credit Card', amount: '$47.85', status: 'completed', statusLabel: 'Completed', date: 'Mar 4, 2026' },
    { id: '#PAY-1040', orderId: '#ORD-2040', customer: 'Ahmed Hassan', method: 'PayPal', amount: '$18.99', status: 'completed', statusLabel: 'Completed', date: 'Mar 3, 2026' },
    { id: '#PAY-1039', orderId: '#ORD-2039', customer: 'Emily Chen', method: 'Credit Card', amount: '$32.50', status: 'completed', statusLabel: 'Completed', date: 'Mar 2, 2026' },
    { id: '#PAY-1038', orderId: '#ORD-2038', customer: 'Mike Roberts', method: 'Credit Card', amount: '$89.20', status: 'pending', statusLabel: 'Pending', date: 'Mar 1, 2026' },
    { id: '#PAY-1037', orderId: '#ORD-2037', customer: 'Lena Fischer', method: 'Debit Card', amount: '$14.99', status: 'cancelled', statusLabel: 'Refunded', date: 'Feb 28, 2026' },
  ];
}
