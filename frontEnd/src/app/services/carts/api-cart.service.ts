import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICart } from "../../models/Cart/icart";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import {
  ISyncCartItem,
  ISyncCartRequest,
} from "../../models/Cart/isync-cart-request";
@Injectable({
  providedIn: "root",
})
export class ApiCartService {
  constructor(private httpClient: HttpClient) {}

  getCart(): Observable<ICart> {
    return this.httpClient.get<ICart>(`${environment.baseUrl}/carts/me`);
  }

  addOrUpdateCartItem(
    bookId: number,
    quantityChange: number,
  ): Observable<ICart> {
    return this.httpClient.post<ICart>(`${environment.baseUrl}/carts/items`, {
      bookId,
      quantityChange,
    });
  }

  removeItem(bookId: number): Observable<ICart> {
    return this.httpClient.delete<ICart>(
      `${environment.baseUrl}/carts/items/${bookId}`,
    );
  }

  clearCart(): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/carts`);
  }

  syncCart(request: ISyncCartRequest): Observable<ICart> {
    return this.httpClient.post<ICart>(
      `${environment.baseUrl}/carts/sync`,
      request,
    );
  }

  previewCart(request: ISyncCartRequest): Observable<ICart> {
    return this.httpClient.post<ICart>(
      `${environment.baseUrl}/carts/preview`,
      request,
    );
  }
}
