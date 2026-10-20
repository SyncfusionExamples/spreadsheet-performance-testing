import React, { useRef } from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

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

export default function App() {
  const initialLoadStartTime = useRef(performance.now());
  const startTime = useRef(0);
  const exportStartTime = useRef(0);
  const openStartTime = useRef(0);
  const isCreated = useRef(false);

  const created = () => {
    setTimeout(() => {
      alert(
        `Initial Load Time Taken : ${Math.round(
          performance.now() - initialLoadStartTime.current
        )} ms`
      );
    }, 500);

    isCreated.current = true;
  };

  const actionBegin = () => {
    if (isCreated.current) {
      startTime.current = performance.now();
    }
  };

  const actionComplete = () => {
    if (!isCreated.current || startTime.current === 0) {
      return;
    }

    const timeTaken = Math.round(
      performance.now() - startTime.current
    );

    setTimeout(() => {
      alert(`Time Taken : ${timeTaken} ms`);
    }, 500);
  };

  const beforeOpen = () => {
    openStartTime.current = performance.now();
  };

  const openComplete = () => {
    const openTime = Math.round(
      performance.now() - openStartTime.current
    );

    setTimeout(() => {
      alert(`Open Time Taken : ${openTime} ms`);
    }, 500);
  };

  const beforeSave = (args) => {
    args.isFullPost = false;

    exportStartTime.current = performance.now();
  };

  const saveComplete = () => {
    const exportTime = Math.round(
      performance.now() - exportStartTime.current
    );

    setTimeout(() => {
      alert(`Export Time Taken : ${exportTime} ms`);
    }, 500);
  };

  return (
    <SpreadsheetComponent
      openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
      saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"
      created={created}
      actionBegin={actionBegin}
      actionComplete={actionComplete}
      beforeOpen={beforeOpen}
      openComplete={openComplete}
      beforeSave={beforeSave}
      saveComplete={saveComplete}
      sheets={[
        {
          name: 'Trade Data',
          ranges: [
            {
              dataSource: tradeData,
              startCell: 'A1'
            }
          ]
        }
      ]}
    />
  );
}
