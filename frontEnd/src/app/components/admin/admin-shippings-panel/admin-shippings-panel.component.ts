import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-shippings-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-shippings-panel.component.html',
  styleUrl: './admin-shippings-panel.component.scss'
})
export class AdminShippingsPanelComponent {
  shippings = [
    { id: '#SHP-3041', orderId: '#ORD-2041', customer: 'Sarah Johnson', carrier: 'FedEx', tracking: 'FX-784512369', status: 'shipped', statusLabel: 'In Transit', date: 'Mar 4, 2026', eta: 'Mar 7, 2026' },
    { id: '#SHP-3040', orderId: '#ORD-2040', customer: 'Ahmed Hassan', carrier: 'UPS', tracking: 'UP-456123789', status: 'shipped', statusLabel: 'In Transit', date: 'Mar 3, 2026', eta: 'Mar 6, 2026' },
    { id: '#SHP-3039', orderId: '#ORD-2039', customer: 'Emily Chen', carrier: 'USPS', tracking: 'US-321654987', status: 'delivered', statusLabel: 'Delivered', date: 'Mar 2, 2026', eta: 'Mar 4, 2026' },
    { id: '#SHP-3038', orderId: '#ORD-2038', customer: 'Mike Roberts', carrier: 'DHL', tracking: 'DH-159753468', status: 'processing', statusLabel: 'Preparing', date: 'Mar 1, 2026', eta: 'Mar 5, 2026' },
  ];
}
