import { Injectable } from "@angular/core";
import { IAuthor } from "../../models/iauthor";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiAuthorService {
  constructor(private httpClient: HttpClient) {}

  getAuthorById(id: number): Observable<IAuthor> {
    return this.httpClient.get<IAuthor>(`${environment.baseUrl}/Authors/${id}`);
  }
}
