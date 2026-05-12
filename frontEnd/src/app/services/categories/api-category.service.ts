import { Injectable } from "@angular/core";
import { icategory } from "../../models/icategory";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<icategory[]> {
    return this.httpClient.get<icategory[]>(
      `${environment.baseUrl}/Categories`,
    );
  }
}
