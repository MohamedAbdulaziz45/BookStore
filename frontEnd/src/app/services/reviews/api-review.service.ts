import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Review } from "../../models/Review/review";
import { environment } from "../../../environments/environment.development";
import { ReviewResponse } from "../../models/Review/review-response";

@Injectable({
  providedIn: "root",
})
export class ApiReviewService {
  constructor(private httpClient: HttpClient) {}

  addReview(bookId: number, review: Review) {
    return this.httpClient.post(
      `${environment.baseUrl}/books/${bookId}/reviews`,
      review,
    );
  }

  getAllReviewByBookId(bookId: number): Observable<ReviewResponse[]> {
    return this.httpClient.get<ReviewResponse[]>(
      `${environment.baseUrl}/books/${bookId}/reviews`,
    );
  }

  deleteReveiw(reviewId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.baseUrl}/reviews/${reviewId}`,
    );
  }
}
