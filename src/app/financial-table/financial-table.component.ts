import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../financial-data.service';

@Component({
  selector: 'app-financial-table',
  templateUrl: './financial-table.component.html',
  styleUrls: ['./financial-table.component.css']
})
export class FinancialTableComponent implements OnInit {
  financials: any[] = [];
  selectedCompanies: string[] = [];

  constructor(private dataService: FinancialDataService) {}

  ngOnInit(): void {
    this.dataService.getFinancials().subscribe(data => {
      this.financials = data;

      // Select all companies by default
      this.selectedCompanies = this.financials.map(item => item.companyName);
    });
  }

  onCheckboxChange(event: Event, company: string): void {
    const input = event.target as HTMLInputElement;
    this.toggleCompanySelection(company, input.checked);
  }

  toggleCompanySelection(company: string, isChecked: boolean): void {
    if (!company) return;

    if (isChecked) {
      if (!this.selectedCompanies.includes(company)) {
        this.selectedCompanies.push(company);
      }
    } else {
      this.selectedCompanies = this.selectedCompanies.filter(c => c !== company);
    }
  }
}