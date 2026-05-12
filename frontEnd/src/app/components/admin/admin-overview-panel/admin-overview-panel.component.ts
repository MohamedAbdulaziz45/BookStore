import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-overview-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-overview-panel.component.html',
  styleUrl: './admin-overview-panel.component.scss'
})
export class AdminOverviewPanelComponent {
  // Revenue chart data
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  chartHeights = [35, 50, 42, 65, 55, 70, 80, 60, 75, 90, 68, 95];

  // Stat Cards
  statCards = [
    {
      icon: 'bi-currency-dollar', iconBg: '#fff8e6', iconColor: 'var(--gold)',
      value: '$24,580', label: 'Total Revenue',
      change: '12.4% vs last month', changeDir: 'up',
      sparkHeights: [40, 60, 45, 80, 100],
      sparkGradient: 'linear-gradient(to top, var(--gold), rgba(225,169,43,.4))'
    },
    {
      icon: 'bi-bag-check', iconBg: '#e8f5e9', iconColor: '#198754',
      value: '348', label: 'Total Orders',
      change: '8.2% vs last month', changeDir: 'up',
      sparkHeights: [50, 70, 55, 90, 75],
      sparkGradient: 'linear-gradient(to top,#198754,rgba(25,135,84,.3))'
    },
    {
      icon: 'bi-people', iconBg: '#e3f2fd', iconColor: '#0d6efd',
      value: '1,204', label: 'Total Customers',
      change: '5.1% vs last month', changeDir: 'up',
      sparkHeights: [30, 55, 40, 70, 85],
      sparkGradient: 'linear-gradient(to top,#0d6efd,rgba(13,110,253,.3))'
    },
    {
      icon: 'bi-book', iconBg: '#fce4ec', iconColor: '#e91e63',
      value: '856', label: 'Books in Stock',
      change: '3 low stock alerts', changeDir: 'down',
      sparkHeights: [60, 80, 65, 45, 90],
      sparkGradient: 'linear-gradient(to top,#e91e63,rgba(233,30,99,.3))'
    },
  ];

  // Top selling books
  topBooks = [
    { rank: 1, title: 'Atomic Habits', author: 'James Clear', sold: 142 },
    { rank: 2, title: 'The Alchemist', author: 'Paulo Coelho', sold: 118 },
    { rank: 3, title: 'Deep Work', author: 'Cal Newport', sold: 97 },
    { rank: 4, title: 'Sapiens', author: 'Yuval Noah Harari', sold: 84 },
  ];

  // Recent orders
  recentOrders = [
    { id: '#ORD-2041', customer: 'Sarah Johnson', books: '3 items', amount: '$47.85', status: 'pending', statusLabel: 'Pending', date: 'Mar 4, 2026' },
    { id: '#ORD-2040', customer: 'Ahmed Hassan', books: '1 item', amount: '$18.99', status: 'shipped', statusLabel: 'Shipped', date: 'Mar 3, 2026' },
    { id: '#ORD-2039', customer: 'Emily Chen', books: '2 items', amount: '$32.50', status: 'delivered', statusLabel: 'Delivered', date: 'Mar 2, 2026' },
    { id: '#ORD-2038', customer: 'Mike Roberts', books: '5 items', amount: '$89.20', status: 'processing', statusLabel: 'Processing', date: 'Mar 1, 2026' },
    { id: '#ORD-2037', customer: 'Lena Fischer', books: '1 item', amount: '$14.99', status: 'cancelled', statusLabel: 'Cancelled', date: 'Feb 28, 2026' },
  ];

  getChartTooltip(height: number): string {
    return '$' + (height * 280).toLocaleString();
  }
}
