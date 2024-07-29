import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { AuditComponent } from './audit/audit.component';
import { BillingComponent } from './billing/billing.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '',  component: LoginpageComponent},
  { path: 'home', component: HomeComponent},
  { path: 'member', component: MembersComponent},
  { path: 'audit', component:AuditComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
