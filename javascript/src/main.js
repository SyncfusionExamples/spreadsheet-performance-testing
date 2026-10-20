// Data Generation Function
function getTradeData(dataCount) {
    dataCount = dataCount || 50000;
    var tradeData = [];

    for (var i = 1; i <= dataCount; i++) {
        tradeData.push({
            EmployeeID: 10000 + i,
            Employees: 'Employee ' + i,
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

// Generate trade data
var tradeData = getTradeData(50000);

// Performance Tracking Variables
var initialLoadStartTime = performance.now();
var startTime = 0;
var exportStartTime = 0;
var openStartTime = 0;
var isCreated = false;

// Event Handler: Created
function onCreated() {
    setTimeout(function() {
        var timeTaken = Math.round(performance.now() - initialLoadStartTime);
        alert('Initial Load Time Taken : ' + timeTaken + ' ms');
    }, 500);

    isCreated = true;
}

// Event Handler: Action Begin
function onActionBegin(args) {
    if (isCreated) {
        startTime = performance.now();
    }
}

// Event Handler: Action Complete
function onActionComplete(args) {
    if (!isCreated || startTime === 0) {
        return;
    }

    var timeTaken = Math.round(performance.now() - startTime);

    setTimeout(function() {
        alert('Time Taken : ' + timeTaken + ' ms');
    }, 500);
}

// Event Handler: Before Open
function onBeforeOpen(args) {
    openStartTime = performance.now();
}

// Event Handler: Open Complete
function onOpenComplete(args) {
    var openTime = Math.round(performance.now() - openStartTime);

    setTimeout(function() {
        alert('Open Time Taken : ' + openTime + ' ms');
    }, 500);
}

// Event Handler: Before Save
function onBeforeSave(args) {
    console.log(args);

    args.isFullPost = false;

    exportStartTime = performance.now();
}

// Event Handler: Save Complete
function onSaveComplete(args) {
    console.log('called');
    var exportTime = Math.round(performance.now() - exportStartTime);

    setTimeout(function() {
        alert('Export Time Taken : ' + exportTime + ' ms');
    }, 500);
}

// Initialize Spreadsheet
var spreadsheetInstance = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    created: onCreated,
    actionBegin: onActionBegin,
    actionComplete: onActionComplete,
    beforeOpen: onBeforeOpen,
    openComplete: onOpenComplete,
    beforeSave: onBeforeSave,
    saveComplete: onSaveComplete,
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

// Render the spreadsheet
spreadsheetInstance.appendTo('#spreadsheet');
