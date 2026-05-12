import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { BookGridComponent } from '../../components/book-grid/book-grid.component';
import { NewsletterSectionComponent } from '../../components/newsletter-section/newsletter-section.component';
import { CartSidebarComponent } from '../../components/cart-sidebar/cart-sidebar.component';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PageBannerComponent, BookGridComponent, NewsletterSectionComponent, CartSidebarComponent],
  template: `
    <app-cart-sidebar></app-cart-sidebar>
    <app-header></app-header>
    <app-page-banner title="Best Sellers" subtitle="Our most loved books — the ones readers recommend again and again."></app-page-banner>
    <app-book-grid [books]="books" [showViewMore]="false" [columns]="4"></app-book-grid>
    <app-newsletter-section></app-newsletter-section>
    <app-footer></app-footer>
  `
})
export class BestSellerComponent {
  books: Book[];
  constructor(booksService: BooksService) { this.books = booksService.getByCategory('best-seller'); }
}
