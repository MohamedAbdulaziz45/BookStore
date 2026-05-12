import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CartSidebarComponent } from '../../components/cart-sidebar/cart-sidebar.component';
import { CustomerSidebarComponent } from '../../components/customer/customer-sidebar/customer-sidebar.component';
import { CustomerOrdersPanelComponent } from '../../components/customer/customer-orders-panel/customer-orders-panel.component';
import { CustomerWishlistPanelComponent } from '../../components/customer/customer-wishlist-panel/customer-wishlist-panel.component';
import { CustomerReviewsPanelComponent } from '../../components/customer/customer-reviews-panel/customer-reviews-panel.component';
import { CustomerRewardsPanelComponent } from '../../components/customer/customer-rewards-panel/customer-rewards-panel.component';
import { CustomerProfilePanelComponent } from '../../components/customer/customer-profile-panel/customer-profile-panel.component';
import { CustomerAddressesPanelComponent } from '../../components/customer/customer-addresses-panel/customer-addresses-panel.component';
import { CustomerPaymentsPanelComponent } from '../../components/customer/customer-payments-panel/customer-payments-panel.component';
import { CustomerNotificationsPanelComponent } from '../../components/customer/customer-notifications-panel/customer-notifications-panel.component';
import { CustomerPasswordPanelComponent } from '../../components/customer/customer-password-panel/customer-password-panel.component';

@Component({
    selector: 'app-customer-dashboard',
    standalone: true,
    imports: [
        CommonModule, HeaderComponent, FooterComponent, CartSidebarComponent,
        CustomerSidebarComponent, CustomerOrdersPanelComponent, CustomerWishlistPanelComponent,
        CustomerReviewsPanelComponent, CustomerRewardsPanelComponent, CustomerProfilePanelComponent,
        CustomerAddressesPanelComponent, CustomerPaymentsPanelComponent, CustomerNotificationsPanelComponent,
        CustomerPasswordPanelComponent
    ],
    templateUrl: './customer-dashboard.component.html'
})
export class CustomerDashboardComponent {
    activePanel = 'orders';

    // Hero stats
    heroStats = [
        { value: '24', label: 'Total Orders' },
        { value: '$412', label: 'Total Spent' },
        { value: '8', label: 'Wishlist Items' },
        { value: '12', label: 'Reviews Given' },
    ];

    showPanel(panel: string): void {
        this.activePanel = panel;
    }
}
