import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffMemberComponent } from './staff-member/staff-member.component';

const routes: Routes = [
  { path: 'staff-form', component: StaffMemberComponent },
  // ... otras rutas de tu aplicación ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {
  
}
