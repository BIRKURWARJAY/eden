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
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LoginpageComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
