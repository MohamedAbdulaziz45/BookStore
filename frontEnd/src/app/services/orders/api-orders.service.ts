import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Order } from "../../models/Orders/order";
import { MyOrderSummary } from "../../models/Orders/my-order-summary";

@Injectable({
  providedIn: "root",
})
export class ApiOrdersService {
  constructor(private httpClient: HttpClient) {}

  getMyOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${environment.baseUrl}/orders/me`);
  }

  getMySummary(): Observable<MyOrderSummary> {
    return this.httpClient.get<MyOrderSummary>(
      `${environment.baseUrl}/orders/me/summary`,
    );
  }

  getById(orderId: number): Observable<Order> {
    return this.httpClient.get<Order>(
      `${environment.baseUrl}/orders/${orderId}`,
    );
  }

  getBySessionId(sessionId: string): Observable<Order> {
    return this.httpClient.get<Order>(
      `${environment.baseUrl}/orders/by-session/${encodeURIComponent(sessionId)}`,
    );
  }

  cancelOrder(orderId: number): Observable<void> {
    return this.httpClient.post<void>(
      `${environment.baseUrl}/orders/${orderId}/cancel`,
      {},
    );
  }
}
