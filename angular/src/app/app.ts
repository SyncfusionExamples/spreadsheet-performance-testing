import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { Component } from '@angular/core';

function getTradeData(dataCount = 50000) {
  const tradeData = [];

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

const tradeData = getTradeData(50000);

@Component({
  imports: [SpreadsheetAllModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-spreadsheet
    #spreadsheet
    [openUrl]="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
    [saveUrl]="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"
    (created)="created()"
    (actionBegin)="actionBegin()"
    (actionComplete)="actionComplete()"
    (beforeOpen)="beforeOpen()"
    (openComplete)="openComplete()"
    (beforeSave)="beforeSave($event)"
    (saveComplete)="saveComplete()">
    <e-sheets>
      <e-sheet name="Trade Data">
        <e-ranges>
          <e-range [dataSource]="tradeData" startCell="A1"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>`,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    ejs-spreadsheet {
      display: block;
      height: 100%;
    }
  `]
})
export class App {
  tradeData = tradeData;
  initialLoadStartTime = performance.now();
  startTime = 0;
  exportStartTime = 0;
  openStartTime = 0;
  isCreated = false;

  created = () => {
    setTimeout(() => {
      alert(
        `Initial Load Time Taken : ${Math.round(
          performance.now() - this.initialLoadStartTime
        )} ms`
      );
    }, 500);

    this.isCreated = true;
  };

  actionBegin = () => {
    if (this.isCreated) {
      this.startTime = performance.now();
    }
  };

  actionComplete = () => {
    if (!this.isCreated || this.startTime === 0) {
      return;
    }

    const timeTaken = Math.round(
      performance.now() - this.startTime
    );

    setTimeout(() => {
      alert(`Time Taken : ${timeTaken} ms`);
    }, 500);
  };

  beforeOpen = () => {
    this.openStartTime = performance.now();
  };

  openComplete = () => {
    const openTime = Math.round(
      performance.now() - this.openStartTime
    );

    setTimeout(() => {
      alert(`Open Time Taken : ${openTime} ms`);
    }, 500);
  };

  beforeSave = (args: any) => {
    args.isFullPost = false;
    this.exportStartTime = performance.now();
  };

  saveComplete = () => {
    const exportTime = Math.round(
      performance.now() - this.exportStartTime
    );

    setTimeout(() => {
      alert(`Export Time Taken : ${exportTime} ms`);
    }, 500);
  };
}
