import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PageBannerComponent } from "../../components/page-banner/page-banner.component";
import { BooksService } from "../../services/books.service";
import { SearchSummaryComponent } from "./components/search-summary.component";
import { SearchBooksGridComponent } from "./components/search-books-grid.component";
import { Book } from "../../models/book.model";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: "app-search-results",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    PageBannerComponent,
    SearchSummaryComponent,
    SearchBooksGridComponent,
  ],
  template: `
    <app-header></app-header>
    <app-page-banner
      title="Search Results"
      subtitle="A dedicated search surface with clearer intent, better sorting, and room for real filters later."
    ></app-page-banner>

    <section class="section-py bg-brand">
      <div class="container">
        <app-search-summary
          [query]="query"
          [resultsCount]="results.length"
          [sort]="sort"
          (search)="onSearch($event)"
          (sortChange)="onSortChange($event)"
        ></app-search-summary>

        <div class="mt-4">
          <app-search-books-grid [books]="results" (add)="saveBook($event)"></app-search-books-grid>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
})
export class SearchResultsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private booksService = inject(BooksService);
  private toastService = inject(ToastService);

  query = "";
  sort = "featured";
  results: Book[] = [];

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.query = params["search"] ?? "";
      this.sort = params["sort"] ?? "featured";
      this.applySearch();
    });
  }

  onSearch(search: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search, sort: this.sort },
      queryParamsHandling: "merge",
    });
  }

  onSortChange(sort: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.query, sort },
      queryParamsHandling: "merge",
    });
  }

  saveBook(book: Book) {
    this.toastService.show(`${book.title} saved for later`, "info");
  }

  private applySearch() {
    const source = this.query ? this.booksService.searchBooks(this.query) : this.booksService.getAll();
    this.results = this.sortBooks(source, this.sort);
  }

  private sortBooks(books: Book[], sort: string) {
    const copy = [...books];
    switch (sort) {
      case "price-asc":
        return copy.sort((a, b) => a.price - b.price);
      case "price-desc":
        return copy.sort((a, b) => b.price - a.price);
      case "title":
        return copy.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return copy;
    }
  }
}
