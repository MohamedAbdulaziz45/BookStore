import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-orders-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-orders-panel.component.html'
})
export class CustomerOrdersPanelComponent {
  orders = [
    {
      id: '#ORD-2041', date: 'March 4, 2026 · 3 items', status: 'shipped', statusLabel: 'Shipped',
      tracking: [
        { label: 'Ordered', state: 'done', icon: 'bi-check-lg' },
        { label: 'Confirmed', state: 'done', icon: 'bi-check-lg' },
        { label: 'Shipped', state: 'current', icon: 'bi-truck' },
        { label: 'Delivered', state: 'future', icon: 'bi-house' },
      ],
      items: [
        { title: 'Atomic Habits', author: 'James Clear', qty: 1, price: '$18.99' },
        { title: 'Deep Work', author: 'Cal Newport', qty: 2, price: '$28.86' },
      ],
      footer: { type: 'shipping', text: 'Estimated delivery:', date: 'Mar 7, 2026' },
      actions: [
        { label: 'Track Package', icon: 'bi-truck', style: '' },
        { label: 'Invoice', icon: 'bi-receipt', style: 'border-color:var(--brand-border);color:var(--brand-gray)' },
      ]
    },
    {
      id: '#ORD-2030', date: 'February 20, 2026 · 1 item', status: 'delivered', statusLabel: 'Delivered',
      tracking: [],
      items: [
        { title: 'The Alchemist', author: 'Paulo Coelho', qty: 1, price: '$14.99' },
      ],
      footer: { type: 'delivered', text: 'Delivered on', date: 'Feb 24, 2026' },
      actions: [
        { label: 'Leave Review', icon: 'bi-star', style: '' },
        { label: 'Reorder', icon: 'bi-arrow-clockwise', style: 'border-color:var(--brand-border);color:var(--brand-gray)' },
      ]
    }
  ];
}
