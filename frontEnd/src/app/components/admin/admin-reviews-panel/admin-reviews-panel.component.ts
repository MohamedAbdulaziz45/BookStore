import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-reviews-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-reviews-panel.component.html',
  styleUrl: './admin-reviews-panel.component.scss'
})
export class AdminReviewsPanelComponent {
  reviews = [
    { initials: 'SJ', name: 'Sarah Johnson', color: '#0d6efd', book: 'Atomic Habits', stars: 5, review: 'Life-changing book. Highly recommend to everyone.', date: 'Mar 4' },
    { initials: 'AH', name: 'Ahmed Hassan', color: '#e91e63', book: 'The Alchemist', stars: 4, review: 'Beautiful story, timeless wisdom.', date: 'Mar 3' },
  ];

  getStarsArray(count: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < count);
  }
}
