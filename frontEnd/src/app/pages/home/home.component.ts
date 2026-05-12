import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { BookGridComponent } from "../../components/book-grid/book-grid.component";
import { CategoriesSectionComponent } from "../../components/categories-section/categories-section.component";
import { FeaturedBookComponent } from "../../components/featured-book/featured-book.component";
import { AuthorSectionComponent } from "../../components/author-section/author-section.component";
import { FeaturesComponent } from "../../components/features/features.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PublisherSectionComponent } from "../../components/publisher-section/publisher-section.component";
import { NewsletterSectionComponent } from "../../components/newsletter-section/newsletter-section.component";
import { CartSidebarComponent } from "../../components/cart-sidebar/cart-sidebar.component";
import { BooksService } from "../../services/books.service";
import { Book, Category, AuthorBook } from "../../models/book.model";
import { icategory } from "../../models/icategory";
import { toSignal } from "@angular/core/rxjs-interop";
import { CategoryService } from "../../services/categories/api-category.service";
import { ApiAuthorService } from "../../services/authors/api-author.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    BookGridComponent,
    CategoriesSectionComponent,
    FeaturedBookComponent,
    AuthorSectionComponent,
    FeaturesComponent,
    FooterComponent,
    PublisherSectionComponent,
    NewsletterSectionComponent,
    CartSidebarComponent,
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  featuredBooks: Book[];
  editorsPicks: Book[];

  // categories: Category[] = [
  //   { id: 'c1', name: 'Religion & Spirituality', image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=600&h=400&fit=crop', count: 145 },
  //   { id: 'c2', name: 'Teen & Young Adult',      image: 'https://images.unsplash.com/photo-1495446815901-a7297e3eda00?w=600&h=400&fit=crop', count: 298 },
  //   { id: 'c3', name: 'Literature & Fiction',    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop', count: 412 },
  //   { id: 'c4', name: 'Crime & Suspense',        image: 'https://images.unsplash.com/photo-1543002588-d83cdf1d3f90?w=600&h=400&fit=crop', count: 187 },
  //   { id: 'c5', name: 'Biographies & Memoirs',   image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=400&fit=crop', count: 156 },
  //   { id: 'c6', name: 'Mystery & Thriller',      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop', count: 234 },
  // ];
  categories = toSignal(this.ApiCategoriesSer.getAllCategories(), {
    initialValue: [],
  });

  author = toSignal(this.ApiAuthorsSer.getAuthorById(1), {
    initialValue: null,
  });
  featuredBook = {
    title: "Below Zero",
    subtitle: "World's Best Seller",
    author: "Gregg T. Adams",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image:
      "https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/bestseller-book.jpg",
    price: "$18.50",
  };

  authorBooks: AuthorBook[] = [
    {
      id: "1",
      title: "Cyber Angel",
      priceRange: "$20.00 – $22.00",
      image:
        "https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/small-book01.jpg",
    },
    {
      id: "2",
      title: "Ark Forging",
      priceRange: "$17.00 – $23.00",
      image:
        "https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/small-book02.jpg",
    },
    {
      id: "3",
      title: "Now You See Me",
      priceRange: "$16.00 – $18.00",
      image:
        "https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/small-book03.jpg",
    },
  ];

  constructor(
    private booksService: BooksService,
    private ApiCategoriesSer: CategoryService,
    private ApiAuthorsSer: ApiAuthorService,
  ) {
    this.featuredBooks = booksService.getAll().slice(0, 8);
    this.editorsPicks = booksService.getByCategory("editors-pick");
  }
}
