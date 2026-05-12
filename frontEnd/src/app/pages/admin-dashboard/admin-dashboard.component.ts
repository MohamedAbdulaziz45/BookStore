import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSidebarComponent } from '../../components/admin/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from '../../components/admin/admin-topbar/admin-topbar.component';
import { AdminOverviewPanelComponent } from '../../components/admin/admin-overview-panel/admin-overview-panel.component';
import { AdminBooksPanelComponent } from '../../components/admin/admin-books-panel/admin-books-panel.component';
import { AdminGenresPanelComponent } from '../../components/admin/admin-genres-panel/admin-genres-panel.component';
import { AdminOrdersPanelComponent } from '../../components/admin/admin-orders-panel/admin-orders-panel.component';
import { AdminPaymentsPanelComponent } from '../../components/admin/admin-payments-panel/admin-payments-panel.component';
import { AdminShippingsPanelComponent } from '../../components/admin/admin-shippings-panel/admin-shippings-panel.component';
import { AdminCustomersPanelComponent } from '../../components/admin/admin-customers-panel/admin-customers-panel.component';
import { AdminReviewsPanelComponent } from '../../components/admin/admin-reviews-panel/admin-reviews-panel.component';
import { AdminSettingsPanelComponent } from '../../components/admin/admin-settings-panel/admin-settings-panel.component';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        AdminSidebarComponent,
        AdminTopbarComponent,
        AdminOverviewPanelComponent,
        AdminBooksPanelComponent,
        AdminGenresPanelComponent,
        AdminOrdersPanelComponent,
        AdminPaymentsPanelComponent,
        AdminShippingsPanelComponent,
        AdminCustomersPanelComponent,
        AdminReviewsPanelComponent,
        AdminSettingsPanelComponent
    ],
    templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent {
    activeTab = 'overview';

    panelTitles: Record<string, [string, string]> = {
        overview: ['Dashboard Overview', 'Wednesday, March 4, 2026'],
        books: ['Books Management', 'Catalogue'],
        genres: ['Genres Management', 'Catalogue'],
        orders: ['Orders Management', 'Sales'],
        payments: ['Payments', 'Sales'],
        shippings: ['Shippings', 'Sales'],
        customers: ['Customers', 'Community'],
        reviews: ['Reviews', 'Community'],
        settings: ['Settings', 'System'],
    };

    topbarTitle = 'Dashboard Overview';
    topbarSub = 'Wednesday, March 4, 2026';

    showTab(tabId: string) {
        this.activeTab = tabId;
        if (this.panelTitles[tabId]) {
            this.topbarTitle = this.panelTitles[tabId][0];
            this.topbarSub = this.panelTitles[tabId][1];
        }
    }
}
