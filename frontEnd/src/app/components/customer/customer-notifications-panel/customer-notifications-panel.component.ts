import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-notifications-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-notifications-panel.component.html'
})
export class CustomerNotificationsPanelComponent {
  notifications = [
    { id: 1, icon: 'bi-truck', color: '#198754', title: 'Order #ORD-2041 shipped', text: 'Your order is on its way! Tracking: FX-784512369', time: '2 hours ago', unread: true },
    { id: 2, icon: 'bi-tag', color: 'var(--gold)', title: '20% Off Weekend Sale', text: 'Use code WEEKEND20 for 20% off all fiction books this weekend.', time: '1 day ago', unread: true },
    { id: 3, icon: 'bi-bag-check', color: '#0d6efd', title: 'Order #ORD-2030 delivered', text: 'Your order has been delivered. Enjoy your read!', time: '2 weeks ago', unread: false },
    { id: 4, icon: 'bi-star', color: '#fd7e14', title: 'Rate your purchase', text: 'How was "The Alchemist"? Share your thoughts with other readers.', time: '2 weeks ago', unread: false },
    { id: 5, icon: 'bi-heart', color: '#dc3545', title: 'Price drop on wishlist item', text: '"Sapiens" is now $15.99 (was $19.99). Grab it before the offer ends!', time: '3 weeks ago', unread: false },
  ];
}
