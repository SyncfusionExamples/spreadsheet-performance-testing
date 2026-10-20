import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

function getTradeData(dataCount: number = 50000): Object[] {
    const tradeData: Object[] = [];

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

const tradeData: Object[] = getTradeData(50000);

let initialLoadStartTime: number = performance.now();
let startTime: number = 0;
let exportStartTime: number = 0;
let isCreated: boolean = false;

// Initialize the Spreadsheet component
const spreadsheet: Spreadsheet = new Spreadsheet({
    openUrl: 'https://localhost:7116/api/spreadsheet/open',
    saveUrl: 'https://localhost:7116/api/spreadsheet/save',

    sheets: [{
        name: 'Trade Data',
        ranges: [{
            dataSource: tradeData,
            startCell: 'A1'
        }]
    }],

    created: () => {
        setTimeout(() => {
            alert(
                `Initial Load Time Taken : ${Math.round(
                    performance.now() - initialLoadStartTime
                )} ms`
            );
        }, 500);

        isCreated = true;
    },

    actionBegin: () => {
        if (isCreated) {
            startTime = performance.now();
        }
    },

    actionComplete: () => {
        if (!isCreated || startTime === 0) {
            return;
        }

        const timeTaken: number = Math.round(
            performance.now() - startTime
        );

        setTimeout(() => {
            alert(`Time Taken : ${timeTaken} ms`);
        }, 500);
    },

    beforeSave: (args: Object) => {
         args.isFullPost = false;
        exportStartTime = performance.now();
    },

    saveComplete: (args: Object) => {

        const exportTime: number = Math.round(
            performance.now() - exportStartTime
        );

        setTimeout(() => {
            alert(`Export Time Taken : ${exportTime} ms`);
        }, 500);
    }
});

// Render the Spreadsheet Component.
spreadsheet.appendTo('#element');