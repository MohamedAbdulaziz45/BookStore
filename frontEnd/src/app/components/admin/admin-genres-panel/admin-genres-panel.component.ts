import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-genres-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-genres-panel.component.html',
  styleUrl: './admin-genres-panel.component.scss'
})
export class AdminGenresPanelComponent {
  genres = [
    { name: 'Fiction', booksCount: 412, icon: 'bi-book', color: '#0d6efd' },
    { name: 'Non-Fiction', booksCount: 298, icon: 'bi-journal-text', color: '#198754' },
    { name: 'Self-Help', booksCount: 187, icon: 'bi-lightbulb', color: 'var(--gold)' },
    { name: 'Science', booksCount: 134, icon: 'bi-rocket-takeoff', color: '#6f42c1' },
    { name: 'History', booksCount: 156, icon: 'bi-hourglass-split', color: '#e91e63' },
    { name: 'Productivity', booksCount: 98, icon: 'bi-graph-up', color: '#fd7e14' },
    { name: 'Biography', booksCount: 76, icon: 'bi-person-lines-fill', color: '#20c997' },
    { name: 'Mystery & Thriller', booksCount: 210, icon: 'bi-search', color: '#dc3545' },
  ];
}
