import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { AuditComponent } from './audit/audit.component';
import { BillingComponent } from './billing/billing.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NotificationComponent } from './notification/notification.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BorderclrDirective } from './directives/borderclr.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    AuditComponent,
    BillingComponent,
    ConfigurationComponent,
    NotificationComponent,
    BorderclrDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
