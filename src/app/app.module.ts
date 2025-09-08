import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material modules
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Optional: include if using Angular Material v15+ and separate MatOptionModule
// import { MatOptionModule } from '@angular/material/core';

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
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    // Angular Material
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    // MatOptionModule // Uncomment if needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}