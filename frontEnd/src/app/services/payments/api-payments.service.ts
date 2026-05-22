import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Payment } from "../../models/Payments/payment";

@Injectable({
  providedIn: "root",
})
export class ApiPaymentsService {
  constructor(private httpClient: HttpClient) {}

  getByOrderId(orderId: number): Observable<Payment> {
    return this.httpClient.get<Payment>(
      `${environment.baseUrl}/payments/order/${orderId}`,
    );
  }
}
