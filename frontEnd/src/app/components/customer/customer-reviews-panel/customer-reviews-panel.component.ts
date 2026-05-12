import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-reviews-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-reviews-panel.component.html'
})
export class CustomerReviewsPanelComponent {
  myReviews = [
    {
      title: 'Atomic Habits', author: 'James Clear', stars: 5, date: 'Feb 15, 2026',
      coverBg: 'var(--brand-warm)',
      text: 'This book completely changed how I approach building habits. The concept of 1% improvements is simple but incredibly powerful. Highly recommend to anyone wanting to make lasting changes.'
    },
    {
      title: 'The Alchemist', author: 'Paulo Coelho', stars: 4, date: 'Jan 28, 2026',
      coverBg: '#e8f0fe',
      text: 'A beautifully written story about following your dreams. Some parts felt slow but the overall message is timeless and inspiring.'
    },
  ];

  getStarsArray(count: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < count);
  }
}
