import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-angular-spreadsheet';

interface TradeData {
  EmployeeID: number;
  Employees: string;
  Designation: string;
  Location: string;
  Status: string;
  Shift: string;
  Trustworthiness: string;
  Rating: number;
  Software: number;
  CurrentSalary: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('spreadsheet') spreadsheetObj!: SpreadsheetComponent;

  tradeData: TradeData[] = [];
  initialLoadStartTime: number = 0;
  startTime: number = 0;
  exportStartTime: number = 0;
  openStartTime: number = 0;
  isCreated: boolean = false;

  ngOnInit(): void {
    this.initialLoadStartTime = performance.now();
    this.tradeData = this.getTradeData(50000);
  }

  getTradeData(dataCount: number = 50000): TradeData[] {
    const tradeData: TradeData[] = [];

    for (let i = 1; i <= dataCount; i++) {
      tradeData.push({
        EmployeeID: 10000 + i,
        Employees: `Employee ${i}`,
        Designation: 'Developer',
        Location: 'USA',
        Status: 'Active',
        Shift: 'US',
        Trustworthiness: 'Perfect',
        Rating: Math.floor(Math.random() * 5) + 1,
        Software: Math.floor(Math.random() * 100),
        CurrentSalary: Math.floor(Math.random() * 100000)
      });
    }

    return tradeData;
  }

  created(): void {
    setTimeout(() => {
      const timeTaken = Math.round(performance.now() - this.initialLoadStartTime);
      alert(`Initial Load Time Taken : ${timeTaken} ms`);
    }, 500);

    this.isCreated = true;
  }

  actionBegin(): void {
    if (this.isCreated) {
      this.startTime = performance.now();
    }
  }

  actionComplete(): void {
    if (!this.isCreated || this.startTime === 0) {
      return;
    }

    const timeTaken = Math.round(performance.now() - this.startTime);

    setTimeout(() => {
      alert(`Time Taken : ${timeTaken} ms`);
    }, 500);
  }

  beforeOpen(): void {
    this.openStartTime = performance.now();
  }

  openComplete(): void {
    const openTime = Math.round(performance.now() - this.openStartTime);

    setTimeout(() => {
      alert(`Open Time Taken : ${openTime} ms`);
    }, 500);
  }

  beforeSave(args: any): void {
    console.log(args);

    args.isFullPost = false;

    this.exportStartTime = performance.now();
  }

  saveComplete(): void {
    console.log('called');
    const exportTime = Math.round(performance.now() - this.exportStartTime);

    setTimeout(() => {
      alert(`Export Time Taken : ${exportTime} ms`);
    }, 500);
  }
}
