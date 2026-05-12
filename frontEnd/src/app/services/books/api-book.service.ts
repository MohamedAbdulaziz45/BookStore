import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { ibook } from "../../models/Book/ibook";
import { IpagedResult } from "../../models/ipaged-result";
import { IBookSummary } from "../../models/Book/i-book-summary";

@Injectable({
  providedIn: "root",
})
export class ApiBookService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks(
    searchPhrase?: string,
    pageSize: number = 10,
    pageNumber: number = 1,
    sortBy?: string,
    sortDirection: "Ascending" | "Descending" = "Ascending",
  ): Observable<IpagedResult<IBookSummary>> {
    let params = new HttpParams()
      .set("pageSize", pageSize)
      .set("pageNumber", pageNumber)
      .set("sortDirection", sortDirection);

    if (searchPhrase) params = params.set("searchPhrase", searchPhrase);
    if (sortBy) params = params.set("sortBy", sortBy);

    return this.httpClient.get<IpagedResult<IBookSummary>>(
      `${environment.baseUrl}/Books`,
      { params },
    );
  }

  getAllBooksByGenre(
    genreId: number,
    searchPhrase?: string,
    pageSize: number = 10,
    pageNumber: number = 1,
    sortBy?: string,
    sortDirection: "Ascending" | "Descending" = "Ascending",
  ): Observable<IpagedResult<IBookSummary>> {
    let params = new HttpParams()
      .set("pageSize", pageSize)
      .set("pageNumber", pageNumber)
      .set("sortDirection", sortDirection);

    if (searchPhrase) params = params.set("searchPhrase", searchPhrase);
    if (sortBy) params = params.set("sortBy", sortBy);

    return this.httpClient.get<IpagedResult<IBookSummary>>(
      `${environment.baseUrl}/books/genre/${genreId}`,
      { params },
    );
  }
  getBookById(id: number): Observable<ibook> {
    return this.httpClient.get<ibook>(`${environment.baseUrl}/Books/${id}`);
  }
}
