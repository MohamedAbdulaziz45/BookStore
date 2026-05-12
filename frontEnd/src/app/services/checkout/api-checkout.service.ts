import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class ApiCheckoutService {
  constructor(private httpClient: HttpClient) { }

  createSession(shippingAddressId: number): Observable<{ SessionUrl: string }> {
    return this.httpClient.post<{ SessionUrl: string }>(
      `${environment.baseUrl}/checkout/create-session`,
      { shippingAddressId },
    );
  }
}
