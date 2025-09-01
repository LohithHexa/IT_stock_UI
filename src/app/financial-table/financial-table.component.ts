// financial-table.component.ts
import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../financial-data.service';

@Component({
  selector: 'app-financial-table',
  templateUrl: './financial-table.component.html',
  styleUrls: ['./financial-table.component.css']
})
export class FinancialTableComponent implements OnInit {
  financials: any[] = [];

  constructor(private dataService: FinancialDataService) {}

  ngOnInit(): void {
    this.dataService.getFinancials().subscribe(data => {
      this.financials = data;
    });
  }
}