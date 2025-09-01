import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ✅ Needed for API calls

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancialTableComponent } from './financial-table/financial-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }