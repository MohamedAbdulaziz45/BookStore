import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-books-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-books-panel.component.html',
  styleUrl: './admin-books-panel.component.scss'
})
export class AdminBooksPanelComponent {
  booksList = [
    { title: 'Atomic Habits', author: 'James Clear', isbn: '978-0-7352-1189', genre: 'Self-Help', price: '$18.99', stock: 142, stockColor: '#198754', statusClass: 'shipped', statusLabel: 'Active' },
    { title: 'The Alchemist', author: 'Paulo Coelho', isbn: '978-0-0612-5217', genre: 'Fiction', price: '$14.99', stock: 87, stockColor: '#198754', statusClass: 'shipped', statusLabel: 'Active' },
    { title: 'Deep Work', author: 'Cal Newport', isbn: '978-1-4555-8669', genre: 'Productivity', price: '$16.99', stock: 3, stockColor: '#dc3545', statusClass: 'pending', statusLabel: 'Low Stock' },
    { title: 'Sapiens', author: 'Yuval Noah Harari', isbn: '978-0-0623-9731', genre: 'History', price: '$19.99', stock: 54, stockColor: '#198754', statusClass: 'shipped', statusLabel: 'Active' },
  ];
}
