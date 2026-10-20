import { SpreadsheetComponent } from '@syncfusion/ej2-spreadsheet';

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

let initialLoadStartTime = performance.now();
let startTime = 0;
let exportStartTime = 0;
let openStartTime = 0;
let isCreated = false;

const created = () => {
  setTimeout(() => {
    alert(
      `Initial Load Time Taken : ${Math.round(
        performance.now() - initialLoadStartTime
      )} ms`
    );
  }, 500);

  isCreated = true;
};

const actionBegin = () => {
  if (isCreated) {
    startTime = performance.now();
  }
};

const actionComplete = () => {
  if (!isCreated || startTime === 0) {
    return;
  }

  const timeTaken = Math.round(
    performance.now() - startTime
  );

  setTimeout(() => {
    alert(`Time Taken : ${timeTaken} ms`);
  }, 500);
};

const beforeOpen = () => {
  openStartTime = performance.now();
};

const openComplete = () => {
  const openTime = Math.round(
    performance.now() - openStartTime
  );

  setTimeout(() => {
    alert(`Open Time Taken : ${openTime} ms`);
  }, 500);
};

const beforeSave = (args) => {
  console.log(args);

  args.isFullPost = false;

  exportStartTime = performance.now();
};

const saveComplete = () => {
  console.log("callled");
  const exportTime = Math.round(
    performance.now() - exportStartTime
  );

  setTimeout(() => {
    alert(`Export Time Taken : ${exportTime} ms`);
  }, 500);
};

const spreadsheet = new SpreadsheetComponent({
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
  created: created,
  actionBegin: actionBegin,
  actionComplete: actionComplete,
  beforeOpen: beforeOpen,
  openComplete: openComplete,
  beforeSave: beforeSave,
  saveComplete: saveComplete,
  sheets: [
    {
      name: 'Trade Data',
      ranges: [
        {
          dataSource: tradeData,
          startCell: 'A1'
        }
      ]
    }
  ]
});

spreadsheet.appendTo('#spreadsheet');
