import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffSearchComponent } from './staff-search/staff-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffMemberComponent,
    StaffSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
