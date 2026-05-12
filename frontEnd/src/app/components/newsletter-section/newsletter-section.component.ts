import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="newsletter-section py-5">
      <div class="container py-4">
        <div class="row align-items-center g-4">
          <div class="col-lg-6">
            <h2 class="fw-bold mb-3" style="font-size:clamp(1.5rem,3vw,2.2rem)">
              Join Book Lovers Community<br>and Get Latest Updates
            </h2>
            <p class="mb-4" style="color:rgba(255,255,255,.6)">
              Subscribe to receive news about new arrivals, author spotlights and exclusive deals.
            </p>
            <form (submit)="onSubmit($event)" class="d-flex gap-2" style="max-width:460px">
              <input type="email" [(ngModel)]="email" name="email" required
                     class="nl-input flex-grow-1" placeholder="Your email address" />
              <button type="submit" class="btn btn-gold fw-bold text-uppercase px-4">
                Subscribe
              </button>
            </form>
            @if (ok()) {
              <p class="text-gold fw-semibold mt-3 mb-0 small">
                <i class="bi bi-check-circle-fill me-1"></i>Thank you for subscribing!
              </p>
            }
          </div>
          <div class="col-lg-6 d-none d-lg-flex justify-content-end">
            <img
              src="https://websitedemos.net/book-store-04/wp-content/uploads/sites/1029/2022/02/subscribe-image.png"
              alt="Subscribe" style="max-height:220px" />
          </div>
        </div>
      </div>
    </section>
  `
})
export class NewsletterSectionComponent {
  email = '';
  ok = signal(false);
  onSubmit(e: Event) {
    e.preventDefault();
    if (this.email) { this.ok.set(true); this.email = ''; setTimeout(() => this.ok.set(false), 3500); }
  }
}
