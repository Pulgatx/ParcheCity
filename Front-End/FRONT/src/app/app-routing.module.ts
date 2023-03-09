import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffMemberComponent } from './staff-member/staff-member.component';
import { StaffSearchComponent } from './staff-search/staff-search.component';
const routes: Routes = [
  { path: 'staff-form', component: StaffMemberComponent },
  { path: 'staff-points', component: StaffSearchComponent },
  // ... otras rutas de tu aplicación ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {
  
}
