import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { ibook } from "../../models/Book/ibook";
import { IpagedResult, IPagedResultWithMeta } from "../../models/ipaged-result";
import { IBookSummary } from "../../models/Book/i-book-summary";

@Injectable({
  providedIn: "root",
})
export class ApiBookService {
  private readonly baseUrl = `${environment.baseUrl}/books`;
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

    return this.httpClient.get<IpagedResult<IBookSummary>>(this.baseUrl, {
      params,
    });
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
      .set("GenreId", genreId)
      .set("pageSize", pageSize)
      .set("pageNumber", pageNumber)
      .set("sortDirection", sortDirection);

    if (searchPhrase) params = params.set("searchPhrase", searchPhrase);
    if (sortBy) params = params.set("sortBy", sortBy);

    return this.httpClient.get<IpagedResult<IBookSummary>>(
      `${this.baseUrl}/genre/${genreId}`,
      { params },
    );
  }
  getBookById(id: number): Observable<ibook> {
    return this.httpClient.get<ibook>(`${this.baseUrl}/${id}`);
  }
  getFeatured(
    pageSize: number = 10,
    pageNumber: number = 1,
  ): Observable<IPagedResultWithMeta<IBookSummary, boolean>> {
    let params = new HttpParams()
      .set("pageSize", pageSize)
      .set("pageNumber", pageNumber);

    return this.httpClient.get<IPagedResultWithMeta<IBookSummary, boolean>>(
      `${this.baseUrl}/featured`,
      { params },
    );
  }

  getEditorsPicks(
    pageSize: number = 10,
    pageNumber: number = 1,
  ): Observable<IPagedResultWithMeta<IBookSummary, boolean>> {
    let params = new HttpParams()
      .set("pageSize", pageSize)
      .set("pageNumber", pageNumber);

    return this.httpClient.get<IPagedResultWithMeta<IBookSummary, boolean>>(
      `${this.baseUrl}/editors-picks`,
      { params },
    );
  }
}
