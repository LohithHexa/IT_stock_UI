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

  availableMetrics: string[] = ['Price', 'Close', 'Open', 'Low', 'High', 'Cap', 'P/E'];
  selectedMetrics: string[] = [...this.availableMetrics]; // default: all selected

  showMetricDropdown = false;

  constructor(private dataService: FinancialDataService) {}

  ngOnInit(): void {
    this.dataService.getFinancials().subscribe(data => {
      this.financials = data;
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

  toggleMetricDropdown(): void {
    this.showMetricDropdown = !this.showMetricDropdown;
  }

  onMetricToggle(metric: string): void {
    const index = this.selectedMetrics.indexOf(metric);
    if (index > -1) {
      this.selectedMetrics.splice(index, 1);
    } else {
      this.selectedMetrics.push(metric);
    }
  }

  getMetricValue(item: any, metric: string): string {
    switch (metric) {
      case 'Price': return `₹${item.currentPrice?.toFixed(2)}`;
      case 'Close': return `₹${item.previousClose?.toFixed(2)}`;
      case 'Open': return `₹${item.openPrice?.toFixed(2)}`;
      case 'Low': return `₹${item.dayLow?.toFixed(2)}`;
      case 'High': return `₹${item.dayHigh?.toFixed(2)}`;
      case 'Cap': return `₹${item.marketCapCr?.toFixed(2)} Cr`;
      case 'P/E': return item.peRatio?.toFixed(2);
      default: return '';
    }
  }
  toggleSelectAll(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.selectedMetrics = input.checked ? [...this.availableMetrics] : [];
}

}